/*
        DataTypes

        1.String
        2.Number
        3.boolean
        4.Undefined
        5.null
        6.any
        7.unknown
        8.never
        9.tuple
*/
//6. any datatype is not strict at all.


//when you are not usre of the datatypes that the variable is going to hold and inorder to avoid compilation erros

let data : any = "34567" //while using any -typescript undderstand that returning type may be anything

//I can reassign also now ,
data=34567;

//7. UnKnown -Mildly strict where it can accept all datatypes and can further manipulation we have to check

let value :unknown ; //Unknon datatype can accept all datatypes and can further be manipulated using an if condition

value =80;
value="Hello"

if(typeof value==="string"){
    console.log("Value is :",value.toLowerCase()); 
}

//never

function infiniteLoop():never{
    while(true){
        console.log("This is infinte loop");
        
    }
}

//Tuple is a homogeneous array.

let user=["TestLeaf",20,true] //its not strict fixed lenegth of array with different datatype4, Object l
//if we need strict  let user:[string,number,boolean]=["TestLeaf",20,true]
console.log(user[1]);
