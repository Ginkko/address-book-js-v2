describe('Contact', function() {
  it('creates a new contact with the given specificatons', function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it('returns the full name', function(){
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.fullName()).to.equal("Rita Moreno");
  });
});

describe('Address', function() {
  it('creates a new address with the given specificatons', function() {
    var testAddress = new Address("123 Fake St", "Portland", "Oregon");
    expect(testAddress.street).to.equal("123 Fake St");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.eql("Oregon");
  });

  it('returns the full address', function(){
    var testAddress = new Address("123 Fake St", "Portland", "Oregon");
    expect(testAddress.fullAddress()).to.equal("123 Fake St Portland, Oregon");
  });
});
