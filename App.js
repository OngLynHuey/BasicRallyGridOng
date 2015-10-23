Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
	console.log('Our first app woot!');
	this._loadData();
	},

	//to get data from Rally
       _loadData: function() {
		//to create store and autoload
		var myStore=Ext.create('Rally.data.wsapi.Store', {
		model: 'User Story',
		autoLoad: true,
		listeners: {
				load: function(myStore,myData,success){
				console.log('got data', myStore,myData,success);
		this._loadGrid(myStore);
		},
		scope: this
		},
		fetch: ['FormattedID','Name','ScheduleState']
		});
		},

	//create and show a grid of given stories and pass to store
	_loadGrid: function(myStoryStore) {
		var myGrid=Ext.create('Rally.ui.grid.Grid', {
		store: myStoryStore,
		columnCfgs: ['FormattedID','Name','ScheduleState']
		});
		this.add(myGrid);
		console.log('what is this',this);
    }
});
