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
			this.content[i].taken=0;
		}
		var left = this.content.length-1;
		console.log("length "+left);
    	for (var i = 0; i < this.content.length; i++) {
		        console.log(this.content[i].name);
           		too = Math.floor(Math.random()*(left))
			//	window.prompt(this.content[i].name + " " +too,""); 

				for (var t = 0; t < this.content.length; t++) {
		           if (this.content[t].name!=this.content[i].spouse && this.content[t].name!=this.content[i].name && this.content[t].taken==0) { too=too-1;}
				   if (too==-1) { too=t; break;}
				}
				this.content[too].taken=1;
				console.log(too); 

				this.content[i].set('got'," but has been chossen to buy a gift for " + this.content[too].name);
				console.log(this.content[i].got);
				console.log(this.content[i].name + " buys gift for " + this.content[too].name);
				console.log(this.content);
				left=left-1;
				console.log("length now "+left);
    		}
			for (var i = 0; i < this.content.length; i++) {
				this.content[i].taken=0;
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