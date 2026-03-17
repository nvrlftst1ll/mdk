const Student = {
    id: Date.now(),
    name: "Sergey",
    prefix: "Ser",
    status: "active",
    getStatus() {
        return this.status;
    }
};


console.log(Student)


const SNAPSHOT_STEP = "{id: 1773741202220, name: 'Sergey', prefix: 'Ser', status: 'active', getStatus: [Function: getStatus]}";

Student.deactivate = function() {
    this.status = "inactive";

};


Student.deactivate();

console.log(Student)


const SNAPSHOT_STEP2 = "{id: 1773741348580, name: 'Sergey', prefix: 'Ser', status: 'inactive', getStatus: [Function: getStatus], deactivate: [Function (anonymous)]}"