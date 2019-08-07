(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/accordion/accordion.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/accordion/accordion.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"https://formspree.io/waleedadelshafiq@yahoo.com\" method=\"POST\">\n  <input type=\"text\" class=\"name\"  name=\"name\" placeholder=\"الاسم\">\n  <input type=\"email\" class=\"email\" placeholder=\"بريدك الإلكتروني\">\n  <input type=\"tel\" required class=\"number\"  name=\"number\"  placeholder=\"رقم الموبايل\">\n  <textarea  class=\"message\" name=\"meassage\" placeholder=\"اكتب رسالتك او استفسارك هنا وهنقوم بالرد عليك خلال دقائق\"></textarea>\n  <button type=\"submit\" class=\"btn btn-success submit\">إرسال <i class=\"fas fa-paper-plane\"></i></button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/contact-us/contact-us.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/contact-us/contact-us.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"bg-info text-white header\">\n        تواصل معانا برسالة او اترك رقم موبايلك ومندوب من خدمة العملاء هيتواصل معاك\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-5 col-12\" id=\"ContactForm\">\n        <!-- <form id=\"contact-form\" action=\"mailto:waleedadelshafiq@gmail.com\" method=\"POST\" enctype=\"text/plain\">\n          <input type=\"text\" id=\"inputName\" name=\"name\" placeholder=\"الاسم\">\n          <input type=\"email\" id=\"inputEmail\" name=\"email\" placeholder=\"بريدك الإلكتروني\">\n          <input type=\"tel\" id=\"idNumber\"  name=\"number\"   placeholder=\"رقم الموبايل\">\n          <textarea id=\"inputMessage\" name=\"meassage\" placeholder=\"اكتب رسالتك او استفسارك هنا وهنقوم بالرد عليك خلال دقائق\"></textarea>\n          <button type=\"submit\" (click)=\"show()\" class=\"btn btn-success submit\">إرسال <i class=\"fas fa-paper-plane\"></i></button>\n        </form> -->\n\n\n        <form #ContactForm=\"ngForm\" (ngSubmit)=\"OnSubmit(ContactForm); ContactForm.reset()\"\n        action=\"mailto:waleedadelshafiq@gmail.com\" method=\"POST\" enctype=\"text/plain\">\n          <div class=\"form-group\">\n              <input\n              ngModel\n              #name=\"ngModel\"\n              type=\"text\"\n              class=\"form-control  name\"\n              name=\"name\"\n              id=\"name\"\n              [(ngModel)]=\"Name\"\n              minlength=\"3\"\n              placeholder=\"الاسم\"\n              required>\n              <div *ngIf=\"name.touched && name.errors?.required\"\n                class=\"alert alert-danger\" style=\"text-align: right\">\n                يجب إدخال الاسم\n              </div>\n              <div *ngIf=\"name.invalid && name.touched\"\n                class=\"alert alert-danger\" style=\"text-align: right\">\n              يجب الا يقل الاسم عن ثلاثة حروف\n              </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input\n              ngModel\n              #email=\"ngModel\"\n              type=\"email\"\n              [(ngModel)]=\"Email\"\n              class=\"form-control  email\"\n              name=\"email\"\n              pattern=\"^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.com$\"\n              placeholder=\"بريدك الإلكتروني\">\n              <div *ngIf=\"email.invalid\"\n                class=\"alert alert-danger\" style=\"text-align: right\">\n               يجب إدخال البريد الإلكتروني بطريقة صحيحية\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <input\n              ngModel\n              #number=\"ngModel\"\n              type=\"tel\"\n              [(ngModel)]=\"Phone\"\n              class=\"form-control number\"\n              name=\"number\"\n              placeholder=\"رقم الموبايل\"\n              [maxLength]=\"11\"\n              minlength=\"11\"\n              pattern=\"(01)[0-9]{9}\"\n              required>\n              <div *ngIf=\"number.touched && number.errors?.required\"\n                  class=\"alert alert-danger\" style=\"text-align: right\">\n                يجب إدخال رقم الموبايل\n              </div>\n              <!-- <div *ngIf=\"number.touched && !number.valid\"\n              class=\"alert alert-danger\" style=\"text-align: right\">\n             يجب إدخال رقم الموبايل بطريقة صحيحة\n          </div> -->\n      </div>\n      <div class=\"form-group\">\n            <textarea\n              ngModel\n              [(ngModel)]=\"Message\"\n              #message=\"ngModel\"\n              class=\"form-control message\"\n              name=\"meassage\"\n              placeholder=\"اكتب رسالتك او استفسارك هنا وهنقوم بالرد عليك خلال دقائق\"\n              required>\n            </textarea>\n            <div *ngIf=\"message.touched && message.invalid\"\n            class=\"alert alert-danger\" style=\"text-align: right\">\n          يجب إدخال نص الرسالة\n        </div>\n    </div>\n\n            <button [disabled]=\"!ContactForm.form.valid\"\n              type=\"submit\"\n              class=\"btn btn-success submit\">\n              إرسال\n              <i class=\"fas fa-paper-plane\"></i>\n            </button>\n\n        </form>\n\n\n      <!-- <form action=\"https://formspree.io/waleedadelshafiq@gmail.com\" method=\"POST\">\n        <input type=\"text\" class=\"name\" name=\"name\" placeholder=\"الاسم\">\n        <input type=\"email\" class=\"email\" name=\"email\" placeholder=\"بريدك الإلكتروني\">\n        <input type=\"tel\" class=\"number\"  name=\"number\"   placeholder=\"رقم الموبايل\">\n        <textarea class=\"message\" name=\"meassage\" placeholder=\"اكتب رسالتك او استفسارك هنا وهنقوم بالرد عليك خلال دقائق\"></textarea>\n        <button type=\"submit\" (click)=\"show()\" class=\"btn btn-success submit\">إرسال <i class=\"fas fa-paper-plane\"></i></button>\n      </form> -->\n    </div>\n    <div class=\"col-md-7 col-12\" style=\"margin-top: 7%;\n    margin-bottom: 5%;\">\n    <iframe\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.242678655306!2d31.321352824169235!3d30.05662818241678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e5d94c66301%3A0xddddf100de42206c!2sNasr+City%2C+Al+Manteqah+Al+Oula%2C+Nasr+City%2C+Cairo+Governorate!5e0!3m2!1sen!2seg!4v1564611184378!5m2!1sen!2seg\"\n    id=\"maps\" frameborder=\"0\"  width=\"100%\" height=\"100%\" style=\"border:0\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <div class=\"row\">\n\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/content.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/content.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/home/home.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 7%\"></div>\n<app-slider></app-slider>\n<app-image-section></app-image-section>\n<app-image-background></app-image-background>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/image-background/image-background.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/image-background/image-background.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sectionImg\">\n  <div class=\"row sectionImg\">\n    <img src=\"../../../../assets/img_mountains.jpg\" alt=\"slide\" class=\"responsive\" width=\"100%\" height=\"50%\">\n    <div id=\"LoveYourSmileDiv\">\n      <h1 class=\"topLeft\">Love your Smile</h1>\n      <div class=\" bottomLeft col-md-6 col-10\">\n        <div class=\"row\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n          Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum.\n          Ut ac ligula sapien.\n          Suspendisse cursus faucibus finibus.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/image-section/image-section.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/image-section/image-section.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"Title\">\n        أكتف\n        افضل شركات نقل الاثاث\n      </h1>\n    </div>\n\n  </div>\n</div>\n<hr>\n\n<!-- Start 3 Div with dialog -->\n<div class=\"container\">\n<div class=\"row justify-content-center\">\n\n  <div class=\"col-md-4 col-sm-9\">\n    <div class=\"pic\">\n      <img src=\"../../../../assets/wansh1.jpg\" alt=\"Picture\">\n      <div class=\"TitleParagraph\">\n        <p>\n          اقوى ونش رفع اثاث بين كل شركات نقل الاثاث\n        </p>\n      </div>\n      <a class=\"mooore\" type=\"button\" id=\"openerOne\"><span>المزيد</span></a>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 col-sm-9\">\n    <div class=\"pic\">\n      <img src=\"../../../../assets/cartoon6.jpg\" alt=\"Picture\">\n      <div class=\"TitleParagraph\">\n        <p>أفضل عمالة مدربة على نقل الاثاث بأحترافية وخبرة اكثر من 5 سنين</p>\n      </div>\n      <a class=\"mooore\" type=\"button\" id=\"openerTwo\"><span>المزيد</span></a>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 col-sm-9\">\n    <div class=\"pic\">\n      <img src=\"../../../../assets/catroon1.jpg\" alt=\"Picture\">\n      <div class=\"TitleParagraph\">\n        <p>\n          تغليف و نقل الاثاث بكل احترافية\n        </p>\n      </div>\n      <a class=\"mooore\" type=\"button\" id=\"openerThree\"><span>المزيد</span></a>\n    </div>\n  </div>\n\n</div>\n</div>\n<!-- End 3 Div with dialog -->\n\n<div id=\"dialogOne\" title=\"أوناش الهيدروليك\">\n  <p class=\"TextInDialog\">\n      شركتنا معروفة بين كل شركات نقل الاثاث بأننا لدينا اقوى\n      واحدث ونش رفع اثاث فى مصر بيوصل لحد الدور الـ 25 بكل سهولة\n      وبيضمنلك نقل عفش بكل سلاسة وكمان بسعر رمزى مقارنة بباقى\n      شركات نقل الاثاث غير ان ونش رفع الاثاث هو الاكثر امان\n      من ناحية تجريح العفش لأن فى اوقات بيكون السلم ضيق ودا\n      بيأدى الى جروح وخربشة اثناء نقل الاثاث دا غير ان\n      المسؤل عن رفع الاثاث بالونش هو عامل مدرب ومحترف\n       وله خبره اكثر من 10 سنين فى مجال نقل الاثاث\n      بالونش وكمان يمكن استخدامه فى تنزيل الاثاث\n      فى حالة ضيق السلم ايضا مع شركة أكتف\n      بنضمنلك نقل الاثاث لشقتك بدون خدش واحد\n  </p>\n</div>\n\n <div id=\"dialogTwo\" title=\"العمالة المدربة\">\n    <p class=\"TextInDialog\">\n        ودا اقوى سبب خلانا افضل شركات نقل الاثاث\n        بالقاهرة وجميع محافظات مصر وهو ان جميع العمال لدينا مدربين\n        أعلى تدريب وبكل احتراف للتعامل مع الاثاث لعملية نقل اثاث سلسة\n        وكمان بيكون فى مشرف خبرة اكثر من 7 سنين فى مجال نقل الاثاث\n        وبيشرف على العمال وعلى نقل الاثاث بكل حذر وايضا لأننا دايما\n        بنهتم برأى العميل فشوفنا ناس كتير عانت جدا اثناء نقل\n        الاثاث بأن فى كتير من شركات نقل الاثاث بتقوم بتركيم\n        العفش فوق بعضه ومش بيهتمو بتنظيمه وبراحة العميل\n        اكتر ما بيهتمو بأنتهاء نقل الاثاث بسرعة ودا عندنا\n        مختلف عن باقى شركات نقل الموبيليا تماما فالمشرف\n        المسؤل عن نقل الاثاث بيكون معاك وبيرصلك العفش\n        بالظبط زى مانتا عاوزة بحيس ان ميتفضلش ليك\n        اى حاجة غير انك تخرج الملابس من الكراتين\n        وتضعها فى خزانة الملابس وبتكون وظيفته هى\n        راحة العميل وتلبية كل طلباته وتوجيه العمال\n    </p>\n  </div>\n\n  <div id=\"dialogThree\" title=\"التغليف والنقل\">\n      <p class=\"TextInDialog\">\n          معظم شركات نقل الاثاث مبتهتمش بالخطوة\n          دى بالدرجة الكافية ودا الى بينتج عنه دايما حوادث نقل\n          الاثاث من كسر فى الزجاج الى كسر شاشات تلفزيون ودا لأن\n          كتير من شركات نقل الاثاث بتحاول تخف التكلفة عليها\n          بعدم تغليف الاثاث بالكامل للحفاظ عليه اثناء نقل\n          الاثاث ودا عندنا فى شركة الوردانى لتغليف و نقل\n          الاثاث بناخد بالنا منه جدا لأننا عارفين قد ايه\n          حاجة العميل مهمة بالنسبه له فبنحرص دايما على\n          تغليف الاثاث بطرق احترافية غير قابلة للكسر او\n           للخدش للحقاظ عليها حتى انتهاء عملية نقل الاثاث\n          بنجاح تام بدون اى اضرار ودا الى بنوعدك بيه من\n          شركتنا لأننا نعتبر افضل شركات نقل العفش وهذ\n          ا يعنى اننا يجب ان نكون على اتم الاستعداد\n      </p>\n    </div>\n\n    <app-some-gallery-home></app-some-gallery-home>\n<!---------------------------------------------------------------------------------->\n<!--------------------------------- Start prtofilo --------------------------------->\n<!---------------------------------------------------------------------------------->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"DivSectionTwo\">\n        <h2 class=\"TitleSectionTwo\">ما يميزنا عن شركات نقل الاثاث الاخرى</h2>\n      </div>\n    </div>\n    <hr>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-4 col-sm-6\">\n      <img src=\"../../../../assets/mountains.jpg\" alt=\"Mountains\" style=\"width:100%\">\n      <h5 class=\"titleH\">المصداقية فى نقل الاثاث</h5>\n      <p class=\"Para\">\n        من اكتر العوامل الى بتميزنا عن جميع شركات نقل الاثاث\n        هى المصداقية فى السعر والتعامل والوعود ,كتير\n        من شركات نقل الاثاث بتتفق مع العميل على مبلغ\n        وبعد انتهاء عملية نقل الاثاث بيتصدمو بمبلغ\n        اكبر وبرضو شركات نقل اثاث بتضحك على العميل\n        وتقوله نقل عفش بـ 500ج وفى الاخر ياخدو منه\n        مبلغ ودا عندنا مبيحصلش معانا تقدر تطمن\n        والمبلغ الى هتتفق عليه هو الى هتدفعه\n      </p>\n    </div>\n\n    <div class=\"col-lg-3 col-md-4 col-sm-6\">\n      <img src=\"../../../../assets/lights.jpg\" alt=\"Lights\" style=\"width:100%\">\n      <h5 class=\"titleH\">الألتزام والدقة اثناء نقل الاثاث</h5>\n      <p class=\"Para\">\n        فى مجال نقل الاثاث الألتزام والدقة فى\n        العمل يعتبر من اهم اسباب نجاح شركات نقل الاثاث المعروفة معانا\n        بنوعدك بألتزام تام جدا بالمواعيد والعمل بسرعة ودا عمالنا\n        مدربين عليه وفاهمينه ان يوم نقل الاثاث للعميل بيكون يوم\n        شاق جدا وبيكون عاوزه يخلص بأقصى سرعة ودا بيكون من اكبر\n        اهتماته عند اختيار شركات نقل العفش عشان يقدر يرتاح\n        ومهما كان حجم عفشك بنوعدك انه نقل الاثاث كله\n        هيخلص فى ساعات معدودة جدا فعمالنا يعملو بسرعة\n        وصمت وبدون توقف لعدم اضاعة وقت عميلنا الثمين\n      </p>\n    </div>\n\n    <div class=\"col-lg-3 col-md-4 col-sm-6\">\n      <img src=\"../../../../assets/nature.jpg\" alt=\"Nature\" style=\"width:100%\">\n      <h5 class=\"titleH\">أقل الاسعار لنقل الاثاث</h5>\n      <p class=\"Para\">\n        دا لأن احنا عندنا اسطول من\n        عربيات نقل الاثاث والعمالة عندنا بتشتغل كل يوم\n        على مدار الشهر ودا الي بيخلى اسعرنا الاقل بين\n        كل شركات نقل الاثاث بعكس الشركات الاخرى الى\n        بتشتغل يوم و 4 ايام معندهاش شغل فبتزود على\n        العميل سعر نقل الاثاث عشان تعوض باقى الأيام\n      </p>\n    </div>\n\n    <div class=\"col-lg-3 col-md-4 col-sm-6\">\n      <img src=\"../../../../assets/mountains.jpg\" alt=\"Mountains\" style=\"width:100%\">\n      <h5 class=\"titleH\">My Work</h5>\n      <p class=\"Para\">Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas\n        oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>\n    </div>\n  </div>\n\n</div>\n<!-- <div class=\"content\">\n    <img src=\"../../../../assets/16.jpg\" alt=\"Bear\" style=\"width:100%\">\n    <h3>تحتل شركة أكتف المرتبة الاولى بين شركات نقل الاثاث</h3>\n    <p>\n        من اكتر العوامل الى بتميزنا عن جميع شركات نقل الاثاث\n        هى المصداقية فى السعر والتعامل والوعود ,كتير\n        من شركات نقل الاثاث بتتفق مع العميل على مبلغ\n         وبعد انتهاء عملية نقل الاثاث بيتصدمو بمبلغ\n        اكبر وبرضو شركات نقل اثاث بتضحك على العميل\n        وتقوله نقل عفش بـ 500ج وفى الاخر ياخدو منه\n        مبلغ ودا عندنا مبيحصلش معانا تقدر تطمن\n        والمبلغ الى هتتفق عليه هو الى هتدفعه\n    </p>\n  </div> -->\n\n<!-- End protfilo -->\n\n<!---------------------------------------------------------------------------------->\n<!----------------------------------- End prtofilo --------------------------------->\n<!---------------------------------------------------------------------------------->\n<!-- <iframe id=\"myFrame\" src=\"http://localhost:4200/Home\" style=\"height:380px;width:60%\"></iframe> -->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\">\n    <strong>ممنوع!</strong> هذه الصفحة غير موجودة\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/service-page/service-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/service-page/service-page.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 subHeader\">\n      خدمات نقل الأثاث\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n          <img src=\"../../../assets/car1.jpg\" class=\"Image\" alt=\"Image\">\n        </div>\n        <div class=\"col-md-6  col-sm-12\">\n          <h1 class=\"Title\">\n            نقل الأثاث\n          </h1>\n          <p class=\"Paragraph\">\n              شركة أكتف لنقل الاثاث من افضل الشركات في مصر لخدمات نقل وتغليف الاثاث . نحن\n              نقدم لعملائنا خدمة نقل الاثاث لتسهيل عليك عمليه الانتقال من مكان لآخر بكل\n              سهولة فنحن لدينا أسطول من السيارات مع عماله مدربه ولديها خبرة كبيرة في\n              هذا المجال شركتنا تقدم لك خدمة نقل الاثاث بأقل التكاليف وباسرع وقت لأننا\n              حريصون علي مالك ووقتك نقدم لك خدمات متنوعة من فك وتركيب وتغليف وتنظيف\n              ونقل الاثاث كل ما عليك عزيزي العميل تحديد الخدمة التي تريدها من بين\n               خدماتنا المتنوعة فيمكنك اختيار خدمة واحده او اختيار جميع الخدمات\n          </p>\n        </div>\n\n  </div>\n  <hr>\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n          <img src=\"../../../assets/wansh1.jpg\" class=\"Image\" alt=\"Image\">\n        </div>\n        <div class=\"col-md-6  col-sm-12\">\n          <h1 class=\"Title\">\n              ونش رفع الاثاث\n          </h1>\n          <p class=\"Paragraph\">\n              احيانا تتطلب عمليه نقل الاثاث ونش خاص لنقل الاثاث لأسباب عديده منها ضيق السلم\n              وكبر حجم الاثاث فوجود الونش هنا ضروري للحفاظ علي الاثاث\n              يوجد لدينا في شركة أكتف اوناش خاصة لتنزيل ورفع\n              الاثاث من أهمها الونش الهيدروليكي من أكبر واطول معدات نقل\n              الاثاث الذي من مميزاته رفع الاثاث لارتفعات عالية حتي الدور\n              ال٢٥ ويحمي الاثاث من خطر السقوط من المرتفعات ويوفر الامان\n              التام لعمليه نقل الاثاث مما لا يؤمنون انواع أخري من الونشات\n          </p>\n        </div>\n\n  </div>\n  <hr>\n  <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n          <img src=\"../../../assets/catroon1.jpg\" class=\"Image\" alt=\"Image\">\n        </div>\n        <div class=\"col-md-6  col-sm-12\">\n          <h1 class=\"Title\">\n              فك وتركيب الاثاث والتكييفات\n          </h1>\n          <p class=\"Paragraph\">\n              تقدم لك عزيزي العميل شركتنا مع خدمه نقل الاثاث\n              فك وتركيب جميع محتويات المنزل باحترافيه عاليه .\n              فك وتركيب الاثاث وستائر البلكونات وفك النجف وفك\n              جميع الأجهزة الكهربائية مع اعاده تركيبهم مره اخري وفك\n              وتركيب التكييفات مع صيانه كامله والتعامل مع الاعطال\n              بدقه شديده فأكتف هى افضل شركة نقل موبيليا.\n          </p>\n        </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/slider/slider.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/slider/slider.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"../../../../assets/logo.jpg\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\n        <div class=\"carousel-caption\">\n          <h3>Los Angeles</h3>\n          <p>We had such a great time in LA!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../../../assets/carSlider1.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n        <div class=\"carousel-caption\">\n          <h3>Chicago</h3>\n          <p>Thank you, Chicago!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../../../assets/ny.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n        <div class=\"carousel-caption\">\n          <h3>New York</h3>\n          <p>We love the Big Apple!</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/content/some-gallery-home/some-gallery-home.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/content/some-gallery-home/some-gallery-home.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"DivSectionTwo\">\n            <h2 class=\"TitleSectionTwo\">صور من بعض أعمالنا</h2>\n          </div>\n        </div>\n      </div>\n      <hr>\n\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6 ZoomToSlide\">\n          <img src=\"../../../assets/img_nature.jpg\" alt=\"image\" class=\"image\">\n          <div class=\"overlay\">\n              <div class=\"text\">شركة أكتف </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 ZoomToSlide\">\n            <img src=\"../../../assets/img_nature.jpg\" alt=\"image\" class=\"image\">\n            <div class=\"overlay\">\n                <div class=\"text\">شركة أكتف </div>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 ZoomToSlide\">\n          <img src=\"../../../assets/img_nature.jpg\" alt=\"image\" class=\"image\">\n          <div class=\"overlay\">\n              <div class=\"text\">شركة أكتف </div>\n          </div>\n        </div>\n            <div class=\"col-md-3 col-sm-6 ZoomToSlide\">\n                <img src=\"../../../assets/img_nature.jpg\" alt=\"image\" class=\"image\">\n                <div class=\"overlay\">\n                    <div class=\"text\">شركة أكتف </div>\n                  </div>\n              </div>\n      </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <a [routerLink]=\"['/Gallery']\" id=\"MoreImages\"  class=\"MoreImage\">المزيد من الصور</a>\n      </div>\n    </div>\n<hr style=\"border-top: 1px solid #000\">\n\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/footer/footer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/footer/footer.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n    <!-- Copyright -->\n    <div class=\"text-light text-center p-5\" style=\"font-weight: bold\">\n      شركة أكتف لنقل وتغليف الأثاث\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/gallery/gallery.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/gallery/gallery.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 subHeader\">\n          معرض الصور\n      </div>\n    </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6\">\n      <img src=\"../../../assets/img_nature.jpg\" alt=\"Nature\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_snow.jpg\" alt=\"Snow\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_mountains.jpg\" alt=\"Mountains\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_lights.jpg\" alt=\"Lights\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3 col-sm-6\">\n      <img src=\"../../../assets/img_nature.jpg\" alt=\"Nature\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_snow.jpg\" alt=\"Snow\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_mountains.jpg\" alt=\"Mountains\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n    <div class=\"col-md-3  col-sm-6\">\n      <img src=\"../../../assets/img_lights.jpg\" alt=\"Lights\" style=\"width:100%\" onclick=\"myFunction(this);\">\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/header/header.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/header/header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"IconsHeader\">\n          <a href=\"https://www.facebook.com\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </a>\n          <a href=\"https://www.twitter.com\" target=\"_blank\">\n            <i class=\"fab fa-twitter\"> </i>\n          </a>\n          <a href=\"https://www.whatsapp.com\"  target=\"_blank\">\n            <i class=\"fab fa-whatsapp\"></i>\n          </a>\n\n        <div style=\"float: right;\">\n          <i class=\"fas fa-envelope\"></i>\n          <a href=\"mailto:waleedathanasius@gmail.com\" style=\"margin-right: 10px \" target=\"_top\">wael.gmail.com</a>\n          <i class=\"fas fa-mobile\"></i>\n          <input type=\"text\" value=\"01273133019\" id=\"myInput\" disabled>\n          <div class=\"mytooltip\">\n            <button onclick=\"myFunction()\" onmouseout=\"outFunc()\" class=\"buttonCopy\">\n              <span class=\"tooltiptext\" id=\"myTooltip\">نسخ الرقم</span>\n              نسخ\n            </button>\n          </div>\n        </div>\n      </div>\n        </div>\n      </div>\n    </div> -->\n\n\n    <div class=\"container-fluid\">\n      <div class=\"row\"  id=\"topHeaderDiv\">\n        <div class=\"col-12\">\n            <h1 id=\"topHeaderH\">شركة أكتف لنقل  وتغليف الأثاث</h1>\n        </div>\n      </div>\n    </div>\n\n\n\n\n    <nav class=\"navbar navbar-expand-md navbar-light flex-container sticky-top\">\n        <img src=\"../../../assets/logo.jpg\" alt=\"logo\" id=\"ImageLogo\" width=\"50px\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n          <ul class=\"navbar-nav ulMenu ml-auto\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"HomeLink\" [routerLink]=\"['/Home']\">\n                <!-- <i class=\"fa fa-home\"></i> -->\n                الرئيسية</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"GalleryLink\" [routerLink]=\"['/Gallery']\" >\n                  <!-- <i class=\"fas fa-images\"></i> -->\n                  معرض الصور</a>\n                </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"  [routerLink]=\"['/Services']\">\n                  <!-- <i class=\"fa fa-globe\"></i> -->\n                خدمات نقل الأثاث</a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"  [routerLink]=\"['/ContactUs']\">تواصل معنا</a>\n            </li>\n\n          </ul>\n\n        </div>\n      </nav>\n\n      <!-- <div class=\"progress-container fixed-bottom\">\n          <div class=\"progress-bar\" id=\"myBar\"></div>\n        </div> -->\n\n        <nav class=\"navbar navbar-inverse\">\n          <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n              <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Home</a></li>\n                <li class=\"dropdown\">\n                  <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1 <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Page 1-1</a></li>\n                    <li><a href=\"#\">Page 1-2</a></li>\n                    <li><a href=\"#\">Page 1-3</a></li>\n                  </ul>\n                </li>\n                <li><a href=\"#\">Page 2</a></li>\n                <li><a href=\"#\">Page 3</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n                <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/side-icon/side-icon.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/side-icon/side-icon.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Component/sticky-social-bar/sticky-social-bar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Component/sticky-social-bar/sticky-social-bar.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"row\">\n  <a class=\"icon-bar\">\n    <a href=\"tel:01273133019\"\n       target=\"_blank\"\n       class=\"Call\">\n       <i id=\"cog\" class=\"fas fa-mobile-alt\"></i>\n    </a>\n\n    <!--  data-toggle=\"tooltip\"\n       data-placement=\"right\"\n       title=\"نسخ الرقم\" -->\n\n    <a href=\"mailto:waleedathanasius@gmail.com\"\n       target=\"_blank\"\n       class=\"Email\">\n       <i  id=\"cog\" class=\"fas fa-envelope\"></i>\n       <!-- <i id=\"cog\" class=\"fas fa-envelope-square\"></i> -->\n    </a>\n\n\n    <a href=\"https://www.facebook.com/activemoving1/\"\n       target=\"_blank\"\n       class=\"facebook\">\n      <i id=\"cog\" class=\"fab fa-facebook-f\"></i>\n    </a>\n\n\n    <a href=\"https://twitter.com/company_active\"\n       target=\"_blank\"\n       class=\"twitter\">\n      <i id=\"cog\" class=\"fab fa-twitter\"></i>\n    </a>\n    <a\n  href=\"https://api.whatsapp.com/send?phone=2001127481146&amp;text=بتكلم بخصوص  شركة أكتف لنقل وتغليف الأثاث\"\n\n       target=\"_blank\"\n       class=\"whatsApp\">\n      <i id=\"cog\" class=\"fab fa-whatsapp\"></i>\n    </a>\n<!--  href=\"https://wa.me/01127481146\" -->\n\n    <!-- <a href=\"\"\n       target=\"_blank\"\n       class=\"instagram\">\n        <i class=\"fab fa-instagram\"></i>\n    </a> -->\n  </a>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-11\">\n      <app-content></app-content>\n    </div>\n    <div class=\"col-1\">\n        <app-sticky-social-bar></app-sticky-social-bar>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n<button onclick=\"topFunction()\" id=\"myBtn\" title=\"اعلي الصفحة\">\n    <i class=\"fas fa-arrow-up\"></i>\n</button>\n"

/***/ }),

