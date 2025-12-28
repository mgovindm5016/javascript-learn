import { test,expect } from "@playwright/test";

const baseUrl = "https://dev291487.service-now.com/api/now/table/";
const tableName = "change_request";

const username = "admin";
const password = "B7h/Q7Owjc/B";
let auth = btoa(`${username}:${password}`);
let sys_id: any;
let responseBody;
let shortDescription:any

test.describe.serial("ServiceNow Change Request API - POST and GET Operations", () => {
test(`Post Request-Change request`,async({request})=>{
    const response=await request.post(`${baseUrl}${tableName}`,{
        headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding
        },
      data: {
        short_description: "User requested to change Priority status",
        priority: "2",
        work_notes: "Checked mail server logs to see Current Priority"
},
});
    console.log("Post request Status:",response.status);
    console.log("Post request StatusText",response.statusText);
    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe("Created")

   responseBody= await response.json();
   console.log("Post request Respons ebody:",responseBody);

   sys_id=responseBody.result.sys_id;
   console.log("Created Change Request sys_id:", sys_id);

     expect(response.ok()).toBeTruthy();
     expect(sys_id).toBeDefined();
});


  test(`GET Request - Fetch Created Change Request`, async ({ request }) => {
    const response = await request.get(`${baseUrl}${tableName}/${sys_id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding
      },
    });

    console.log("Get request Status:", response.status());
    console.log("Get request Status text", response.statusText);

    responseBody = await response.json();
    console.log("Get Request Response:", responseBody);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    // Verify the fetched incident matches the created one
    expect(responseBody.result.sys_id).toBe(sys_id);
    console.log("Verified - Fetched Change Request sys_id matches:", sys_id);
  });


    test(`Put request-Update Change Request Short Description`, async ({ request }) => {
      const response=await request.put(`${baseUrl}${tableName}/${sys_id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding            }
        },
        data: {
          short_description: `User requested to change Priority status to low`,
        },
      });
      console.log("Update Request Status :",response.status());
      console.log("Update Request Status Text :",response.statusText);
      
      responseBody = await response.json();
      console.log("Put Request Response:", responseBody);
      expect(response.status()).toBe(200);
      expect(response.statusText()).toBe("OK");
  
      shortDescription = responseBody.result.short_description;
      console.log("Updated Incident Short Description:", shortDescription);
    });


      test(`GET Request - To Validate Updated Short Description`, async ({ request }) => {
        const response = await request.get(`${baseUrl}${tableName}/${sys_id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding
          },
        });
    
        console.log("Get request Status:", response.status());
        console.log("Get request Status text", response.statusText);
    
        responseBody = await response.json();
        console.log("Get Request Response:", responseBody);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");
    
        // Verify the fetched incident matches the updated one
        expect(responseBody.result.short_description).toBe(shortDescription);
        console.log("Verified - Fetched incident sys_id matches:", shortDescription);
      });

    });