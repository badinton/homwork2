var Edit = function() {
    var dat = {'gender': localStorage.getItem("gender"),'firstname': localStorage.getItem("firstname"),'lastname': localStorage.getItem("lastname"),'img': localStorage.getItem("img"),'email': localStorage.getItem("email"),'phone': localStorage.getItem("phone"),'id': localStorage.getItem("id"),'address': localStorage.getItem("address")}
	console.log(dat)
	
	this.initialize = function() {
		this.$el = $('<div/>');
		this.render();
		}

    this.render = function() {
        this.$el.html(this.template(dat));
        return this;
    }
        this.initialize();
    
}
