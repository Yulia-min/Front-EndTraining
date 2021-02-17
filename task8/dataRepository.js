const fs = require('fs');

class DataRepository {
    constructor(path) {
        this.path = `./data/${path}`;
        this.dataList = require(this.path);
    }

    getAll() {
        return this.dataList;
    }

    add({ name: value, description, status, date, time }) {
        const note = {
            id: this.dataList.length,
            value,
            description,
            status,
            date,
            time,
        };

        this.dataList.push(note);

        return note;
    }

    write() {
        fs.writeFile(this.path, JSON.stringify(this.dataList), () => {});
    }
}

module.exports = DataRepository;