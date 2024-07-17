function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return i;
    }
  }
  return -1;
}

const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent1 = "John";

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";
// ตอบคำถามตรงนี้จ้า
console.log(findStudentIndex(students1, searchStudent1));
console.log(findStudentIndex(students2, searchStudent2));
