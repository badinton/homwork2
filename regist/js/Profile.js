var Profile = function() {
    var name;
    var dat = {'gender': localStorage.getItem("gender"),'firstname': localStorage.getItem("firstname"),'lastname': localStorage.getItem("lastname"),'img': localStorage.getItem("img"),'email': localStorage.getItem("email"),'phone': localStorage.getItem("phone"),'id': localStorage.getItem("id"),'address': localStorage.getItem("address")}
	
    this.initialize = function() {
		this.$el = $('<div/>');
        this.$el.on('click', '#btnLogout', this.Logout);
       console.log(dat)
       if (dat.email) {

        this.render();
        }	
        else{
            alert('please login');
          window.location = 'index.html';
        }
    }
     this.Logout = function()  {
    
        localStorage.setItem('firstname','');
        localStorage.setItem('lastname','');
        localStorage.setItem('gender','');
        localStorage.setItem('img','');
        localStorage.setItem('email','');
        localStorage.setItem('phone','');
        localStorage.setItem('address','');
     }
    this.render = function() {

        this.$el.html(this.template(dat));
        return this;
    }
   
        this.initialize();
    
}