/***/ "./src/app/Component/content/accordion/accordion.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Component/content/accordion/accordion.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.accordion {\n  background-color: #eee;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.active, .accordion:hover {\n  background-color: #ccc;\n}\n.accordion:after {\n  content: \"+\";\n  color: #777;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n}\n.active:after {\n  content: \"−\";\n}\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.2s ease-out;\n  transition: max-height 0.2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvYWNjb3JkaW9uL0Q6XFwyMy43LjIwMTlcXEFjdGl2ZU1vdmluZ1xcQWN0aXZlTW92aW5nL3NyY1xcYXBwXFxDb21wb25lbnRcXGNvbnRlbnRcXGFjY29yZGlvblxcYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxzQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5hY2NvcmRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hY3RpdmUsIC5hY2NvcmRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uYWNjb3JkaW9uOmFmdGVyIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYWN0aXZlOmFmdGVyIHtcbiAgY29udGVudDogXCLiiJJcIjtcbn1cblxuLnBhbmVsIHtcbiAgcGFkZGluZzogMCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xufSIsIi5hY2NvcmRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmFjY29yZGlvbjphZnRlciB7XHJcbiAgY29udGVudDogJ1xcMDAyQic7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMjEyXCI7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Component/content/accordion/accordion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Component/content/accordion/accordion.component.ts ***!
  \********************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/accordion/accordion.component.html"),
            styles: [__webpack_require__(/*! ./accordion.component.scss */ "./src/app/Component/content/accordion/accordion.component.scss")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/contact-us/contact-us.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Component/content/contact-us/contact-us.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=email], input[type=tel], textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #000;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  direction: rtl;\n}\n\ntextarea {\n  height: 200px;\n}\n\nbutton {\n  color: white;\n  width: 100%;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 5px;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n#ContactForm {\n  background-color: #CCC;\n  padding: 20px;\n  margin-top: 7%;\n  margin-bottom: 5%;\n}\n\n.header {\n  font-size: 1.2em;\n  padding: 50px;\n  text-align: center;\n  border-radius: 15px;\n  margin-top: 3%;\n}\n\n.ng-valid[required], .ng-valid.required {\n  border-right: 5px solid #42A948;\n  /* green */\n}\n\n.ng-untouched[required], .ng-valid.required {\n  border-right: 5px solid blue;\n  /* green */\n}\n\n.ng-invalid:not(form) {\n  border-right: 5px solid #a94442;\n  /* red */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvY29udGFjdC11cy9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxjb250ZW50XFxjb250YWN0LXVzXFxjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBRENBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFFRCxhQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0g7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREdBO0VBQ0UsK0JBQUE7RUFBaUMsVUFBQTtBQ0NuQzs7QURFQTtFQUNFLDRCQUFBO0VBQThCLFVBQUE7QUNFaEM7O0FEQ0E7RUFDRSwrQkFBQTtFQUFpQyxRQUFBO0FDR25DIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0saW5wdXRbdHlwZT10ZWxdLCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuIGhlaWdodDoyMDBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuI0NvbnRhY3RGb3JtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xyXG4gLy8gbWFyZ2luOiA3JSBhdXRvO1xyXG4gcGFkZGluZzogMjBweDtcclxuICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcblxyXG4ubmctdW50b3VjaGVkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmx1ZTsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbn1cclxuIiwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dGVsXSwgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbiNDb250YWN0Rm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICM0MkE5NDg7XG4gIC8qIGdyZWVuICovXG59XG5cbi5uZy11bnRvdWNoZWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibHVlO1xuICAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/Component/content/contact-us/contact-us.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Component/content/contact-us/contact-us.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(toastr) {
        this.toastr = toastr;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.OnSubmit = function (form) {
        var allInfo = "My name is " + this.Name + ".  My number is " + this.Phone + ". My email is " + this.Email + ". My message is " + this.Message;
        alert(allInfo);
        console.log(form.value);
        this.toastr.success('تم الإرسال بنجاح');
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/Component/content/contact-us/contact-us.component.scss")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/content.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Component/content/content.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Component/content/content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Component/content/content.component.ts ***!
  \********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/Component/content/content.component.scss")]
        })
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Component/content/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Component/content/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Component/content/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Component/content/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/image-background/image-background.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/Component/content/image-background/image-background.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sectionImg {\n  position: relative;\n  color: #FFFb;\n  font-family: \"Aladin\";\n}\n.sectionImg .topLeft {\n  position: absolute;\n  top: 15%;\n  left: 5%;\n  font-size: 5vw;\n}\n.sectionImg .bottomLeft {\n  position: absolute;\n  top: 40%;\n  left: 5%;\n  font-size: 1rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvaW1hZ2UtYmFja2dyb3VuZC9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxjb250ZW50XFxpbWFnZS1iYWNrZ3JvdW5kXFxpbWFnZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9pbWFnZS1iYWNrZ3JvdW5kL2ltYWdlLWJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0FGO0FERUU7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0FOO0FESUU7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9jb250ZW50L2ltYWdlLWJhY2tncm91bmQvaW1hZ2UtYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VjdGlvbkltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjRkZGYjtcclxuICBmb250LWZhbWlseTogJ0FsYWRpbic7XHJcblxyXG4gIC50b3BMZWZ0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE1JTtcclxuICAgICAgbGVmdDogNSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG5cclxuICAgIH1cclxuXHJcbiAgLmJvdHRvbUxlZnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG4iLCIuc2VjdGlvbkltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNGRkZiO1xuICBmb250LWZhbWlseTogXCJBbGFkaW5cIjtcbn1cbi5zZWN0aW9uSW1nIC50b3BMZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogNXZ3O1xufVxuLnNlY3Rpb25JbWcgLmJvdHRvbUxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Component/content/image-background/image-background.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Component/content/image-background/image-background.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ImageBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBackgroundComponent", function() { return ImageBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageBackgroundComponent = /** @class */ (function () {
    function ImageBackgroundComponent() {
    }
    ImageBackgroundComponent.prototype.ngOnInit = function () {
    };
    ImageBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-background',
            template: __webpack_require__(/*! raw-loader!./image-background.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/image-background/image-background.component.html"),
            styles: [__webpack_require__(/*! ./image-background.component.scss */ "./src/app/Component/content/image-background/image-background.component.scss")]
        })
    ], ImageBackgroundComponent);
    return ImageBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/image-section/image-section.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Component/content/image-section/image-section.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lalezar&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Jomhuria&display=swap&subset=arabic\");\n.Title {\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  color: blue;\n  text-align: center;\n  margin: 5% 0 1% 0;\n  text-shadow: 2px 2px 4px #000000;\n}\n.pic {\n  border-radius: 10px;\n  max-width: 350px;\n  height: 300px;\n  overflow: hidden;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  margin: 15px auto;\n  position: relative;\n}\n.pic img {\n  width: 100%;\n  max-height: 225px;\n}\n.pic::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: all 450ms ease-in-out;\n  transition: all 450ms ease-in-out;\n}\n.pic:hover::before {\n  opacity: 1;\n}\n.pic .mooore {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  text-decoration: none;\n  background-color: orchid;\n  padding: 45px 80px;\n  display: block;\n  -webkit-transform: skew(-40deg) rotate(-10deg) translate(355px, 30px);\n          transform: skew(-40deg) rotate(-10deg) translate(355px, 30px);\n  -webkit-transition: all 450ms ease-in-out;\n  transition: all 450ms ease-in-out;\n}\n.pic:hover .mooore {\n  -webkit-transform: skew(-40deg) rotate(-10deg) translate(35px, 30px);\n          transform: skew(-40deg) rotate(-10deg) translate(35px, 30px);\n}\n.pic .mooore span {\n  color: #000;\n  font-family: \"Lalezar\", cursive;\n  -webkit-transform: skew(40deg) rotate(10deg) translate(0, -5px);\n          transform: skew(40deg) rotate(10deg) translate(0, -5px);\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n}\n.pic .TitleParagraph p {\n  text-align: center;\n  font-family: \"Jomhuria\", cursive;\n  font-size: 1.5em;\n  padding: 5px;\n}\n.TextInDialog {\n  padding: 5px;\n  text-align: justify;\n  word-wrap: break-word;\n}\n.ui-dialog .ui-dialog-titlebar-close {\n  left: 0;\n}\n.ui-dialog .ui-dialog-title {\n  float: right;\n  margin: 0.1em 0;\n  white-space: nowrap;\n  width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n/* Center website */\n.DivSectionTwo {\n  background-color: brown;\n  padding: 15px;\n  border-radius: 15px;\n  margin-top: 4%;\n  margin-bottom: 4%;\n}\n.TitleSectionTwo {\n  color: #FFF;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n}\n.Para {\n  text-align: justify;\n  direction: rtl;\n}\n.titleH {\n  text-align: center;\n  color: darkblue;\n  font-weight: bold;\n  padding: 7px;\n}\nimg:hover {\n  border-radius: 50px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvaW1hZ2Utc2VjdGlvbi9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxjb250ZW50XFxpbWFnZS1zZWN0aW9uXFxpbWFnZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9pbWFnZS1zZWN0aW9uL2ltYWdlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFDQSwwRkFBQTtBQUdSO0VBQ0Usd0VBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FDREY7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNERjtBREdBO0VBQ0UsVUFBQTtBQ0FGO0FER0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFFQUFBO1VBQUEsNkRBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDQUY7QURHQztFQUNDLG9FQUFBO1VBQUEsNERBQUE7QUNBRjtBREVDO0VBQ0MsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0RBQUE7VUFBQSx1REFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFQztFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSDtBRElDO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNESDtBREtDO0VBQ0MsT0FBQTtBQ0ZGO0FES0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0ZGO0FEVUEsbUJBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDUEY7QURTQTtFQUNFLFdBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FDTkY7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNKRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsWUFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvaW1hZ2Utc2VjdGlvbi9pbWFnZS1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYWxlemFyJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvbWh1cmlhJmRpc3BsYXk9c3dhcCZzdWJzZXQ9YXJhYmljJyk7XHJcblxyXG5cclxuLlRpdGxlIHtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNSUgMCAxJSAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwO1xyXG59XHJcblxyXG4ucGljIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBtYXJnaW46ICAxNXB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBpYzo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBpYzpob3Zlcjo6YmVmb3Jle1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiAucGljIC5tb29vcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yY2hpZDtcclxuICBwYWRkaW5nOiA0NXB4IDgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC00MGRlZykgcm90YXRlKC0xMGRlZykgdHJhbnNsYXRlKDM1NXB4LCAzMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgZWFzZS1pbi1vdXQ7XHJcbiB9XHJcblxyXG4gLnBpYzpob3ZlciAubW9vb3JlIHtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTQwZGVnKSByb3RhdGUoLTEwZGVnKSB0cmFuc2xhdGUoMzVweCwgMzBweCk7XHJcbiB9XHJcbiAucGljIC5tb29vcmUgc3BhbiB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6ICdMYWxlemFyJywgY3Vyc2l2ZTtcclxuICB0cmFuc2Zvcm06IHNrZXcoNDBkZWcpIHJvdGF0ZSgxMGRlZykgdHJhbnNsYXRlKDAsIC01cHgpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuIH1cclxuXHJcbiAucGljIC5UaXRsZVBhcmFncmFwaCBwe1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiAnSm9taHVyaWEnLCBjdXJzaXZlO1xyXG4gICBmb250LXNpemU6IDEuNWVtO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gfVxyXG5cclxuXHJcbiAuVGV4dEluRGlhbG9nIHtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiB9XHJcblxyXG5cclxuIC51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhci1jbG9zZSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAuMWVtIDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIHN0YXJ0IHByb3RmaWxvXHJcblxyXG4vKiBDZW50ZXIgd2Vic2l0ZSAqL1xyXG4uRGl2U2VjdGlvblR3byAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxufVxyXG4uVGl0bGVTZWN0aW9uVHdvIHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5QYXJhIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcbi50aXRsZUgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogZGFya2JsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogN3B4O1xyXG59XHJcblxyXG5cclxuaW1nOmhvdmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4vLyBFbmQgcHJvdGZpbG9cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhbGV6YXImZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9taHVyaWEmZGlzcGxheT1zd2FwJnN1YnNldD1hcmFiaWNcIik7XG4uVGl0bGUge1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUlIDAgMSUgMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA7XG59XG5cbi5waWMge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGljIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMjVweDtcbn1cblxuLnBpYzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5waWM6aG92ZXI6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5waWMgLm1vb29yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmNoaWQ7XG4gIHBhZGRpbmc6IDQ1cHggODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogc2tldygtNDBkZWcpIHJvdGF0ZSgtMTBkZWcpIHRyYW5zbGF0ZSgzNTVweCwgMzBweCk7XG4gIHRyYW5zaXRpb246IGFsbCA0NTBtcyBlYXNlLWluLW91dDtcbn1cblxuLnBpYzpob3ZlciAubW9vb3JlIHtcbiAgdHJhbnNmb3JtOiBza2V3KC00MGRlZykgcm90YXRlKC0xMGRlZykgdHJhbnNsYXRlKDM1cHgsIDMwcHgpO1xufVxuXG4ucGljIC5tb29vcmUgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMYWxlemFyXCIsIGN1cnNpdmU7XG4gIHRyYW5zZm9ybTogc2tldyg0MGRlZykgcm90YXRlKDEwZGVnKSB0cmFuc2xhdGUoMCwgLTVweCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ucGljIC5UaXRsZVBhcmFncmFwaCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJKb21odXJpYVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5UZXh0SW5EaWFsb2cge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlIHtcbiAgbGVmdDogMDtcbn1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAuMWVtIDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA5MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogQ2VudGVyIHdlYnNpdGUgKi9cbi5EaXZTZWN0aW9uVHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuLlRpdGxlU2VjdGlvblR3byB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5QYXJhIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi50aXRsZUgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuaW1nOmhvdmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Component/content/image-section/image-section.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Component/content/image-section/image-section.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImageSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSectionComponent", function() { return ImageSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageSectionComponent = /** @class */ (function () {
    function ImageSectionComponent() {
    }
    ImageSectionComponent.prototype.ngOnInit = function () {
    };
    ImageSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-section',
            template: __webpack_require__(/*! raw-loader!./image-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/image-section/image-section.component.html"),
            styles: [__webpack_require__(/*! ./image-section.component.scss */ "./src/app/Component/content/image-section/image-section.component.scss")]
        })
    ], ImageSectionComponent);
    return ImageSectionComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/not-found/not-found.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/Component/content/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  padding: 40px;\n  background-color: #f44336;\n  color: white;\n  opacity: 1;\n  -webkit-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  margin: 150px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvbm90LWZvdW5kL0Q6XFwyMy43LjIwMTlcXEFjdGl2ZU1vdmluZ1xcQWN0aXZlTW92aW5nL3NyY1xcYXBwXFxDb21wb25lbnRcXGNvbnRlbnRcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xyXG4gIG1hcmdpbjogMTUwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmFsZXJ0IHtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XG4gIG1hcmdpbjogMTUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Component/content/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Component/content/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/Component/content/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/service-page/service-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/Component/content/service-page/service-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=El+Messiri&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lateef&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Mirza&display=swap\");\n.subHeader {\n  text-align: center;\n  padding: 5%;\n  margin: 3% 0 5% 0;\n  font-size: 3vw;\n  font-weight: bold;\n  background-color: #c6c7c8;\n  font-family: \"El Messiri\", sans-serif;\n  color: white;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n.Paragraph {\n  text-align: justify;\n  font-family: \"Lateef\", cursive;\n  font-size: 28px;\n}\n.Title {\n  text-align: center;\n  margin-top: 2%;\n  padding: 3%;\n  font-family: \"Mirza\", cursive;\n}\n.Image {\n  max-height: 450px;\n  width: 100%;\n  border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvc2VydmljZS1wYWdlL0Q6XFwyMy43LjIwMTlcXEFjdGl2ZU1vdmluZ1xcQWN0aXZlTW92aW5nL3NyY1xcYXBwXFxDb21wb25lbnRcXGNvbnRlbnRcXHNlcnZpY2UtcGFnZVxcc2VydmljZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9zZXJ2aWNlLXBhZ2Uvc2VydmljZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBQ0EsMEVBQUE7QUFDQSx5RUFBQTtBQUNSO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLCtEQUFBO0FDQ0Y7QURDQTtFQUNDLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRUQ7QURBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0dGO0FEQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvc2VydmljZS1wYWdlL3NlcnZpY2UtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RWwrTWVzc2lyaSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRlZWYmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWlyemEmZGlzcGxheT1zd2FwJyk7XHJcbi5zdWJIZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxuICBtYXJnaW46IDMlIDAgNSUgMDtcclxuICBmb250LXNpemU6IDN2dztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjN2M4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaywgMCAwIDI1cHggYmx1ZSwgMCAwIDVweCBkYXJrYmx1ZTtcclxufVxyXG4uUGFyYWdyYXBoIHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBmb250LWZhbWlseTogJ0xhdGVlZicsIGN1cnNpdmU7XHJcbiBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuLlRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgZm9udC1mYW1pbHk6ICdNaXJ6YScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5JbWFnZSB7XHJcbiAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RWwrTWVzc2lyaSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRlZWYmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWlyemEmZGlzcGxheT1zd2FwXCIpO1xuLnN1YkhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG4gIG1hcmdpbjogMyUgMCA1JSAwO1xuICBmb250LXNpemU6IDN2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmM3Yzg7XG4gIGZvbnQtZmFtaWx5OiBcIkVsIE1lc3NpcmlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XG59XG5cbi5QYXJhZ3JhcGgge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogXCJMYXRlZWZcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBwYWRkaW5nOiAzJTtcbiAgZm9udC1mYW1pbHk6IFwiTWlyemFcIiwgY3Vyc2l2ZTtcbn1cblxuLkltYWdlIHtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Component/content/service-page/service-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Component/content/service-page/service-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: ServicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageComponent", function() { return ServicePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicePageComponent = /** @class */ (function () {
    function ServicePageComponent() {
    }
    ServicePageComponent.prototype.ngOnInit = function () {
    };
    ServicePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-page',
            template: __webpack_require__(/*! raw-loader!./service-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/service-page/service-page.component.html"),
            styles: [__webpack_require__(/*! ./service-page.component.scss */ "./src/app/Component/content/service-page/service-page.component.scss")]
        })
    ], ServicePageComponent);
    return ServicePageComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/slider/slider.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Component/content/slider/slider.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvc2xpZGVyL0Q6XFwyMy43LjIwMTlcXEFjdGl2ZU1vdmluZ1xcQWN0aXZlTW92aW5nL3NyY1xcYXBwXFxDb21wb25lbnRcXGNvbnRlbnRcXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9jb250ZW50L3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jYXJvdXNlbC1pbm5lciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4iLCIuY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Component/content/slider/slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Component/content/slider/slider.component.ts ***!
  \**************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/Component/content/slider/slider.component.scss")]
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/Component/content/some-gallery-home/some-gallery-home.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/Component/content/some-gallery-home/some-gallery-home.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".DivSectionTwo {\n  background-color: blue;\n  padding: 15px;\n  border-radius: 15px;\n  margin-top: 4%;\n  margin-bottom: 4%;\n}\n\n.TitleSectionTwo {\n  color: #FFF;\n  padding: 20px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  text-align: center;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: 0;\n  background-color: #df90da;\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n}\n\n.ZoomToSlide:hover .overlay {\n  bottom: 0;\n  height: 100%;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n/* Start Button More Image*/\n\n.MoreImage {\n  text-align: right;\n  color: #000;\n}\n\n.MoreImage:hover {\n  color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvc29tZS1nYWxsZXJ5LWhvbWUvRDpcXDIzLjcuMjAxOVxcQWN0aXZlTW92aW5nXFxBY3RpdmVNb3Zpbmcvc3JjXFxhcHBcXENvbXBvbmVudFxcY29udGVudFxcc29tZS1nYWxsZXJ5LWhvbWVcXHNvbWUtZ2FsbGVyeS1ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db21wb25lbnQvY29udGVudC9zb21lLWdhbGxlcnktaG9tZS9zb21lLWdhbGxlcnktaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdFQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHQSwyQkFBQTs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2NvbnRlbnQvc29tZS1nYWxsZXJ5LWhvbWUvc29tZS1nYWxsZXJ5LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRGl2U2VjdGlvblR3byAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG59XHJcbi5UaXRsZVNlY3Rpb25Ud28ge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjkwZGE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MDtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxufVxyXG5cclxuLlpvb21Ub1NsaWRlOmhvdmVyIC5vdmVybGF5IHtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIFN0YXJ0IEJ1dHRvbiBNb3JlIEltYWdlKi9cclxuLk1vcmVJbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLk1vcmVJbWFnZTpob3ZlciB7XHJcbiAgY29sb3I6IHB1cnBsZTtcclxufVxyXG4iLCIuRGl2U2VjdGlvblR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cblxuLlRpdGxlU2VjdGlvblR3byB7XG4gIGNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJGcmFua2xpbiBHb3RoaWMgTWVkaXVtXCIsIFwiQXJpYWwgTmFycm93XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY5MGRhO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi5ab29tVG9TbGlkZTpob3ZlciAub3ZlcmxheSB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3RhcnQgQnV0dG9uIE1vcmUgSW1hZ2UqL1xuLk1vcmVJbWFnZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLk1vcmVJbWFnZTpob3ZlciB7XG4gIGNvbG9yOiBwdXJwbGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Component/content/some-gallery-home/some-gallery-home.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Component/content/some-gallery-home/some-gallery-home.component.ts ***!
  \************************************************************************************/
