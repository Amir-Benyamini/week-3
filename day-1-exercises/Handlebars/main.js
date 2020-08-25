var classData = {
	classmates: [
		 {name: "That on gal", description: "Always has the ansswer", socialNetwork: true},
		 {name: "The weird dude", description: "Quick with a smile", socialNetwork: false},
		 {name: "Taylor", description: "Just Taylor", socialNetwork: true}
	]
}

const sourceExample = $("#example-template").html()
const Exampletemplate = Handlebars.compile(sourceExample)

const exampleHtml = Exampletemplate(classData)

$("#example").append(exampleHtml)


const animalsData = {
	animals: [
		"Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"
	]
}
const languagesData = {
	languages:[
		"French", "Spanish", "Togolese", "Javascript", "Uruk"
	]
}


const animalsSource = $("#animals-template").html()
const animalsTemplate = Handlebars.compile(animalsSource)

const animalsHtml = animalsTemplate(animalsData)

const languagesSource = $("#languages-template").html()
const languagesTemplate = Handlebars.compile(languagesSource)

const languagesHtml = languagesTemplate(languagesData)


$("#example2").append(animalsHtml)
$("#example2").append(languagesHtml)