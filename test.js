QUnit.test('hello_uppercase', function(assert) {
    assert.equal(hello_uppercase("Sam"), 'Hello, SAM!');
});

QUnit.test('length', function(assert) {
    assert.equal(length("Sam"), 3);
});