/*! exports provided: SomeGalleryHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeGalleryHomeComponent", function() { return SomeGalleryHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SomeGalleryHomeComponent = /** @class */ (function () {
    function SomeGalleryHomeComponent() {
    }
    SomeGalleryHomeComponent.prototype.ngOnInit = function () {
    };
    SomeGalleryHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-some-gallery-home',
            template: __webpack_require__(/*! raw-loader!./some-gallery-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/content/some-gallery-home/some-gallery-home.component.html"),
            styles: [__webpack_require__(/*! ./some-gallery-home.component.scss */ "./src/app/Component/content/some-gallery-home/some-gallery-home.component.scss")]
        })
    ], SomeGalleryHomeComponent);
    return SomeGalleryHomeComponent;
}());



/***/ }),

/***/ "./src/app/Component/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Component/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #1A1B27;\n}\n\n.socialIcons {\n  font-size: 1.4em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.socialIcons a {\n  color: #FFF;\n  margin: 0 13px;\n}\n\n.socialIcons a:hover {\n  color: darkmagenta;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2Zvb3Rlci9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQjI3O1xyXG59XHJcblxyXG5cclxuLnNvY2lhbEljb25zIHtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYXtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luOiAwIDEzcHg7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBkYXJrbWFnZW50YTtcclxuICB9XHJcbn1cclxuIiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUIyNztcbn1cblxuLnNvY2lhbEljb25zIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc29jaWFsSWNvbnMgYSB7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgMTNweDtcbn1cbi5zb2NpYWxJY29ucyBhOmhvdmVyIHtcbiAgY29sb3I6IGRhcmttYWdlbnRhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/Component/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Component/gallery/gallery.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Component/gallery/gallery.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=El+Messiri&display=swap\");\n.subHeader {\n  text-align: center;\n  padding: 5%;\n  margin: 3% 0 5% 0;\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: #c6c7c8;\n  font-family: \"El Messiri\", sans-serif;\n  color: white;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\nimg {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px;\n}\nimg:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2dhbGxlcnkvRDpcXDIzLjcuMjAxOVxcQWN0aXZlTW92aW5nXFxBY3RpdmVNb3Zpbmcvc3JjXFxhcHBcXENvbXBvbmVudFxcZ2FsbGVyeVxcZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSw4RUFBQTtBQUNSO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLCtEQUFBO0FDSEY7QURLQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSw4Q0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5HYWxsZXJ5UGFnZVRpdGxlIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgcGFkZGluZzogNSU7XHJcbi8vIH1cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1FbCtNZXNzaXJpJmRpc3BsYXk9c3dhcCcpO1xyXG4uc3ViSGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNSU7XHJcbiAgbWFyZ2luOiAzJSAwIDUlIDA7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmM3Yzg7XHJcbiAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCBibHVlLCAwIDAgNXB4IGRhcmtibHVlO1xyXG59XHJcbmltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUVsK01lc3NpcmkmZGlzcGxheT1zd2FwXCIpO1xuLnN1YkhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNSU7XG4gIG1hcmdpbjogMyUgMCA1JSAwO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjN2M4O1xuICBmb250LWZhbWlseTogXCJFbCBNZXNzaXJpXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCBibHVlLCAwIDAgNXB4IGRhcmtibHVlO1xufVxuXG5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5pbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Component/gallery/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Component/gallery/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/Component/gallery/gallery.component.scss")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/Component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Katibeh&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Lalezar&display=swap\");\n#topHeaderDiv {\n  height: 150px;\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(183, 203, 230, 0)), to(#096ac5));\n  background-image: linear-gradient(to right, rgba(183, 203, 230, 0), #096ac5);\n}\n#topHeaderDiv #topHeaderH {\n  color: #000;\n  font-family: \"Lalezar\", cursive;\n  text-align: center;\n  padding: 50px;\n  font-size: 3vw;\n  text-shadow: 3px 3px 2px #ff0000;\n}\n#ImageLogo {\n  margin-right: 3%;\n  border-radius: 50%;\n}\n/* start nav active*/\nnav {\n  padding: 0;\n  background-color: #FFF;\n  border-bottom: 1px solid #DDD;\n}\nnav ul li a {\n  font-family: \"Katibeh\", cursive;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #000;\n  direction: rtl;\n  padding: 12px;\n}\nnav ul li a:hover:not(.active) {\n  color: #FFF;\n  background-color: red;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.active {\n  border-bottom: 3px solid blue;\n}\n.active i {\n  color: blue;\n}\n/*End section active*/\n/* Start progress bar*/\n.progress-container {\n  width: 100%;\n  height: 8px;\n  background: #ccc;\n}\n.progress-bar {\n  height: 8px;\n  background: red;\n  width: 0%;\n}\n/* End progress bar*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L2hlYWRlci9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUE2R0EsMkVBQUE7QUE1R1I7RUFDRSxhQUFBO0VBQ0EsMEdBQUE7RUFBQSw0RUFBQTtBQ0VGO0FEREU7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNHSjtBRHlGQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN0RkY7QUQ0RkEsb0JBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDekZGO0FEOEZNO0VBQ0UsK0JBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDNUZWO0FEOEZNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQzVGUjtBRG9HQztFQUlDLDZCQUFBO0FDcEdGO0FEaUdFO0VBQ0EsV0FBQTtBQy9GRjtBRG1HQSxxQkFBQTtBQUVBLHNCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakdGO0FEb0dBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDakdGO0FEbUdBLG9CQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdGliZWgmZGlzcGxheT1zd2FwJyk7XHJcbiN0b3BIZWFkZXJEaXYge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE4MywgMjAzLCAyMzAsIDApLCByZ2IoOSwgMTA2LCAxOTcpKTtcclxuICAjdG9wSGVhZGVySCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGFsZXphcicsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggI2ZmMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbiAkY29sb3JQdXJwbGU6IHB1cnBsZTtcclxuXHJcbi8vICNteUlucHV0IHtcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgY29sb3I6ICRjb2xvclB1cnBsZTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4vLyAgIHdpZHRoOiAxMDBweDtcclxuLy8gfVxyXG4vLyAuY29udGFjdCB7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAuYnV0dG9uQ29weXtcclxuLy8gICBwYWRkaW5nOiAwcHggMTBweDtcclxuLy8gICBjb2xvcjogcHVycGxlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLy8gLypTdGFydCBvZiBjb250YWN0Ki9cclxuLy8gLm15dG9vbHRpcCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG5cclxuLy8gLm15dG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4vLyAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuLy8gICB3aWR0aDogMTgwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuLy8gICBjb2xvcjogI2ZmZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgei1pbmRleDogMTtcclxuLy8gICBib3R0b206IDE1MCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAtMTIwcHg7XHJcbi8vICAgb3BhY2l0eTogMDtcclxuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbi8vIH1cclxuXHJcbi8vIC5teXRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbi8vICAgY29udGVudDogXCJcIjtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAxMDAlO1xyXG4vLyAgIGxlZnQ6IDUwJTtcclxuLy8gICBtYXJnaW4tbGVmdDogLTVweDtcclxuLy8gICBib3JkZXItd2lkdGg6IDVweDtcclxuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLy8gLm15dG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4vLyAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG4vLyAvLyAvKkVuZCBvZiBjb250YWN0Ki9cclxuXHJcblxyXG4vLyAuSWNvbnNIZWFkZXIge1xyXG4vLyAgIHBhZGRpbmc6IDMlO1xyXG4vLyAgIGkge1xyXG4vLyAgIGNvbG9yOiAkY29sb3JQdXJwbGU7XHJcbi8vICAgcGFkZGluZzogMTBweDtcclxuLy8gICAvLyB3aWR0aDogMiU7XHJcbi8vICAgLy8gaGVpZ2h0OiAyJTtcclxuLy8gICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAuSWNvbnNIZWFkZXIgaTpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHVycGxlO1xyXG4vLyAgIGNvbG9yOiAjRkZGO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4vLyB9XHJcblxyXG4vLyAuZmxleC1jb250YWluZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbi8vIH1cclxuXHJcbi8vIC5Db21wYW55QnJhbmQge1xyXG4vLyBmb250LWZhbWlseTogJ0xhbGV6YXInLCBjdXJzaXZlO1xyXG4vLyBmb250LXNpemU6IDMwcHg7XHJcbi8vIGNvbG9yOiBibHVlO1xyXG4vLyB9XHJcbiNJbWFnZUxvZ28ge1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGFsZXphciZkaXNwbGF5PXN3YXAnKTtcclxuLyogc3RhcnQgbmF2IGFjdGl2ZSovXHJcbm5hdiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG5cclxuICB1bCB7XHJcbiAgICAvLyBwYWRkaW5nOiA4cHg7XHJcbiAgICBsaSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnS2F0aWJlaCcsIGN1cnNpdmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4gLmFjdGl2ZXtcclxuICBpIHtcclxuICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XHJcbn1cclxuLypFbmQgc2VjdGlvbiBhY3RpdmUqL1xyXG5cclxuLyogU3RhcnQgcHJvZ3Jlc3MgYmFyKi9cclxuLnByb2dyZXNzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHdpZHRoOiAwJTtcclxufVxyXG4vKiBFbmQgcHJvZ3Jlc3MgYmFyKi9cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F0aWJlaCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYWxlemFyJmRpc3BsYXk9c3dhcFwiKTtcbiN0b3BIZWFkZXJEaXYge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTgzLCAyMDMsIDIzMCwgMCksICMwOTZhYzUpO1xufVxuI3RvcEhlYWRlckRpdiAjdG9wSGVhZGVySCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJMYWxlemFyXCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCAjZmYwMDAwO1xufVxuXG4jSW1hZ2VMb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBzdGFydCBuYXYgYWN0aXZlKi9cbm5hdiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xufVxubmF2IHVsIGxpIGEge1xuICBmb250LWZhbWlseTogXCJLYXRpYmVoXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwYWRkaW5nOiAxMnB4O1xufVxubmF2IHVsIGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcbn1cbi5hY3RpdmUgaSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4vKkVuZCBzZWN0aW9uIGFjdGl2ZSovXG4vKiBTdGFydCBwcm9ncmVzcyBiYXIqL1xuLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHdpZHRoOiAwJTtcbn1cblxuLyogRW5kIHByb2dyZXNzIGJhciovIl19 */"

