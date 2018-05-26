const User = require('./bd');
(async () => {
	let newUser = {login: 'MariaShi'};
	newUser = new User(newUser);
	await newUser.save();
	process.exit(0);
})();