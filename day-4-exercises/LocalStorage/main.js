// const userName = "Amir"
// localStorage.username = userName

// localStorage.setItem("nothing", "userName")

// localStorage.removeItem("nothing")
// localStorage.clear()



// localStorage.userInfo(user)
// console.log(localStorage)


// let userStorage = {
// 	darkMode: true,
// 	showSideNav: false,
// 	defaultResultCount: 9,
// 	latestMarks: {
// 		 sectionA: 92,
// 		 sectionB: 11
// 	},
// 	cart: [
// 		 { id: 3112, count: 2 },
// 		 { id: 812, count: 16 }
// 	]
// }

// userStorage = JSON.stringify(userStorage)
// userStorage = JSON.parse(userStorage)
// console.log(userStorage)


// Alright, now for some practice. Here are you instructions:

// Create a simple input and button
// When the user presses the button, it should display the text they wrote on the screen below the input
// As well, each piece of text should be added to an array called wisdom
// You should push the text as an object that looks like this: {text: "the thing the user wrote"}
// On every other click (i.e, whenever the length of wisdom is even), save all of wisdom to Local Storage
// When you refresh the page, you should load all the text from wisdom and display it under the input right away


// Once you're done with that, complete the following:

// Add a "Clear Wisdom" button that, when pressed, removes wisdom entirely from Local Storage
// Add a little x next to each wisdom (on the HTML), that deletes that specific piece of wisdom from Local Storage
// Might be useful to add an id to each piece of wisdom


// That's all, you've got this ;)

let wisdom = []

$("#postB").on("click", function () {
	const userInput = $("input")
	let userInputVal = userInput.val()

	const containerElement = $("<div></div>")

	const p = `<p> ${userInputVal}</p>`
	const pElem = $(p)
	containerElement.append(pElem)


	const bElm = $(`<button>delet me</button>`)
	bElm.on("click", function () {
		const parsedWisdom = JSON.parse(localStorage.myR) // [{text: 'blabla'}]
		const newWisdom = parsedWisdom.filter((object) => object.text !== userInputVal)
		localStorage.setItem("myR", JSON.stringify(newWisdom))

	})

	containerElement.append(bElm)


	$("#input-container").append(containerElement)

	userInput.val("")
	wisdom.push({ text: userInputVal })
	console.log(wisdom)

	if (wisdom.length % 2 === 0) {
		localStorage.setItem("myR", JSON.stringify(wisdom))
	}

	const wisdomString = localStorage.getItem("myR")
	const wisdomArray = JSON.parse(wisdomString)

})

const render = function () {

	let userStorageParse = localStorage.myR

	userStorageParse = JSON.parse(userStorageParse || "{}")

	if (userStorageParse.length > 0)
		for (let text of userStorageParse) {
			const p = `<p>${text.text}</p>`
			const b = `<b></b>`
			const bElm = $(b)
			bElm.attr("id", Math.random())
			const pElem = $(p)
			$("#input-container").append(pElem)
			$("#input-container").append(bElm)
		}
}

render()




$("#postC").on("click", function () {

	localStorage.clear()
	alert("storage is clear!")

})