/***/ }),

/***/ "./src/app/Component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/Component/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Component/side-icon/side-icon.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Component/side-icon/side-icon.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mySidenav a {\n  position: fixed;\n  left: -35px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 15px;\n  width: 50px;\n  text-decoration: none;\n  font-size: 20px;\n  color: white;\n  border-radius: 0 5px 5px 0;\n}\n\n#mySidenav a:hover {\n  left: 0;\n}\n\n#whatsIcon {\n  top: 260px;\n  background-color: #4CAF50;\n}\n\n#faceIcon {\n  top: 200px;\n  background-color: blue;\n}\n\n#twitterIcon {\n  top: 320px;\n  background-color: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L3NpZGUtaWNvbi9EOlxcMjMuNy4yMDE5XFxBY3RpdmVNb3ZpbmdcXEFjdGl2ZU1vdmluZy9zcmNcXGFwcFxcQ29tcG9uZW50XFxzaWRlLWljb25cXHNpZGUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L3NpZGUtaWNvbi9zaWRlLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsT0FBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURJQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50L3NpZGUtaWNvbi9zaWRlLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI215U2lkZW5hdiBhIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogLTM1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG59XHJcblxyXG4jbXlTaWRlbmF2IGE6aG92ZXIge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN3aGF0c0ljb24ge1xyXG4gIHRvcDogMjYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG5cclxuI2ZhY2VJY29uIHtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcblxyXG4jdHdpdHRlckljb24ge1xyXG4gIHRvcDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGM1xyXG59XHJcbiIsIiNteVNpZGVuYXYgYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogLTM1cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbn1cblxuI215U2lkZW5hdiBhOmhvdmVyIHtcbiAgbGVmdDogMDtcbn1cblxuI3doYXRzSWNvbiB7XG4gIHRvcDogMjYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG59XG5cbiNmYWNlSWNvbiB7XG4gIHRvcDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiN0d2l0dGVySWNvbiB7XG4gIHRvcDogMzIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59Il19 */"

