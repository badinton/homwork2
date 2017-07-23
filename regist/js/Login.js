var Login = function() {
	this.initialize = function() {
		this.$el = $('<div/>');
		 console.log(localStorage.getItem("email"))
		this.render();
		}
    this.render = function() {
        this.$el.html(this.template());
       
        return this;
    }
        this.initialize();
    
}