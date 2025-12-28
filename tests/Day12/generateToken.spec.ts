import {  test, APIRequestContext} from "@playwright/test";



export let accessToken:any;
export let instanceUrl:any;

export async function generateSalesforceToken(request: APIRequestContext) {
    const response = await request.post(``, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        form: {
            grant_type: ``,
            client_id: ``,
            client_secret: ``,
            username: ``,
            password: ``
        }
    });
    
    const responseBody = await response.json();
    accessToken = responseBody.access_token;
    instanceUrl = responseBody.instance_url;
    
    console.log("Access Token:", accessToken);
    console.log("Instance URL:", instanceUrl);
    
    return { accessToken, instanceUrl };
}
