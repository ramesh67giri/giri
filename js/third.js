$('#contactForm').on('submit', function (event) {
  event.preventDefault();
  var formData = {
    name: $('#name').val(),
    email: $('#email').val(),
    subject: $('#subject').val(),
    message: $('#message').val()
  };

  $.ajax({
    type: 'POST',
    url: '/send',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function (response) {
      alert('Message sent successfully');
    },
    error: function (error) {
      alert('Error sending message');
    }
  });
});