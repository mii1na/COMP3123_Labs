/*
purpose:
filter()
reduce()
search()
map()
forEach()
 */

console.log("Starting - lab2 array methods")
const courses = ["COMP3123", "COMP2152", "COMP1236","FASH1111"]
console.log(courses[0][0])

const filteredCourses = courses.filter((course) => course[0] === "C")

console.log(filteredCourses)