/***/ }),

/***/ "./src/app/Component/side-icon/side-icon.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Component/side-icon/side-icon.component.ts ***!
  \************************************************************/
/*! exports provided: SideIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideIconComponent", function() { return SideIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideIconComponent = /** @class */ (function () {
    function SideIconComponent() {
    }
    SideIconComponent.prototype.ngOnInit = function () {
    };
    SideIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-icon',
            template: __webpack_require__(/*! raw-loader!./side-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/side-icon/side-icon.component.html"),
            styles: [__webpack_require__(/*! ./side-icon.component.scss */ "./src/app/Component/side-icon/side-icon.component.scss")]
        })
    ], SideIconComponent);
    return SideIconComponent;
}());



/***/ }),

/***/ "./src/app/Component/sticky-social-bar/sticky-social-bar.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Component/sticky-social-bar/sticky-social-bar.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-bar {\n  position: fixed;\n  top: 55%;\n  z-index: 2;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.icon-bar a {\n  z-index: 2;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  padding: 6px;\n  width: 40px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: white;\n}\n\n.icon-bar a i {\n  font-size: 17px;\n}\n\n.icon-bar .whatsApp:hover {\n  color: green;\n}\n\n.icon-bar .facebook:hover {\n  color: #3B5998;\n}\n\n.icon-bar .Call:hover {\n  color: #c1c1c1;\n}\n\n.icon-bar .twitter:hover {\n  color: #55ACEE;\n}\n\n.icon-bar .Email:hover {\n  color: #e53333;\n}\n\n.Email {\n  background: #e53333;\n}\n\n.Call {\n  background: #c1c1c1;\n}\n\n.facebook {\n  background: #3B5998;\n}\n\n.twitter {\n  background: #55ACEE;\n}\n\n.whatsApp {\n  background: green;\n}\n\n.whatsApp,\n.twitter,\n.facebook,\n.Call,\n.Email {\n  color: #FFF;\n}\n\n.icon-bar .Email:hover,\n.icon-bar .twitter:hover,\n.icon-bar .Call:hover,\n.icon-bar .whatsApp:hover,\n.icon-bar .facebook:hover {\n  background-color: #FFF;\n  border-radius: 50%;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.icon-bar .Email:hover #cog,\n.icon-bar .twitter:hover #cog,\n.icon-bar .Call:hover #cog,\n.icon-bar .whatsApp:hover #cog,\n.icon-bar .facebook:hover #cog {\n  -webkit-animation: cog 0s infinite;\n  animation: cog 0s infinite;\n}\n\n@-webkit-keyframes cog {\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n\n@keyframes cog {\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n\n.content {\n  margin-left: 75px;\n  font-size: 30px;\n}\n\n#cog {\n  -webkit-animation: cog 2s infinite;\n  animation: cog 2s infinite;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n\n@keyframes cog {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50L3N0aWNreS1zb2NpYWwtYmFyL0Q6XFwyMy43LjIwMTlcXEFjdGl2ZU1vdmluZ1xcQWN0aXZlTW92aW5nL3NyY1xcYXBwXFxDb21wb25lbnRcXHN0aWNreS1zb2NpYWwtYmFyXFxzdGlja3ktc29jaWFsLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50L3N0aWNreS1zb2NpYWwtYmFyL3N0aWNreS1zb2NpYWwtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0UsZUFBQTtBQ0VKOztBRElBO0VBQTRCLFlBQUE7QUNBNUI7O0FEQ0E7RUFBNEIsY0FBQTtBQ0c1Qjs7QURGQTtFQUF3QixjQUFBO0FDTXhCOztBRExBO0VBQTJCLGNBQUE7QUNTM0I7O0FEUkE7RUFBeUIsY0FBQTtBQ1l6Qjs7QURWQTtFQUFTLG1CQUFBO0FDY1Q7O0FEYkE7RUFBUSxtQkFBQTtBQ2lCUjs7QURoQkE7RUFBWSxtQkFBQTtBQ29CWjs7QURuQkE7RUFBVyxtQkFBQTtBQ3VCWDs7QUR0QkE7RUFBWSxpQkFBQTtBQzBCWjs7QUR0QkE7Ozs7O0VBS0csV0FyQmM7QUM4Q2pCOztBRHRCQTs7Ozs7RUFNRSxzQkE5QmU7RUErQmYsa0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDd0JGOztBRHZCRTs7Ozs7RUFDQSxrQ0FBQTtFQUdBLDBCQUFBO0FDNkJGOztBRDNCRTtFQUNFO0lBR0UsK0JBQUE7WUFBQSx1QkFBQTtFQzZCSjtBQUNGOztBRGxDRTtFQUNFO0lBR0UsK0JBQUE7WUFBQSx1QkFBQTtFQzZCSjtBQUNGOztBRDFCQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQzZCRjs7QUQzQkE7RUFDQyxrQ0FBQTtFQUdBLDBCQUFBO0VBQ0EseUNBQUE7RUFHQSxpQ0FBQTtBQzhCRDs7QUQ1QkE7RUFDQTtJQUdDLGlDQUFBO1lBQUEseUJBQUE7RUMrQkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9zdGlja3ktc29jaWFsLWJhci9zdGlja3ktc29jaWFsLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTUlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5pY29uLWJhciBhIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxufVxyXG5cclxuJEJhY2tHcm91bmdJY29uOiAjRkZGO1xyXG5cclxuLmljb24tYmFyIC53aGF0c0FwcDpob3ZlciB7IGNvbG9yOiBncmVlbiB9XHJcbi5pY29uLWJhciAuZmFjZWJvb2s6aG92ZXIgeyBjb2xvcjogIzNCNTk5ODsgfVxyXG4uaWNvbi1iYXIgLkNhbGw6aG92ZXIgeyBjb2xvcjogI2MxYzFjMSB9XHJcbi5pY29uLWJhciAudHdpdHRlcjpob3ZlciB7IGNvbG9yOiAjNTVBQ0VFOyB9XHJcbi5pY29uLWJhciAuRW1haWw6aG92ZXIgeyBjb2xvcjogI2U1MzMzMzsgfVxyXG5cclxuLkVtYWlsIHsgYmFja2dyb3VuZDogI2U1MzMzMzsgfVxyXG4uQ2FsbCB7IGJhY2tncm91bmQ6ICNjMWMxYzE7IH1cclxuLmZhY2Vib29rIHsgYmFja2dyb3VuZDogIzNCNTk5ODsgfVxyXG4udHdpdHRlciB7IGJhY2tncm91bmQ6ICM1NUFDRUU7IH1cclxuLndoYXRzQXBwIHsgYmFja2dyb3VuZDogZ3JlZW47IH1cclxuXHJcblxyXG5cclxuLndoYXRzQXBwLFxyXG4udHdpdHRlcixcclxuLmZhY2Vib29rLFxyXG4uQ2FsbCxcclxuLkVtYWlsIHtcclxuICAgY29sb3I6ICRCYWNrR3JvdW5nSWNvbjtcclxufVxyXG5cclxuLmljb24tYmFyIC5FbWFpbDpob3ZlcixcclxuLmljb24tYmFyIC50d2l0dGVyOmhvdmVyLFxyXG4uaWNvbi1iYXIgLkNhbGw6aG92ZXIsXHJcbi5pY29uLWJhciAud2hhdHNBcHA6aG92ZXIsXHJcbi5pY29uLWJhciAuZmFjZWJvb2s6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRCYWNrR3JvdW5nSWNvbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgI2NvZyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNvZyAwcyBpbmZpbml0ZTtcclxuXHQtbW96LWFuaW1hdGlvbjogY29nIDBzIGluZmluaXRlO1xyXG5cdC1tcy1hbmltYXRpb246IGNvZyAwcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGNvZyAwcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBjb2cge1xyXG4gICAgMTAwJXtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiNjb2cge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XHJcblx0LW1vei1hbmltYXRpb246IGNvZyAycyBpbmZpbml0ZTtcclxuXHQtbXMtYW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XHJcblx0YW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XHJcblx0LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0LW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXJcclxufVxyXG5Aa2V5ZnJhbWVzIGNvZyB7XHJcbjEwMCV7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcclxufVxyXG59XHJcblxyXG5cclxuIiwiLmljb24tYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDU1JTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmljb24tYmFyIGEge1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pY29uLWJhciBhIGkge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5pY29uLWJhciAud2hhdHNBcHA6aG92ZXIge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pY29uLWJhciAuZmFjZWJvb2s6aG92ZXIge1xuICBjb2xvcjogIzNCNTk5ODtcbn1cblxuLmljb24tYmFyIC5DYWxsOmhvdmVyIHtcbiAgY29sb3I6ICNjMWMxYzE7XG59XG5cbi5pY29uLWJhciAudHdpdHRlcjpob3ZlciB7XG4gIGNvbG9yOiAjNTVBQ0VFO1xufVxuXG4uaWNvbi1iYXIgLkVtYWlsOmhvdmVyIHtcbiAgY29sb3I6ICNlNTMzMzM7XG59XG5cbi5FbWFpbCB7XG4gIGJhY2tncm91bmQ6ICNlNTMzMzM7XG59XG5cbi5DYWxsIHtcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcbn1cblxuLmZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cblxuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xufVxuXG4ud2hhdHNBcHAge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuLndoYXRzQXBwLFxuLnR3aXR0ZXIsXG4uZmFjZWJvb2ssXG4uQ2FsbCxcbi5FbWFpbCB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uaWNvbi1iYXIgLkVtYWlsOmhvdmVyLFxuLmljb24tYmFyIC50d2l0dGVyOmhvdmVyLFxuLmljb24tYmFyIC5DYWxsOmhvdmVyLFxuLmljb24tYmFyIC53aGF0c0FwcDpob3Zlcixcbi5pY29uLWJhciAuZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmljb24tYmFyIC5FbWFpbDpob3ZlciAjY29nLFxuLmljb24tYmFyIC50d2l0dGVyOmhvdmVyICNjb2csXG4uaWNvbi1iYXIgLkNhbGw6aG92ZXIgI2NvZyxcbi5pY29uLWJhciAud2hhdHNBcHA6aG92ZXIgI2NvZyxcbi5pY29uLWJhciAuZmFjZWJvb2s6aG92ZXIgI2NvZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjb2cgMHMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBjb2cgMHMgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IGNvZyAwcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBjb2cgMHMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGNvZyB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2NvZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IGNvZyAycyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBjb2cgMnMgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIGNvZyB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/Component/sticky-social-bar/sticky-social-bar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Component/sticky-social-bar/sticky-social-bar.component.ts ***!
  \****************************************************************************/
