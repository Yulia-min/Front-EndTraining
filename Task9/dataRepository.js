/*const fs = require('fs');

class DataRepository {
    constructor(path) {
        this.path = `${path}`;
        this.dataList = require(this.path);
    }

    getAll() {
        return this.dataList;
    }

    add({ name: firstName, secondName, age, speciality}) {
        const note = {
            id: this.dataList.length,
            firstName,
            secondName,
            age,
            speciality,
        };

        this.dataList.push(note);

        return note;
    }

    write() {
        fs.writeFile(this.path, JSON.stringify(this.dataList), () => {});
    }
}

module.exports = DataRepository; */