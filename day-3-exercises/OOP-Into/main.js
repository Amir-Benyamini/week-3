// Instantiate a dog instance of Animal. You decide on the name and whether it's paraplegic or not. Console log the dog's name to make sure it worked.

// class Animal {

// 	constructor(type, sound, numLegs) {

// 		this.type = type
// 		this.sound = sound
// 		this.numLegs = numLegs
// 	}

// }

// const dog = new Animal("Dog", "Woof", 4)

// console.log(`im a ${dog.type}, i have ${dog.numLegs} legs and i love to ${dog.sound}!`)



// Create a Human class. 

// It should have three properties: name, age, and isFriendly - a string, number, and boolean. 

// Then, create an instance of a human, and print out all its properties.

// They way we've defined our class, you cannot do something like this: Animal.name -
//  this doesn't make sense because Animal doesn't have its own name; it merely describes what properties each animal instance should have.

// class Human {

// 	constructor(name, age) {

// 		this.name = name
// 		this.age = age
// 		this.isFriendly = false

// 	}

// }

// const Amir = new Human("Amir", 30)
// Amir.isFriendly = true

// console.log(Amir)



// class Animal {
// 	constructor(name, numLegs) {
// 		 this.name = name
// 		 this.numLegs = numLegs
// 		 this.children = []
// 	}

// 	giveBirth(name){
// 		this.children.push(name)
// 		 console.log("Boom. Birthed " + name)
// 	}
// }


// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿



class Vehicle {

	constructor(type, seatsNum, maxspeed, fuel) {
		this.type = type
		this.seatsNum = seatsNum
		this.maxspeed = maxspeed
		Vehicle.carsSold++;
		this._fuel = fuel

	}


	getUpgrade() {
		this.maxspeed = this.maxspeed * 1.25
		this.seatsNum = this.seatsNum + 2
		console.log(this)
	}


	static getInfo() {
		console.log("We've sold " + Vehicle.carsSold + " vehicles.");
	}

	static moneyMade() {
		console.log(`We've made ${Vehicle.carsSold * 30000} Dollars from our vehicles.`)
	}

	set fuel(amount) {
		if (amount < 0) {
			console.log("Low on fuel.")
		}

		if (amount > 150) {
			console.log("Too much fuel.")
		}
		this._fuel = amount
	}

	get fuel() {

		return this.fuel
	}
}

Vehicle.carsSold = 0;

const fCar = new Vehicle("family", 5, 180)
const sCar = new Vehicle("sport", 2, 220)
const cCar = new Vehicle("city", 2, 140)

Vehicle.getInfo()
Vehicle.moneyMade()

cCar.getUpgrade()



// Given a boolean weArePoor, create an instance of Animal that receives either a LuxuryFeeder or a CheapFeeder depending on the boolean's value.

// Test your code with both values to see DI in action ~

class LuxuryFeeder {
	getFood(animalType) {
		if (animalType == "lion") {
			return "chia seeds"
		}
		if (animalType == "elephant") {
			return "peanuts"
		}

		return "scraps"
	}
}

class CheapFeeder {
	getFood(animalType) {
		return "scraps"
	}
}

class Animal {
	constructor(name, type, feeder) {
		this.name = name
		this.type = type
		this.feeder = feeder //dependency injection!
	}

	_consume(food) {
		console.log("Just consumed " + food + ". Feels good.")
	}

	eat() {
		const food = this.feeder.getFood(this.type)
		this._consume(food)
	}
}


const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = false
let feeder

if (weArePoor) {
	 feeder = cheapFeeder
} else {
	 feeder = luxuryFeeder
}

const emo = new Animal("Emo", "lion", feeder)

emo.eat()