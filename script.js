
/* SMOOTH SCROLLING */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* TABLE BOOKING FORM */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;
  const guests = document.getElementById("guests").value;

  const message =
    "Hello Royal Cafe! I want to book a table.\n" +
    "Name: " + name + "\n" +
    "Date: " + date + "\n" +
    "Time: " + time + "\n" +
    "Guests: " + guests;

  const whatsappURL =
    "https://wa.me/919999999999?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

});