/*! exports provided: StickySocialBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickySocialBarComponent", function() { return StickySocialBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StickySocialBarComponent = /** @class */ (function () {
    function StickySocialBarComponent() {
    }
    StickySocialBarComponent.prototype.ngOnInit = function () {
    };
    StickySocialBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sticky-social-bar',
            template: __webpack_require__(/*! raw-loader!./sticky-social-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/Component/sticky-social-bar/sticky-social-bar.component.html"),
            styles: [__webpack_require__(/*! ./sticky-social-bar.component.scss */ "./src/app/Component/sticky-social-bar/sticky-social-bar.component.scss")]
        })
    ], StickySocialBarComponent);
    return StickySocialBarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Component_content_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/content/home/home.component */ "./src/app/Component/content/home/home.component.ts");
/* harmony import */ var _Component_content_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/content/contact-us/contact-us.component */ "./src/app/Component/content/contact-us/contact-us.component.ts");
/* harmony import */ var _Component_content_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/content/not-found/not-found.component */ "./src/app/Component/content/not-found/not-found.component.ts");
/* harmony import */ var _Component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/gallery/gallery.component */ "./src/app/Component/gallery/gallery.component.ts");
/* harmony import */ var _Component_content_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/content/service-page/service-page.component */ "./src/app/Component/content/service-page/service-page.component.ts");








