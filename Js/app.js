//console.log('CONSOLE TEST');

// global var

const projectHours = 10;
const backEndHourPrice = 20.50;
const frontEndHourPrice = 15.30;
const ProjectAnalysisHourPrice = 33.60;
const formElement = document.getElementById('form');
const priceBoldElement = document.getElementById('price-bold');
const priceNormalElement = document.getElementById('price-normal');
const jobSelectionElement = document.getElementById('job-selection');
const discountElement = document.getElementById('discount');
const feedbackMessageElement = document.getElementById('feedback-message');
const feedbackElement = document.getElementById ('feedback');

const discountSale = 0.25;
const discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

// main validation functiom

const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            jobPricing(discountElement, jobSelectionElement, backEndHourPrice, frontEndHourPrice, ProjectAnalysisHourPrice, discountCode);
        }
        form.classList.add('was-validated');
    }, false)
})


// job price calculator 

function jobPricing(discountElement, jobSelectionElement, backEndHourPrice, frontEndHourPrice, ProjectAnalysisHourPrice, discountCode) {

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
        jobPrice = ProjectAnalysisHourPrice;
    }

    let find = discountCode.includes(discount);
    if (find) {
        discountElement.setAttribute('style', 'color:green; border-color:green;');
        feedbackMessageElement.setAttribute('style', 'color:green;')
        discountElement.style.backgroundImage = "url('./img/check.jpg')";
        feedbackMessageElement.innerHTML = ('Codice valido')
        jobPrice = jobPrice - (jobPrice * discountSale);

    } else if (discount == '') {

    } else if (!find) {
        discountElement.setAttribute('style', 'color:red; border-color:red;');
        feedbackMessageElement.setAttribute ('style', 'color:red;' )
        discountElement.style.backgroundImage = "url('./img/alert_round.png')";
        feedbackMessageElement.innerHTML = ('Il codice selezionato non è valido')
    }

    //console.log('prezzo : ', jobPrice);

    const estimatePrice = Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(projectHours * jobPrice);
    let price = estimatePrice.split('.');
    //console.log('prezzo : ' , price);
    priceBoldElement.innerHTML = price[0];
    priceNormalElement.innerHTML = (',' + price[1]);
}
