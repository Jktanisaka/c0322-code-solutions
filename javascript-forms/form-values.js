var contact = document.querySelector('#contact-form');

contact.addEventListener('submit', formHandling);

function formHandling(event) {
  event.preventDefault();
  var formData = {};
  var elementsName = contact.elements.name.value;
  var elementsEmail = contact.elements.email.value;
  var elementsMessage = contact.elements.message.value;
  formData.name = elementsName;
  formData.email = elementsEmail;
  formData.message = elementsMessage;
  console.log(formData);
  contact.reset();
}
