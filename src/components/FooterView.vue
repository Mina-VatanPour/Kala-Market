<template>
  <!-- footer------------------------------------------->
  <footer class="footer-main-site">
    <section class="d-block">
      <div class="footer-shopping-features border-bottom p-4">
        <div class="container-fluid ps-5">
          <div class="col-12 mx-auto">
            <div class="item">
              <span class="icon-shopping">
                <img
                    :src="
                    require('@/assets/images/footer/features/express-delivery.svg')
                  "
                    width="50"
                    alt="تحویل اکسپرس"
                    class="img-shopping"
                />
              </span>
              <span class="title-shopping">تحویل اکسپرس</span>
              <span class="desc-shopping">در کمترین زمان دریافت کنید</span>
            </div>
            <div class="item">
              <span class="icon-shopping">
                <img
                    :src="
                    require('@/assets/images/footer/features/support.svg')
                  "
                    width="50"
                    alt="پشتیبانی ۲۴ ساعته"
                    class="img-shopping"
                />
              </span>
              <span class="title-shopping">پشتیبانی ۲۴ ساعته</span>
              <span class="desc-shopping">پشتیبانی هفت روز هفته</span>
            </div>
            <div class="item">
              <span class="icon-shopping">
                <img
                    :src="require('@/assets/images/footer/features/cash-on-delivery.svg')"
                    width="50"
                    alt="پرداخت در محل"
                    class="img-shopping"
                />
              </span>
              <span class="title-shopping">پرداخت در محل</span>
              <span class="desc-shopping">هنگام دریافت پرداخت کنید</span>
            </div>
            <div class="item">
              <span class="icon-shopping">
                <img
                    :src="
                    require('@/assets/images/footer/features/days-return.svg')
                  "
                    width="50"
                    alt="۷ روز ضمانت بازگشت"
                    class="img-shopping"
                />
              </span>
              <span class="title-shopping">۷ روز ضمانت بازگشت</span>
              <span class="desc-shopping">هفت روز مهلت دارید </span>
            </div>
            <div class="item">
              <span class="icon-shopping">
                <img
                    :src="require('@/assets/images/footer/features/original-products.svg')"
                    width="50"
                    alt="ضمانت اصل‌بودن کالا"
                    class="img-shopping"
                />
              </span>
              <span class="title-shopping">ضمانت اصل‌بودن کالا</span>
              <span class="desc-shopping">تایید اصالت کالا</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="d-block">
      <div class="container-fluid">
        <div class="col-12">
          <div class="footer-middlebar ps-5 pt-5">
            <div class="col-lg-8 pr">
              <div class="footer-links">
                <div class="col-xs-12 col-md-4 pr">
                  <section class="footer-links-col">
                    <div class="headline-links">
                      <a href="#"> با کالامارکت </a>
                    </div>
                    <ul class="footer-menu-ul">
                      <li class="menu-item-type-custom">
                        <a href="#"> اتاق خبر کالامارکت </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> فروش در کالامارکت </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> همکاری با سازمان‌ها </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> فرصت‌های شغلی </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-xs-12 col-md-4 pr">
                  <section class="footer-links-col">
                    <div class="headline-links">
                      <a href="#"> خدمات مشتریان </a>
                    </div>
                    <ul class="footer-menu-ul">
                      <li class="menu-item-type-custom">
                        <a href="#"> پاسخ به پرسش‌های متداول </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> رویه‌های بازگرداندن کالا </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> شرایط استفاده </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> حریم خصوصی </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-xs-12 col-md-4 pr">
                  <section class="footer-links-col">
                    <div class="headline-links">
                      <a href="#"> راهنمای خرید از کالامارکت </a>
                    </div>
                    <ul class="footer-menu-ul">
                      <li class="menu-item-type-custom">
                        <a href="#"> نحوه ثبت سفارش </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> رویه ارسال سفارش </a>
                      </li>
                      <li class="menu-item-type-custom">
                        <a href="#"> شیوه‌های پرداخت </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
            <div class="col-lg-4 pl d-flex justify-content-center">
              <div class="shortcode-widget-area">
                <form action="#" class="form-newsletter mb-4">
                  <fieldset>
                    <span class="form-newsletter-title">
                      با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع
                      شوید...</span
                    >
                    <div class="input-group-newsletter">
                      <input
                          type="email"
                          class="input-field form-control shadow-sm text-center me-2"
                          placeholder="آدرس ایمیل خود را وارد کنید"
                      />
                      <button class="btn btn-info btn-secondary" type="submit">
                        ارسال
                      </button>
                    </div>
                  </fieldset>
                </form>
                <div class="col-md-12">
                  <div class="ft-social-media">
                    <h6 class="text-center text-secondary mb-3">
                      ما را دنبال کنید
                    </h6>
                    <ul>
                      <li>
                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-more-info mt-3 d-flex align-items-center">
              <div class="col-lg-8 pr">
                <div class="footer-content d-block">
                  <div class="text pr-1">
                    <h2 class="title">فروشگاه اینترنتی کالامارکت</h2>
                    <p class="desc">
                      کالامارکت به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی
                      با بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت
                      در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا،
                      موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین
                      فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به دیجی
                      اسمارت با یک سایت پر از کالا رو به رو می‌شوید! هر آنچه که
                      نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید
                      کرد.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 pl">
                <div class="footer-safety-partner">
                  <div class="widget-product d-flex flex-nowrap justify-content-center">
                    <a href="#">
                      <img :src="require('@/assets/images/footer/license/etemad.png')"  class="col-6 border rounded p-2 me-2" alt="">
                    </a>
                    <a href="#">
                    <img :src="require('@/assets/images/footer/license/rezi.png')"  class="col-6 border rounded p-2" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="footer-copyright-text mt-4 border-top pt-3">
                <p>
                  تمامی مطالب، عکس ها و... متعلق به سایت فروشگاهی کالامارکت می
                  باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>

export default {
  name: "FooterView",
}
</script>

<style scoped></style>
