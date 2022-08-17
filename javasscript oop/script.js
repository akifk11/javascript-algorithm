//Düz javascript objeleri

// let student = {
//     id: 631,
//     name: "akif",
//     surname: "kiraz",
//     introduce() {
//         console.log("benim adım soyadım " + this.name + " " + this.surname + " ben bir öğrenciyim.")
//     }
// };
//fonksiyonlarda property olarak tutulabilir


// let student2 = {
//     id: 422,
//     name: "bahadır",
//     surname: "ybroğlu",
//     introduce() {
//         console.log("benim adım soyadım " + this.name + " " + this.surname + " ben bir öğrenciyim.")
//     }
// };
// console.log(student)
// student.introduce()
// student2.introduce()

// class ClassName {

// }

// let instance = new ClassName();

// console.log(instance)
class User {
    constructor(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    introduce() {
        return "benim adım soyadım " + this.name + " " + this.surname
    }
}

class Teacher extends User {

    introduce() {
        let text = super.introduce();
        console.log(text + " ben bir öğretmedim.")
    }

}

class Student extends User {

    constructor(id, name, surname) {
        super(id, name, surname);
        this.courses = [];
    }
    introduce() {
        console.log(super.introduce() + " ben bir öğrenciyim")
    }
    addcourse(name) {

        if (!Student.avaibleCourses.includes(name)) {
            console.log("bu kurs alınamaz")
            return;
        }

        if (this.courses.length < 2) {
            this.courses.push(name);
        } else {
            console.log("maksimum iki ders seçimi yapabilirsiniz")
        }
    }

    removecourse(name) {
        let index = this.courses.indexOf(name)
        if (index > -1) {
            this.courses.splice(index, 1)
        } else {
            console.log(name + " dersini almıyorsun")
        }
    }
}
Student.avaibleCourses = ["matematik", "fizik", "tarih"];


let student1 = new Student(631, "akif", "kiraz")
student1.addcourse("fizik")
console.log(student1)

let teacher1 = new Teacher(111, "amir", "kiraz")

console.log(teacher1)