var createGatekeeper = require('../../lib/handlers/gatekeeper.js')

module.exports = testGatekeeper

if(module === require.main) {
  require('../index.js')(testGatekeeper)
}

function testGatekeeper(test) {
  test('test gatekeeper off', function(assert) {
    assert.end()
  })
}
