const Student = {
    fullName : "Ruturaj Narhe",
    age : 19,
    cgpa : 8.42,
    isPass : true
};

Student["age"] = Student['age'] + 1; 
console.log(Student);

console.log(Student.fullName);