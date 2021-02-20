class student {
    static #id = 1;

    constructor(
        firstName,
        secondName,
        age,
        speciality,
    ) {
        this.id = student.#id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.speciality = speciality;
        student.#id++;
    }
}

const student__list = [
    new student('John', 'Cramer', 25, 'progammer')
];