var routes = [
    { path: 'Home', component: _Component_content_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Gallery', component: _Component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'ContactUs', component: _Component_content_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'Services', component: _Component_content_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_7__["ServicePageComponent"] },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: _Component_content_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myBtn {\n  display: none;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n  z-index: 99;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  background-color: red;\n  color: white;\n  width: 50px;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n#myBtn:hover {\n  background-color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXDIzLjcuMjAxOVxcQWN0aXZlTW92aW5nXFxBY3RpdmVNb3Zpbmcvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0YXJ0IHRvcCBidXR0b25cclxuI215QnRuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jbXlCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuLy8gZW5kIHRvcCBidXR0b25cclxuIiwiI215QnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNteUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ActiveMoving';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/header/header.component */ "./src/app/Component/header/header.component.ts");
/* harmony import */ var _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/footer/footer.component */ "./src/app/Component/footer/footer.component.ts");
/* harmony import */ var _Component_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/content/content.component */ "./src/app/Component/content/content.component.ts");
/* harmony import */ var _Component_content_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/content/slider/slider.component */ "./src/app/Component/content/slider/slider.component.ts");
/* harmony import */ var _Component_content_image_section_image_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/content/image-section/image-section.component */ "./src/app/Component/content/image-section/image-section.component.ts");
/* harmony import */ var _Component_content_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/content/home/home.component */ "./src/app/Component/content/home/home.component.ts");
/* harmony import */ var _Component_content_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Component/content/contact-us/contact-us.component */ "./src/app/Component/content/contact-us/contact-us.component.ts");
/* harmony import */ var _Component_content_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Component/content/not-found/not-found.component */ "./src/app/Component/content/not-found/not-found.component.ts");
/* harmony import */ var _Component_content_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Component/content/accordion/accordion.component */ "./src/app/Component/content/accordion/accordion.component.ts");
/* harmony import */ var _Component_side_icon_side_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Component/side-icon/side-icon.component */ "./src/app/Component/side-icon/side-icon.component.ts");
/* harmony import */ var _Component_sticky_social_bar_sticky_social_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Component/sticky-social-bar/sticky-social-bar.component */ "./src/app/Component/sticky-social-bar/sticky-social-bar.component.ts");
/* harmony import */ var _Component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Component/gallery/gallery.component */ "./src/app/Component/gallery/gallery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Component_content_image_background_image_background_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Component/content/image-background/image-background.component */ "./src/app/Component/content/image-background/image-background.component.ts");
/* harmony import */ var _Component_content_some_gallery_home_some_gallery_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Component/content/some-gallery-home/some-gallery-home.component */ "./src/app/Component/content/some-gallery-home/some-gallery-home.component.ts");
/* harmony import */ var _Component_content_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Component/content/service-page/service-page.component */ "./src/app/Component/content/service-page/service-page.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _Component_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _Component_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _Component_content_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"],
                _Component_content_image_section_image_section_component__WEBPACK_IMPORTED_MODULE_9__["ImageSectionComponent"],
                _Component_content_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _Component_content_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_11__["ContactUsComponent"],
                _Component_content_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _Component_content_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__["AccordionComponent"],
                _Component_side_icon_side_icon_component__WEBPACK_IMPORTED_MODULE_14__["SideIconComponent"],
                _Component_sticky_social_bar_sticky_social_bar_component__WEBPACK_IMPORTED_MODULE_15__["StickySocialBarComponent"],
                _Component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__["GalleryComponent"],
                _Component_content_image_background_image_background_component__WEBPACK_IMPORTED_MODULE_20__["ImageBackgroundComponent"],
                _Component_content_some_gallery_home_some_gallery_home_component__WEBPACK_IMPORTED_MODULE_21__["SomeGalleryHomeComponent"],
                _Component_content_service_page_service_page_component__WEBPACK_IMPORTED_MODULE_22__["ServicePageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                //  required animations module
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                //  ToastrModule added
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\23.7.2019\ActiveMoving\ActiveMoving\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map