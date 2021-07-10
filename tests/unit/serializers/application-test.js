import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('rental', {
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

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
