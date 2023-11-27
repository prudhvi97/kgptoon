export class Medicine{
    imageUrl :string;
    title :string;
    description :string;
    symptomsSet: string[];

    constructor() { 
        this.title="";
        this.imageUrl ="";
        this.description="";
        this.symptomsSet=[];
      }
}