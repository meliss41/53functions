Qunit.test("testing hello world function", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.equals("Hello world", result);
});
