class Father {
	constructor(name = 'Darth') {
		this.name = name.toUpperCase();
	}
	get myName() {
		return this.name;
	}
}
const father1 = new Father();
console.log(father1.myName);

class Son extends Father {
	constructor(name) {
		super();
		const f = super.myName;
		this.name = `${name} ${f}'s son`;
	}
}
const son1 = new Son('Luke');
console.log(son1.myName);