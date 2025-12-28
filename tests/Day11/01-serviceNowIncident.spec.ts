import { test, expect } from "@playwright/test";

const baseUrl = "https://dev291487.service-now.com/api/now/table/";
const tableName = "incident";

// Basic Auth Credentials
const username = "admin";
const password = "B7h/Q7Owjc/B";
let auth = btoa(`${username}:${password}`);
let sys_id: any;
let responseBody;
let shortDescription:any

// test.describe.serial - Tests run in order and stop if one fails
test.describe.serial("ServiceNow API - POST and GET Operations", () => {
  test(`POST Request - Create Incident`, async ({ request }) => {
    // Method 1: Using Basic Authentication with username and password
    const response = await request.post(`${baseUrl}${tableName}`, {
      headers: {
        // Custom headers
        "Content-Type": "application/json",
        Accept: "application/json",
        // Basic Auth header (manually encoded)
        //'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}` //by direct username and password
        Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding
      },
      data: {
        short_description: `Email not working`,
        description: `User cannot send or receive emails`,
        comments: `Updated via REST API`,
        work_notes: `Checked mail server logs`,
        subcategory: `Email`,
        impact: `2`,
        urgency: `2`,
      },
    });

    console.log("Post Request Status:", response.status());
    console.log("Post request Status text", response.statusText);

    responseBody = await response.json();
    console.log("Post Request Response:", responseBody);
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe("Created");

    // Extracting sys_id from response
    sys_id = responseBody.result.sys_id;
    console.log("Created Incident sys_id:", sys_id);
    console.log("Incident Number:", responseBody.result.number);

    expect(response.ok()).toBeTruthy();
    expect(sys_id).toBeDefined();
  });

  test(`GET Request - Fetch Created Incident`, async ({ request }) => {
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
    console.log("Verified - Fetched incident sys_id matches:", sys_id);
  });

  test(`Put request-Update Incident Short Description`, async ({ request }) => {
    const response=await request.put(`${baseUrl}${tableName}/${sys_id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${auth}`, //by btoa method ,nothing but base64 encoding            }
      },
      data: {
        short_description: `Email is working now`,
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
