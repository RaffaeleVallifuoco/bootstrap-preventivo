console.log('Console test');

const backEndHourPrice = 20.50;
const frontEndHourPrice = 15.30;
const ProjectAnalysisHourPrice = 33.60;
const projectHours = 10;
const formElement = document.getElementById('form');
formElement.addEventListener('submit', jobSelectionFunction);

function jobSelectionFunction(event) {
    event.preventDefault()
    const nameElement = document.getElementById('name');
    const name = nameElement.value;
    console.log(name);
    const jobSelectionElement = document.getElementById('job-selection');
    const selectedJob = jobSelectionElement.value;
    console.log(selectedJob);
    return selectedJob;
}
    
