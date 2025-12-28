import { test,expect } from "@playwright/test";
import RandomDataGenerator from "../utils/randomDataGenerator";
import { generateSalesforceToken } from "./generateToken.spec";

const sharedLeadData = RandomDataGenerator.generateRandomLead();
let pathparam= "/services/data/v65.0/sobjects/Lead/";
let leadId: any;
let accessToken: string;
let instanceUrl: string;

test.describe.serial("SalesForce Lead Activity - Create and Verify Lead", () => {
    
    // Generating my sales force token  under before all tests
    test.beforeAll(async ({ request }) => {
        const tokenData = await generateSalesforceToken(request);
        accessToken = tokenData.accessToken;
        instanceUrl = tokenData.instanceUrl;
        console.log("Token generated successfully in beforeAll");
    });
    
    test(`Create Lead`, async ({ request }) => {
        const response = await request.post(`${instanceUrl}${pathparam}`, {
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
            },
        data: {
            LastName: sharedLeadData.lastName,
            Company: sharedLeadData.companyName,
            Email: sharedLeadData.email,
            Phone: sharedLeadData.phoneNumber
        },
    });
        
        console.log("Create Lead Request Status:", response.status());
        console.log("Create Lead Request Status text", response.statusText());
        expect(response.status()).toBe(201);
        expect(response.statusText()).toBe("Created");

        const responseBody = await response.json();
        console.log("Create Lead Request Response:", responseBody);

        leadId = responseBody.id;
        console.log("Created Lead ID:", leadId);
    
        expect(response.ok()).toBeTruthy();
        expect(leadId).toBeDefined();
    });

    //Ftech created lead.
    test(`Get Created Lead`, async ({ request }) => {
        const response = await request.get(`${instanceUrl}${pathparam}${leadId}`, {
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
            },
        });

        console.log("Get Lead Request Status:", response.status());
        console.log("Get Lead Request Status text", response.statusText()); 
        const responseBody = await response.json();
        console.log("Get Lead Request Response:", responseBody);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");

        // Verify the fetched lead details match the created one
        expect(responseBody.LastName).toBe(sharedLeadData.lastName);
        expect(responseBody.Company).toBe(sharedLeadData.companyName);
        expect(responseBody.Email).toBe(sharedLeadData.email);
        expect(responseBody.Phone).toBe(sharedLeadData.phoneNumber);

        console.log("Verified - Fetched lead details match the created lead");
    });

    //update lead 

    test(`Update Lead`, async ({ request }) => {
        const updatedLastName = sharedLeadData.lastName + "_Updated";
        const response = await request.patch(`${instanceUrl}${pathparam}${leadId}`, {
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
            },
        data: {
            LastName: updatedLastName
        },
    });

        console.log("Update Lead Request Status:", response.status());
        console.log("Update Lead Request Status text", response.statusText());
    
        expect(response.status()).toBe(204);    
        expect(response.statusText()).toBe("No Content");

        console.log("Lead updated successfully with new LastName:", updatedLastName);

        // Fetch the lead again to verify the update name
        const fetchResponse = await request.get(`${instanceUrl}${pathparam}${leadId}`, {
            headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
            },
        });

        const fetchResponseBody = await fetchResponse.json();
        expect(fetchResponseBody.LastName).toBe(updatedLastName);
        console.log("Verified - Lead LastName updated correctly to:", fetchResponseBody.LastName);
    });

    test.afterAll(async () => {
        console.log("All tests completed for SalesForce Lead Activity.");
    });

});



