import { ArrowLeft, Building2, GraduationCap, HeartPulse, Home, Hotel, Landmark, ShoppingBag, Sun } from 'lucide-react'
import Faq from './Faq'
import QuoteForm from './QuoteForm'

const benefits = [
  { title: 'حریم به‌موقع', text: 'از شفاف تا مات در کمتر از یک ثانیه — بدون پرده، کرکره یا قطعه متحرک.' },
  { title: 'ایمنی ساخته‌شده', text: 'در صورت شکستن شیشه، فیلم قطعات را در جای خود نگه می‌دارد.' },
  { title: 'مهار ۹۹٪ اشعه UV', text: 'محافظت از مبلمان، آثار هنری و کفپوش‌ها در برابر آفتاب.' },
  { title: 'کاهش گرمای خورشید', text: 'قابل توجه بخش مادون قرمز را блок می‌کند و هزینه سرمایش را پایین می‌آورد.' },
  { title: 'آکوستیک بهتر', text: 'تا ۲۰٪ کاهش صدای بیشتر نسبت به شیشه ساده.' },
  { title: 'کنترل کامل', text: 'کلید دیواری، ریموت، اپلیکیشن موبایل، دستیار صوتی یا دیمر تنظیم سطح.' },
  { title: 'دارای گواهینامه', text: 'دارای CE و RoHS — مناسب فضاهای تجاری و درمانی.' },
  { title: 'گارانتی ۱۰ ساله', text: 'طولانی‌ترین ضمانت موجود در بازار ایران.' },
  { title: 'اندازه سفارشی و نصب', text: 'هر پروژه به ابعاد دقیق شیشه شما برش می‌خورد — یک شرکت از ابتدا تا انتها.' },
]

const applications = [
  { icon: Building2, title: 'دفاتر و اتاق‌های جلسات', text: 'پارتیشن‌های شیشه‌ای با حریم آنی — انعطاف فضای باز بدون پرده.' },
  { icon: Hotel, title: 'هتل‌ها و پذیرایی', text: 'پارتیشن سرویس بهداشتی، تفکیک سوئیت و دیوارهای شاخص لابی.' },
  { icon: HeartPulse, title: 'مراکز درمانی و کلینیک‌ها', text: 'حریم بهداشتی و بدون پرده برای اتاق معاینه و بخش‌ها.' },
  { icon: Home, title: 'مسکونی لوکس', text: 'سرویس‌ها، اتاق پرو، اتاق شراب و سینمای خانگی.' },
  { icon: ShoppingBag, title: 'ریتیل و شوروم', text: 'ویترین نمایشگر شفاف و فضاهای VIP سوییچ‌شو.' },
  { icon: Landmark, title: 'بانک‌ها و خدمات حرفه‌ای', text: 'فضاهای جلسه محرمانه با یک سوییچ ساده.' },
  { icon: GraduationCap, title: 'آموزش و بناهای عمومی', text: 'حریم بادوام و کنترل‌پذیر برای فضاهای آموزشی مدرن.' },
  { icon: Sun, title: 'فضای باز و تفریحی', text: 'سری‌های مقاوم در برابر آب و هوای آزاد برای استخر و تراس.' },
]

