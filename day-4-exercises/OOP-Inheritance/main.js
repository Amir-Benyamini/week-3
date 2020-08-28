class Person {
	constructor(name, startYear) {
		 this.name = name
		 this.startYear = startYear
		 this.courses = []
	}

	addCourse(course) {
		 this.courses.push(course)
	}
}


class Student extends Person {
	constructor(name, startYear) {
		 super(name, startYear)
		 this.grades = []
	}

	receiveGrade(courseName, finalGrade) {
		 this.grades.push({
			  course: courseName,
			  grade: finalGrade
		 })
	}

	//method overriding!
	addCourse(course) {
		if (this.courses.indexOf(course) == -1) {
			 super.addCourse(course)
		}
  }
}



class Teacher extends Person {
	constructor(name, startYear, salary){
		super(name, startYear)
		this.salary = salary
		this.courses = {}
	}

	giveGrade(student, courseName, grade ){
		student.receiveGrade(courseName, grade)
	}
	addCourse(course){
		
		if(this.courses[course]){
			return this.courses[course]++
		}
		this.courses[course] = 1
	}
	
}

// const s1 = new Student("Ronda", 2017)
// console.log(s1.name) //prints "Ronda"

// s1.addCourse("Algebra II")
// console.log(s1.courses) //prints ["Algebra II"]

// s1.receiveGrade(s1.courses[0], 100)
// console.log(s1.grades) 

// Create a Teacher class which also inherits from Person

// A Teacher should also have a salary attribute
// The value of salary should come in from the constructor
// As well, Teacher should have a method called giveGrade
// The method should receive a student*, a course name, and a grade, and invoke the student's receiveGrade method




// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"﻿


// override the addCourse method and courses attribute in the Teacher class.

// Instead of courses being an array, it should be an object
// The object should track the amount of times the teacher adds the course
// Instead of addCourse pushing to an array (which now doesn't exist), it should update the course count in courses


// Use the following code to see if you did it right before looking at the answer:

// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


// Create a Principal class.



// It should inherit from Person, and have the following additional attributes and methods:

// teachers - an array of Teacher objects
// hireTeacher - a method that receives a teacher and adds it to the teachers array
// It should also console log "<principal name> just hired <teacher name>"
// students an array of Student objects
// recruitStudent - a method that receives a student and adds it to the students array
// expelStudent - a method that receives a student and removes it from the studentsarray (for now, you can just search by name)
// transferStudent - a method that receives a student and a principal, removes the student from students and pushes it to the other principal's students array


class Principal extends Person{

	constructor(name, startYear,){
		super(name, startYear)
		this.teachers = []
		this.students = []
	}
	hireTeacher(name, startYear, salary){
		this.teachers.push(new Teacher (name ,startYear , salary ))
		console.log (this.name + " just hired " + name)
	}

	recruitStudent(student){

		this.students.push(student)
	}
	expelStudent(studentName){

		for (let student of this.students){
			
		if(studentName === student){

			this.students.splice(this.students[student], 1)
		}

		}
	}
	transferStudent(student, principal){

		this.expelStudent(student.name)
		principal.recruitStudent(student)
	}
}




// You can test your code with the following:
const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

// //1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

// //3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

// //5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.recruitStudent(s1)
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
