import { Skill } from "./skills";


export class Person {
​​

    id: number | undefined;

    firstName: string | undefined ;

    lastName: string | undefined ;

    highschool: boolean | undefined;

    highschoolName: string | undefined;

    college: boolean | undefined;

    collegeName: string | undefined;

    workExperience: boolean | undefined;

    workDone: string | undefined;

    skills: Skill = new Skill();

    

    constructor()
    {
        this.id = 7;
    }
}