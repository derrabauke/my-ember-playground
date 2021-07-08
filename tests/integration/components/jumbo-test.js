import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster right to it', async function (assert) {
    await render(hbs`<Jumbo>Hey Tomster!</Jumbo>`);
    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hey Tomster!');
    assert.dom('.jumbo .tomster').exists();
  });
});
