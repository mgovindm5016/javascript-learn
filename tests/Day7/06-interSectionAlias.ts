
type mSocAnalyst={
    name:string,
    skills:string[],
    experience:number
}

type mSocManager={
    name:string,
    teamSize:number,
    projectsHandled:string[]
}

type mSocLead= mSocAnalyst & mSocManager;

let leadDetails : mSocLead ={
    name:"Govind",
    skills:["Network Security","Endpoint Security","SIEM"],
    experience:5,
    teamSize:10,
    projectsHandled:["ProjectA","ProjectB"]
}

console.log("mSoc Lead Details :",leadDetails);

console.log("mSoc Lead Details name :",leadDetails.name);
