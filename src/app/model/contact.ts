

export class Contact {

    id : number;

    firstName : string;

    lastName : string;

    country : string;

    birthYear : number;

    phone : string;

    skills : any = {};

    proficiency : number;

    email : string;

    constructor(firstName:string = null,lastName:string = null,id:number=NaN) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

}