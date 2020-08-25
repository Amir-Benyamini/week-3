// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name%20of%20the%20Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

// const  useData = function(data) {
// 	console.log(data);
//  }

// $.ajax({
// 	method: "GET",
// 	url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
// 	success: useData
//  })





// Exercise 1

// Remember the fetch function from before? There we had the ISBN hard-coded on each call, which is not very useful.

// Instead, add a parameter to the function that accepts an ISBN, and modify your function so that it searches for info about the book with that ISBN.

// For instance, if you call fetch(9780575087057), you should receive data about the best book in the world: Name of the Wind.

// You can test your function with the following ISBNs, as well:

// 9782806269171 - The Little Prince: Book Analysis
// 1440633908 - Of Mice and Men by John Steinbeck
// 9781945048470 - The Alchemist by Paulo Coelho
// 9780307417138 - Hitchhiker's Guide to the Galaxy

const littlePrince = 9782806269171
const miceAndMen = 1440633908
const theAlchemist = 9781945048470
const HitchhikersGuide = 9780307417138

const fetch1 = function (isbn) {
	$.ajax({
		method: "GET",
		url: `https://www.googleapis.com/books/v1/volumes?q=$isbn:${isbn}`,
		success: function (data) {
			console.log(data.items[0].volumeInfo.title);
		},
		error: function (xhr, text, error) {
			console.log(text);
		}
	});
}

fetch1(littlePrince)
fetch1(miceAndMen)
fetch1(theAlchemist)
fetch1(HitchhikersGuide)




// Exercise 2

// Now modify your function again so that it receives two parameters: queryType and queryValue

// You should modify your function to search by whatever queryType is (ISBN or title), with the value of whatever queryValue is.

// For instance, if you call fetch("title", "The Wise Man's Fears"), you should receive data about the book The Wise Man's Fears.
const fetch2 = function (queryType, queryValue) {
	$.ajax({
		method: "GET",
		url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
		success: function (data) {
			console.log(data.items[0].volumeInfo.title);
		},
		error: function (xhr, text, error) {
			console.log(text);
		}
	});
}
// You can test your function with the following, as well:

fetch2("isbn", 9789814561778)
// - From Third World to First: The Singapore Story
fetch2("title", "How to Win Friends and Influence People")
//  - book by Dale Carnegie


// Exercise 3

// You will have noticed that the Google Books API returns its data in an items array - usually this array has data on more than one book.

// Modify your fetch function again so that instead of printing the entire data that is returned from the API, you print the title, author, and ISBN forEach of the books in items

const fetch3 = function (queryType, queryValue) {
	$.ajax({
		method: "GET",
		url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
		success: function (data) {
			console.log(data.items[0].volumeInfo.title);
			console.log(data.items[0].volumeInfo.authors[0]);
			
		},
		error: function (xhr, text, error) {
			console.log(text);
		}
	});
}

fetch3("isbn", HitchhikersGuide)