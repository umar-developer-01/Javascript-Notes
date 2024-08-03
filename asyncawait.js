
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location ==== "Google"){
        resolve("Google Says Hi");
    } else {
        reject("We can only talk to Google");
    }
})
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`);
    })
}
makeRequest("Google").then(response => {
    console.log("Response Received");
    return processRequest(response);
}).then(processRequest => {
    console.log(processRequest)
}).catch(err => {
    console.log(err);
});


async function doWork() {
    try {
        const response = await makeRequest("Google");
        console.log("Response has received");
        const response2 = await processRequest(response);
        console.log("this is the response2", response2);
    } catch (err) {
        console.log("this is the error", err);
    }
}

doWork();




