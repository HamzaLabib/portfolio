// Smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Handle the videos play/pause
$(document).ready(function () {
    $(".modal").on("hidden.bs.modal", function (e) {
        let $video = $(this).find("video");
        $video.each(function () {
            this.pause();
        });
    });
});

// Handle sending emails using EmailJS
emailjs.init("8jzFCS0key9LHuTyB");
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // To prevent the default form submission
    
    // Send the email 
    emailjs.sendForm('service_czz26fg', 'template_o9hfiwf', this)
    .then(function() {
    console.log('SUCCESS!');
    alert('Your message has been sent successfully!');
    }, function(error) {
    console.log('FAILED...', error);
    alert('Something went wrong. Please try again.');
    });
});

// Handle quotes from an API
let timerToChangeQuotes = 8000;
let quotesArea = document.createElement('div');
let quotesParent = document.getElementById('header');
quotesParent.appendChild(quotesArea);
quotesArea.id = 'quote';
quotesArea.className = 'text-primary';
quotesArea.style.marginLeft = '10%';
quotesArea.style.marginRight = '10%';
quotesArea.style.marginTop = '50px';
quotesArea.style.marginBottom = 20 + 'px';
quotesArea.style.fontFamily = 'Courier New';
quotesArea.style.fontSize = '1.2rem';

async function quotesAPI(){
    const url = 'https://programming-quotesapi.vercel.app/api/random';
    const response = await fetch(url);
    const data = await response.json();
    
    if(!response.ok) throw new Error("Error fetching data");
    
    const quote = data.quote;
    const author = data.author;
    quotesArea.innerHTML = `"${quote}"<br>- ${author}`;
    console.log(`${quote} \n- ${author}`);
}
quotesAPI();
setInterval(quotesAPI, timerToChangeQuotes);
