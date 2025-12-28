import axios from "axios"
import https from "https"

const endpoint="https://grajbb.atlassian.net/rest/api/3/issue"
const username ="govindaraj0508@gmail.com"
const apiKey = ""
const projectId="PLAYW"


export async function createJiraIssue(summary:string, description:string){

const issueRequestJson = {
    "fields":{
        "project":{
            "key":projectId
        },
         "summary":summary,
    "description":{
        "type": "doc",
        "version": 1,
        "content": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": description
                    }
                ]
            }
        ]
    },
    "issuetype":{
        "name":"Bug"
    }
    }

}

try {
    console.log("Sending request to Jira...");
    console.log("Request payload:", JSON.stringify(issueRequestJson, null, 2));
    
    const response = await axios.post(endpoint, issueRequestJson, {
        auth: {
            username: username,
            password: apiKey 
        },
        headers: {
            'Content-Type': 'application/json'
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    console.log(`Jira issue created successfully: ${response.data.key}`);
    return response.data;
    
} catch (error: any) {
    console.error("Failed to create Jira issue:");
    console.error("Status:", error.response?.status);
    console.error("Error message:", error.response?.data);
    console.error("Full error:", error.message);
    throw error;
}

}

//Send the POST request

