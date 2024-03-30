console.log('Console test');

const backEndHourPrice = 20.50;
const frontEndHourPrice = 15.30;
const ProjectAnalysisHourPrice = 33.60;
const projectHours = 10;
const formElement = document.getElementById('form');
const priceBoldElement = document.getElementById ('price-bold');
const priceNormalElement = document.getElementById ('price-normal');
const discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const discountSale = 0.25;
const forms = document.querySelectorAll('.needs-validation');
formElement.addEventListener('submit', jobPricing);

function jobPricing(e) {
    e.preventDefault()

    const jobSelectionElement = document.getElementById('job-selection');
    const discountElement = document.getElementById('discount');
    let discount = discountElement.value;
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

    let find = discountCode.includes(discount);
    
    let priceDiscount = 0;

    console.log(find);
    if (find) {
        jobPrice = jobPrice - (jobPrice * discountSale);
    } else if (discount == '')  { 
        
    } else if (!find) {
        alert('Il codice inserito non è valido');

    }
    console.log(priceDiscount);

    const estimatePrice = Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(projectHours * jobPrice);

    console.log(estimatePrice);

    let price = estimatePrice.split('.');
    
    
    console.log(price);
    console.log(discountCode);
    console.log(discount);

  

    

   priceBoldElement.innerHTML = price[0];
   priceNormalElement.innerHTML = (',' + price[1]);

}

