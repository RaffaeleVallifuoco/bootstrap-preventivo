const projectHours = 10;
const backEndHourPrice = 20.50;
const frontEndHourPrice = 15.30;
const ProjectAnalysisHourPrice = 33.60;
const formElement = document.getElementById('form');
const priceBoldElement = document.getElementById('price-bold');
const priceNormalElement = document.getElementById('price-normal');
const jobSelectionElement = document.getElementById('job-selection');
const discountElement = document.getElementById('discount');
const discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
const discountSale = 0.25;

(() => {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            jobPricing(discountElement, jobSelectionElement, backEndHourPrice, frontEndHourPrice, ProjectAnalysisHourPrice, discountCode);
        }, false)
    })
})()

function jobPricing(discountElement, jobSelectionElement, backEndHourPrice, frontEndHourPrice, ProjectAnalysisHourPrice, discountCode) {
    
    let discount = discountElement.value;
    const selectedJob = jobSelectionElement.value;
    let jobPrice = 0;
    if (selectedJob === 'backend') {
        jobPrice = backEndHourPrice;
    } else if (selectedJob === 'frontend') {
        jobPrice = frontEndHourPrice;
    } else if (selectedJob === 'project') {
        jobPrice = ProjectAnalysisHourPrice;
    }

    let priceDiscount = 0;
    let find = discountCode.includes(discount);
    if (find) {
        jobPrice = jobPrice - (jobPrice * discountSale);
    } else if (discount == '') {
        
    } else if (!find) {
        alert('Il codice inserito non è valido');
        
    }

    const estimatePrice = Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(projectHours * jobPrice);
    let price = estimatePrice.split('.');
    priceBoldElement.innerHTML = price[0];
    priceNormalElement.innerHTML = (',' + price[1]);
}
