import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 'grand-old-house',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Spaghetti',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old house is beautiful.',
    });

    assert.equal(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.equal(rental.type, 'Community');

    rental.category = 'Townhouse';
    assert.equal(rental.type, 'Community');

    rental.category = 'Apartment';
    assert.equal(rental.type, 'Community');

    rental.category = 'Estate';
    assert.equal(rental.type, 'Standalone');
  });
});
