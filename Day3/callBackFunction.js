function checkTicketAvaliablity(isAvailabele, x){

    console.log("Checking ticket availability for");

    setTimeout(()=>{
        if(isAvailabele){
            console.log("Tickets are available ");
        x();
        }else{
             console.log("Tickets are not available");
        }
    }, 3000);
}

function bookTicket(){
    console.log("Booking your ticket now...");
}   

//checkTicketAvaliablity(true, bookTicket);

checkTicketAvaliablity(false, bookTicket);


//netFlix example

function movieSearchinNetFlix(movieName,callback){
    console.log("Searching for the movie: " + movieName);
    setTimeout(() => {
        console.log(`Movie ${movieName} is available`);
        callback();
        
    }, 2000);
}

function playMovie(){
    console.log("Playing your movie now... ");
}

movieSearchinNetFlix("Amaran",playMovie);