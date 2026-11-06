
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;
  const guests = document.getElementById("guests").value;

  const message = `Hello Royal Cafe! I want to book a table.
Name: ${name}
Date: ${date}
Time: ${time}
Guests: ${guests}`;

  const whatsappURL = "https://wa.me/919999999999?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
