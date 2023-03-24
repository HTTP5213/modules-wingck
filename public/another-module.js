export var theShire;
export var buckland;
export var HobbitSettlement = class {
	constructor(name, founding, founders) {
		this.name = name;
		this.founding = founding;
		this.founders = founders;
		this.originalSettlement = { name: 'Eriador', details: eriadorDetails };
	}
};