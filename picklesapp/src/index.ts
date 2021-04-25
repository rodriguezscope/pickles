import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Student} from "./entity/Student";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));



createConnection().then(async connection => {

    console.log("Inserting a new student into the database...");
    const student = new Student();
    student.firstName = "bob";
    student.lastName = "builder";
    student.gender = "male";
    student.dob = "1990-02-10";

    // change implementation from using entity manager to repository
    //await connection.manager.save(student);
    let studentRepository = connection.getRepository(Student);
    await studentRepository.save(student);
    console.log("Saved a new student with id: " + student.id);

    console.log("Loading students from the database...");
    const students = await connection.manager.find(Student);
    console.log("Loaded students: ", students);


}).catch(error => console.log(error));



