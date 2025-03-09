//array of status pages to loop through
const pagesArray = ["https://apistatus.chorus.co.nz", "https://status.blazemeter.com", "https://apistatuscomm.chorus.co.nz",  "https://status.1password.com", "https://www.contentfulstatus.com", "https://status.internetnz.nz"];

for (let i = 0; i < pagesArray.length; i++) {
    fetch(pagesArray[i] + "/api/v2/summary.json")//calls the Atlassian API associated with that status page
        .then((response) => response.json())//converts the response string to a JSON object
        .then((data) => {
            document.getElementById("statusDiv").innerHTML += `<div id="${data.page.id}"></div>`;    //creates a div to push all of the status information to
            let componentList = []; //empty array to populate with component names and status
            let completeList = `<ul class="statusList">`; //create the start of the HTML list which will eventually be pushed out to the div element created previously
            for (let i = 0; i < data.components.length; i++) {
                componentList.push({name:data.components[i].name, status:data.components[i].status})  //populates the componentList array
                }
            if(componentList != 0) {
                for (let i = 0; i < data.components.length; i++) {
                    completeList += `<li><div class="trafficLight ${componentList[i].status}"></div>&nbsp;&nbsp;${componentList[i].name}</li>`; //appends indicator circle by using the status a class which has been pre-loaded into the CSS
                }
                completeList += `</ul>`; //finishes the list, ready to write to the document
                //The below grabs the div created near the beginning of this fetch, then populates it with all of the data gathered above.
                document.getElementById(data.page.id).innerHTML = `<div class="statusHoverDefault"><p><div class="trafficLight ${data.status.indicator}"></div>&nbsp;&nbsp;<a href="${data.page.url}" target="_blank">${data.page.name} Status</a><br/>${data.status.description}</p><span class="statusHoverActive">${completeList}</span>`;
            }
        })
        .catch((error) => console.log('Error:', error));
}

