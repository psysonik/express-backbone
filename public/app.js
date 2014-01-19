var User = Backbone.Model.extend({});

var ShowUserView = Backbone.View.extend({
    template: _.template($("#showUserView").html()),
    initialize : function(){
        this.model.on('change',this.render,this);
    },
    render : function(){
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});

var EditUserView = Backbone.View.extend({
    template: _.template($("#editUserView").html()),
    events : {
        "click button" : "saveChanges"
    },
    render : function(){
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    },
    saveChanges : function(){
        this.model.set({ name : $("#name").val(), twitter  : $("#twitter").val() });
    }
});

var me = new User({name : "Martin",twitter : "CoryKraftsoff"}),
    showView = new ShowUserView({ model : me }),
    editView = new EditUserView({ model : me });

$("#main").append(showView.render().el).append(editView.render().el)