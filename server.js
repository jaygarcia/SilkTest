Config.documentRoot = 'docroot';
Config.numChildren = 25;
Config.mysql = {
	host: 'localhost',
	user: 'root',
	passwd: '',
	db: 'othello'
};

SQL = new MySQL();
SQL.connect();

Schema.add({
	name: 'Test',
	fields: [
		{ name: 'dt', type: 'varchar', size: 32 }
	]
});

HttpChild.requestHandler = function() {
	var date = Date.now() ;
	console.log("Adding record with : " + date );
	Schema.putOne('Test', { dt : date });
	console.log('Done Adding record!');
}
