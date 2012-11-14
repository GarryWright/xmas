var App = Ember.Application.create();

App.Person = Ember.Object.extend({
  name: null,
	spouse:null,
	taken:null,
	got:null
	
});

App.ApplicationController = Ember.Controller.create();

App.peopleController = Ember.ArrayController.create({
	
	init: function(){
        this._super();
        this.set('content', Ember.A());
        var entry = App.Person.create({
          	name: 'Garry',
			spouse: 'Kate',
			taken:0 
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Kate',
			spouse: 'Garry',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Matt',
			spouse: 'Emma',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Emma',
			spouse: 'Matt',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Sara',
			spouse: 'Jim',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Jim',
			spouse: 'Sara',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Colleen',
			spouse: 'Paul',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Paul',
			spouse: 'Colleen',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Kevin',
			spouse: 'Paula',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Paula',
			spouse: 'Kevin',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);
		var entry = App.Person.create({
          	name: 'Tom',
			spouse: 'Tom',
			taken:0
        });
        this.pushObject(entry);
		console.log(entry);

        console.log("Adding first username");

    },

    addPerson: function() {
    	var entry = window.prompt("name followed by spouse's name","");
    	var newPerson = App.Person.create({
          	name: entry.substr(0, entry.indexOf(' ')) ,
			spouse: entry.substr(entry.indexOf(' ')+1)
        });
		console.log(newPerson);
        this.pushObject(newPerson)
    },
	matchPeople: function() {
		for (var i = 0; i < this.content.length; i++) {
			this.content[i].set('taken',0);
		}
		
		console.log("length "+left);
		
    	for (var i = 0; i < this.content.length; i++) {
		        console.log(this.content[i].get('name'));
		        var left = 0;
				for (var t = 0; t < this.content.length; t++) {
					console.log(t + " " + this.content[t].get('name') + " " + this.content[i].get('spouse') + " " + this.content[t].get('taken'));	
		           if (this.content[t].get('name')!=this.content[i].get('spouse') && this.content[t].get('name')!=this.content[i].get('name') && this.content[t].get('taken')===0) {
						console.log("left is going up");
			 			left=left+1;}
				}
		        too = Math.floor(Math.random()*(left))+1
		        too = too;
				if (too===0) {
			  		window.prompt(this.content[i].get('name') + " " +too,""); 
				}
                console.log("left " + left + " too " + too);
				target = -1
				for (var t = 0; t < this.content.length; t++) {
					console.log(i);
					console.log(t);
					console.log(t + " " + this.content[t].get('name') + " " + this.content[i].get('spouse') + " " + this.content[t].get('taken'));	
		           if (this.content[t].get('name')!=this.content[i].get('spouse') && this.content[t].get('name')!=this.content[i].get('name') && this.content[t].get('taken')===0) {
						console.log("Too is going down");
			 			too=too-1;}
				   if (too===0) { target=t; console.log("found " + t); break;}
				}
				
				if (target!=-1) {
					console.log(target);
					console.log("before "+ this.content[target].get('taken'));
					this.content[target].set('taken',1);
					console.log("after "+this.content[target].get('taken'));
					console.log(target); 

					this.content[i].set('got'," but has been choosen to buy a gift for " + this.content[target].get('name'));
					console.log(this.content[i].get('got'));
					console.log(this.content[i].get('name') + " buys gift for " + this.content[target].get('name'));
					console.log(this.content);
					left=left-1;
					console.log("length now "+left);
				}
    		}

    }

});

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.PersonView = Ember.View.extend({
  templateName: 'person',

  deletePerson: function(event) {
    App.peopleController.removeObject(
      event.context
    );
  }
});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

App.initialize();