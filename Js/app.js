console.log('Console test');

const backEndHourPrice = 20.50;
const frontEndHourPrice = 15.30;
const ProjectAnalysisHourPrice = 33.60;
const projectHours = 10;
const formElement = document.getElementById('form');
const priceBoldElement = document.getElementById ('price-bold');
const priceNormalElement = document.getElementById ('price-normal');
formElement.addEventListener('submit', jobPricing);

function jobPricing(e) {
    e.preventDefault()
    const jobSelectionElement = document.getElementById('job-selection');
    const selectedJob = jobSelectionElement.value;

    console.log(selectedJob);
    
    let jobPrice = 0;
    if (selectedJob === 'backend') {
        jobPrice = 20.50;
    } else if (selectedJob === 'frontend') {
        jobPrice = 15.30;
    } else if (selectedJob === 'project') {
        jobPrice = 33.60;
    }

    console.log('price', jobPrice);

    const estimatePrice = Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(projectHours * jobPrice);

    console.log(estimatePrice);

    const price = estimatePrice.split();
    
    console.log(price);
    

   priceBoldElement.innerHTML = price[0];
   priceNormalElement.innerHTML = price[1];

}

