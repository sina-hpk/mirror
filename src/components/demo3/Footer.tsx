import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="k-footer">
      <div className="k-container k-footer-grid">
        <div>
          <div className="k-logo k-logo-footer">
            <span className="k-logo-mark" aria-hidden="true" />
            <span className="k-logo-text">
              <strong>فلمبیس</strong>
              <small>شیشه هوشمند</small>
            </span>
          </div>
          <p className="k-footer-about">
            تأمین‌کننده و مجری فیلم شیشه هوشمند سوییچ‌شو، شیشه هوشمند و نمایشگر شفاف LED در ایران — از اندازه‌گیری تا نصب و پشتیبانی.
          </p>
        </div>
        <div>
          <h4>دسترسی سریع</h4>
          <ul>
            <li><a href="/demo3#technologies">فناوری‌ها</a></li>
            <li><a href="/demo3#why">چرا فلمبیس</a></li>
            <li><a href="/demo3#applications">کاربردها</a></li>
            <li><a href="/demo3#faq">سؤالات متداول</a></li>
            <li><a href="/demo3#quote">درخواست دمو</a></li>
          </ul>
        </div>
        <div>
          <h4>تماس</h4>
          <ul className="k-footer-contact">
            <li><Phone size={14} aria-hidden="true" /><bdi>۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵۶۷۸۹</bdi></li>
            <li><Mail size={14} aria-hidden="true" /><bdi dir="ltr">info@filmbase.ir</bdi></li>
            <li><Instagram size={14} aria-hidden="true" /><bdi dir="ltr">instagram.com/filmbase.ir</bdi></li>
            <li><MapPin size={14} aria-hidden="true" /><span>تهران، خیابان ولی‌عصر، کوچه ۱۲، پلاک ۴۵، واحد ۳</span></li>
          </ul>
        </div>
      </div>
      <div className="k-footer-bottom">
        <span>© ۱۴۰۴ فلمبیس — تمامی حقوق محفوظ است.</span>
        <span><a href="/privacy">حریم خصوصی</a> · <a href="/terms">شرایط استفاده</a></span>
      </div>
    </footer>
  )
}