export default function Sections() {
  return (
    <>
      <section className="k-mission">
        <div className="k-container k-mission-grid">
          <div>
            <p className="k-kicker k-kicker-gold">به فلمبیس خوش آمدید</p>
            <h2>راهکارهای شیشه هوشمند، با نصب حرفه‌ای در سراسر ایران</h2>
          </div>
          <div>
            <p>
              فلمبیس کاری می‌کند که هر پنل شیشه، بیشتر کار کند — حریم، آسایش، بهره‌وری انرژی و آزادی طراحی را از طریق فناوری فیلم هوشمند به پروژه شما می‌آورد.
            </p>
            <p>
              حریم نباید به بهای نور طبیعی تمام شود. شیشه باید فضا را ارتقا دهد، نه محدود کند. به همین دلیل شیشه هوشمند را برای دفاتر، هتل‌ها، کلینیک‌ها، خانه‌ها و شوروم‌ها در سراسر کشور در دسترس می‌کنیم — با نصب حرفه‌ای، قیمت منصفانه و گارانتی بلندمدت.
            </p>
            <blockquote>حریم به‌موقع — بدون هرگز فدا کردن نور طبیعی.</blockquote>
          </div>
        </div>
      </section>

      <section id="technologies" className="k-section k-section-gray">
        <div className="k-container">
          <p className="k-kicker k-kicker-gold">خط محصولات</p>
          <h2 className="k-section-title">دو فناوری. یک سطح، بازتعریف‌شده.</h2>
          <p className="k-section-lead">از حریم آنی تا شیشه‌ای که به نمایشگر تبدیل می‌شود — مهندسی‌شده، سفارشی‌ساز و نصب‌شده توسط یک تیم.</p>

          <article className="k-product">
            <header className="k-product-head">
              <span className="k-product-index">۰۱ — فیلم حریم هوشمند</span>
              <h3>فیلم سوییچ‌شو PDLC</h3>
              <p>شیشه در لحظه از شفاف به مات تغییر می‌کند. نه پرده، نه کرکره، نه قطعه متحرک. با وصل بودن برق شفاف است؛ با قطع آن، یک پنل مات یکدست.</p>
            </header>
            <div className="k-product-body">
              <div className="k-product-variant">
                <h4>چسبی (رتروفیت)</h4>
                <p>روی شیشه موجود نصب می‌شود — راهکار رتروفیت برای دفاتر، اتاق جلسات، سرویس‌ها و ویترین‌ها. بدون نیاز به تعویض شیشه.</p>
              </div>
              <div className="k-product-variant">
                <h4>لمینیت (نوساز)</h4>
                <p>فیلم داخل شیشه مهر و موم می‌شود — بیشترین دوام و شفافیت. به‌صورت فیلم برای شیشه‌بر، یا پنل کامل شیشه هوشمند سوییچ‌شو عرضه می‌شود.</p>
              </div>
              <ul className="k-product-specs" aria-label="مشخصات">
                <li>شفافیت <bdi dir="ltr">Clarity 085 / 087 / 091</bdi></li>
                <li>رنگی و تینت‌شده: نارنجی · سبز · آبی · قرمز</li>
                <li>سری دمای بالا (فضای باز)</li>
                <li>فیلم معکوس PNLC</li>
              </ul>
            </div>
            <aside className="k-product-note">
              <strong>آماده پروجکشن.</strong> در حالت مات، هر پنل به یک سطح باکیفیت برای ویدئوپروژکتور تبدیل می‌شود — دیوار اتاق جلسات در روز، پرده نمایش در ساعت جلسه.
            </aside>
          </article>

          <article className="k-product">
            <header className="k-product-head">
              <span className="k-product-index">۰۲ — فیلم نمایشگر شفاف LED</span>
              <h3>تبدیل شیشه به نمایشگر</h3>
              <p>روی پنجره، پارتیشن یا دیوار شیشه‌ای نصب می‌شود تا ویدئو، تصویر یا محتوای متحرک نمایش دهد — در حالی که شفافیت حفظ می‌شود و دید پشت شیشه باقی می‌ماند. محتوا روی شیشه شناور به نظر می‌رسد.</p>
            </header>
            <ul className="k-product-list">
              <li><strong>چه می‌کند؟</strong> شیشه‌های موجود را بدون مسدود کردن دید و نور به نمایشگر دیجیتال چشمگیر تبدیل می‌کند.</li>
              <li><strong>کجا کاربرد دارد؟</strong> ویترین فروشگاه‌ها، لابی هتل، شوروم، پذیرش، نصب‌های نمایشگاهی و موزه‌ای.</li>
              <li><strong>چرا مشتریان می‌خواهند؟</strong> برندینگ پرتأثیر روی سطحی که از قبل دارند؛ جلوه‌ای که تابلوی ساده نمی‌سازد.</li>
            </ul>
            <aside className="k-product-note k-product-note-light">
              <strong>ویدئو شناور</strong> · تصویر · موشن — روی شیشه، بدون از دست دادن نور و منظر.
            </aside>
          </article>
        </div>
      </section>

      <section id="why" className="k-section">
        <div className="k-container">
          <p className="k-kicker k-kicker-gold">چرا فلمبیس</p>
          <h2 className="k-section-title">عملکرد، درون هر پنل</h2>
          <ol className="k-benefits">
            {benefits.map((benefit, index) => (
              <li key={benefit.title}>
                <span className="k-benefit-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="applications" className="k-section k-section-gray">
        <div className="k-container">
          <p className="k-kicker k-kicker-gold">کجا کاربرد دارد</p>
          <h2 className="k-section-title">ساخته‌شده برای فضاهایی که کار، درمان، پذیرایی و زندگی در آن‌ها جریان دارد</h2>
          <ul className="k-apps">
            {applications.map((app) => (
              <li key={app.title}>
                <span className="k-app-icon"><app.icon size={22} aria-hidden="true" /></span>
                <strong>{app.title}</strong>
                <p>{app.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="k-section">
        <div className="k-container k-container-narrow">
          <p className="k-kicker k-kicker-gold">سؤالات متداول</p>
          <h2 className="k-section-title">هر آنچه باید بدانید</h2>
          <Faq />
        </div>
      </section>

      <section id="quote" className="k-cta">
        <div className="k-container">
          <div className="k-cta-copy">
            <p className="k-kicker k-kicker-gold">دموی رایگان</p>
            <h2>سوییچ شدن را در فضای خودتان ببینید</h2>
            <p>
              نمونه‌های واقعی همه محصولات را نزد شما می‌آوریم، همان‌جا سوییچ‌شان می‌کنیم و حداکثر ظرف ۴۸ ساعت پیش‌فاکتور کامل و اندازه‌گیری‌شده ارائه می‌دهیم. ابعاد شیشه‌های خود را برای ما بفرستید تا شروع کنیم.
            </p>
            <ul className="k-cta-points">
              <li>بازدید و اندازه‌گیری رایگان</li>
              <li>پیش‌فاکتور ظرف ۴۸ ساعت</li>
              <li>گارانتی ۱۰ ساله فلمبیس</li>
            </ul>
            <a href="tel:02112345678" className="k-btn k-btn-gold">تماس فوری: <bdi>۰۲۱-۱۲۳۴۵۶۷۸</bdi></a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
