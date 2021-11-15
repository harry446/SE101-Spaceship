import Sprite from "../sprite.js";
import Meteor from "./meteor.js";
import Vector2 from "../helpers/Vector2.js";
export default class Asteroid extends Sprite {
	constructor(speed, ...args) {
		super(...args);
		this.speed = speed;
		this.image = this.game.images["asteroid"];
		this.ctx = "objects";
		this.delete = false; //Once an item needs to be deleted and stop rendering, set to true
		this.size = new Vector2(10, 10);
		this.radius = 50;
	}
	update() {
		//Add special update code here if needed
		super.update();

	}
	shatter() {
		//Create a bunch of meteors, somewhat randomly.
		//this.delete = true
		// meteor1 = new Meteor(new Vector2(50, 30), this.pos, this.game);
		// this.game.delObjects.push(meteor1);
	}
}
