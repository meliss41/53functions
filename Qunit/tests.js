QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("hello world", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.deepEqual("Hello world", "Passed!");
});

