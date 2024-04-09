//console.log('CONSOLE TEST');

// global var

const jobs = {
    projectHours : '10',
    backEndHourPrice : '20.50',
    frontEndHourPrice : '15.30',
    projectAnalysisHourPrice : '33.60'
};
const formElement = document.getElementById('form');
const priceBoldElement = document.getElementById('price-bold');
const priceNormalElement = document.getElementById('price-normal');
const jobSelectionElement = document.getElementById('job-selection');
const discountElement = document.getElementById('discount');
const feedbackMessageElement = document.getElementById('feedback-message');
const discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

// main validation functiom

const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            jobPricing(discountElement, jobSelectionElement, jobs.backEndHourPrice, jobs.frontEndHourPrice, jobs.projectAnalysisHourPrice, discountCode, jobs.projectHours);
        }
        form.classList.add('was-validated');
    }, false)
})


// job price calculator 

function jobPricing(discountElement, jobSelectionElement, backEndHourPrice, frontEndHourPrice, projectAnalysisHourPrice, discountCode, projectHours) {

    let discount = discountElement.value;

    //console.log('codice sconto :  ' ,discount);

    const selectedJob = jobSelectionElement.value;

    //console.log('tipo lavoro : ' , selectedJob);

    let jobPrice = 0;
    if (selectedJob === 'backend') {
        jobPrice = backEndHourPrice;
    } else if (selectedJob === 'frontend') {
        jobPrice = frontEndHourPrice;
    } else if (selectedJob === 'project') {
        jobPrice = projectAnalysisHourPrice;
    }

    let find = discountCode.includes(discount);
    if (find) {
        validFeedback (discountElement , feedbackMessageElement);
        jobPrice = jobPrice - (jobPrice * discountSale);

    } else if (discount == '') {

    } else if (!find) {
        invalidFeeback (discountElement , feedbackMessageElement);
    }

    //console.log('prezzo : ', jobPrice);

    const estimatePrice = Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(projectHours * jobPrice);
    let price = estimatePrice.split('.');
    //console.log('prezzo : ' , price);
    priceBoldElement.innerHTML = price[0];
    priceNormalElement.innerHTML = (',' + price[1]);
}

// Personal validation feedback

function validFeedback (domOuterElement , domInnerElement) {
    domOuterElement.setAttribute('style', 'color:green; border-color:green;');
    domOuterElement.style.backgroundImage = "url('./img/check.png')";
    domInnerElement.setAttribute('style', 'color:green;')
    domInnerElement.innerHTML = ('Codice valido')
}

function invalidFeeback (domOuterElement , domInnerElement) {
    domOuterElement.setAttribute('style', 'color:red; border-color:red;');
    domOuterElement.style.backgroundImage = "url('./img/alert_round.png')";
    domInnerElement.setAttribute('style', 'color:red;')
    domInnerElement.innerHTML = ('Il codice selezionato non è valido')
}
