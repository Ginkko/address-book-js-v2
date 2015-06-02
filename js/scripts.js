function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state, addressType){
  this.street = street;
  this.city = city;
  this.state = state;
  this.addressType = addressType;
}

Address.prototype.fullAddress = function() {
  return this.addressType + "<br>" + this.street + " " + this.city + ", " + this.state;
}

var clearFields = function() {
  $("input.new-first-name").val("");
  $("input.new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}

var appendAddress = function() {
  $("#new-addresses").append('<div class="new-address">' +
  '<div class="form-group">' +
  '<label for="new-street">Street</label>' +
  '<input type="text" class="form-control new-street">' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="new-city">City</label>' +
  '<input type="text" class="form-control new-city">' +
  '</div>' +
  '<div class="form-group">' +
  '<label for="new-state">State</label>' +
  '<input type="text" class="form-control new-state">' +
  '</div>' +
  '<div class="form-group">' +
  '<select class="new-addressType">' +
  '<option value="Home">Home</option>' +
  '<option value="Work">Work</option>' +
  '<option value="Cabin">Spooky Cabin in the Woods</option>' +
  '</select>' +
  '</div>' +
  '</div>');
}

$(document).ready(function() {
  $("#add-address").click(function() {
    appendAddress();
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input.new-first-name").val();
    var inputtedLastName = $("input.new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedAddressType = $(this).find("select.new-addressType").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedAddressType );
      newContact.addresses.push(newAddress);

    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").fadeIn();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });


    clearFields();

    $("h2").hover(
      function() {
        $(this).append($("<span>This is a H2</span>"));
      },
      function() {
        $(this).find("span:last").remove();
      }
    );

  });
});
