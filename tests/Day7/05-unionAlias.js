/*
- Create a function that accepts only specific payment methods.


- Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".


- Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment method is chosen.


- Call the function with "UPI" and "CreditCard" as arguments.

*/
function makePayment(Payment) {
    console.log("Payment method chosen is :", Payment);
}
makePayment("UPI");
makePayment("CreditCard");
//makePayment("DebitCard"); //Error as DebitCard is not part of PaymentMethod   
