var slider = new PageSlider($('body'));
var beforePage = "";
function runRouter() {
	Login.prototype.template = Handlebars.compile($("#login-tpl").html());
	Edit.prototype.template = Handlebars.compile($("#edit-tpl").html());
	Profile.prototype.template = Handlebars.compile($("#profile-tpl").html());
	Register.prototype.template = Handlebars.compile($("#regist-tpl").html());
router.addRoute('', function() {
	 slider.slidePageFrom(new Login().$el, 'left');
});
router.addRoute('profile', function() {
	 	if (beforePage == 'edit') {
			 slider.slidePageFrom(new Profile().$el, 'left');
	 }
	 else{
	 		 slider.slidePageFrom(new Profile().$el, 'right');
	 }
	 beforePage ='';
});
router.addRoute('profile/edit/:id', function() {
	 slider.slidePageFrom(new Edit().$el, 'right');
	 beforePage = 'edit';

});
router.addRoute('regist', function() {
	 slider.slidePageFrom(new Register().$el, 'right');
});
 router.start();
};
 runRouter();