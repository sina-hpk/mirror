<?php
/**
 * Filmbase lead handler for shared PHP / WordPress hosting.
 * The static site's contact form POSTs JSON here.
 *
 * Configure the destination address below (or via a NOTIFY_EMAIL env var).
 * Leads are emailed and appended to leads.log next to this file.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ---- config ----
$NOTIFY_EMAIL = getenv('LEADS_NOTIFY_EMAIL') ?: 'info@filmbase.ir';
$FROM_EMAIL   = getenv('LEADS_FROM_EMAIL')   ?: 'no-reply@filmbase.ir';
// ----------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    // fall back to normal form-encoded posts
    $data = $_POST;
}
if (!is_array($data) || empty($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

// ---- validation (mirrors the front-end zod schema) ----
$errors = [];

$name = trim((string)($data['name'] ?? ''));
if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    $errors['name'] = 'نام نامعتبر است';
}

$phone = trim((string)($data['phone'] ?? ''));
if (!preg_match('/^(\+98|0)?9\d{9}$/', $phone)) {
    $errors['phone'] = 'شماره موبایل نامعتبر است';
}

$email = trim((string)($data['email'] ?? ''));
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'ایمیل نامعتبر است';
}

$projectTypes = ['residential', 'commercial', 'automotive', 'healthcare', 'retail', 'other'];
$projectType = (string)($data['projectType'] ?? '');
if (!in_array($projectType, $projectTypes, true)) {
    $errors['projectType'] = 'نوع پروژه نامعتبر است';
}

$area = trim((string)($data['area'] ?? ''));
if (mb_strlen($area) > 50) {
    $errors['area'] = 'مساحت نامعتبر است';
}

$message = trim((string)($data['message'] ?? ''));
if (mb_strlen($message) < 20 || mb_strlen($message) > 1000) {
    $errors['message'] = 'توضیحات باید بین ۲۰ تا ۱۰۰۰ کاراکتر باشد';
}

$consent = !empty($data['consent']);
if (!$consent) {
    $errors['consent'] = 'تایید شرایط الزامی است';
}

$sampleKit = !empty($data['sampleKit']);

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation_failed', 'issues' => $errors], JSON_UNESCAPED_UNICODE);
    exit;
}

// ---- build message ----
$receivedAt = date('Y-m-d H:i:s');
$typeLabels = [
    'residential' => 'مسکونی',
    'commercial'  => 'تجاری/اداری',
    'automotive'  => 'خودرو',
    'healthcare'  => 'درمانی',
    'retail'      => 'ریتیل',
    'other'       => 'سایر',
];
$typeLabel = $typeLabels[$projectType] ?? $projectType;

$lines = [
    "درخواست جدید از وب‌سایت فلمبیس",
    "زمان: {$receivedAt}",
    "نام: {$name}",
    "موبایل: {$phone}",
    "ایمیل: " . ($email !== '' ? $email : '-'),
    "نوع پروژه: {$typeLabel}",
    "مساحت: " . ($area !== '' ? $area : '-'),
    "VIP Sample Kit: " . ($sampleKit ? 'بله' : 'خیر'),
    "توضیحات:",
    $message,
];
$bodyText = implode("\n", $lines);

// ---- append to log (best effort) ----
@file_put_contents(
    __DIR__ . '/leads.log',
    $bodyText . "\n" . str_repeat('-', 40) . "\n",
    FILE_APPEND | LOCK_EX
);

// ---- send email (best effort) ----
$subject = '=?UTF-8?B?' . base64_encode('درخواست جدید فلمبیس - ' . $name) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Filmbase <' . $FROM_EMAIL . '>',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}
@mail($NOTIFY_EMAIL, $subject, $bodyText, implode("\r\n", $headers));

echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
