QUnit.test( "hello test", function( assert ) {
    var result = hello();
    // is the result as we expected?
    assert.equal("Hello world", result)
});

QUnit.test("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("melissa");
    // is the result as we expected?
    assert.equal("Hello MELISSA",result);
});

QUnit.test("testing hello world function", function(assert){
    var result = hello_joe("joe");
    // is the result as we expected?
    assert.equal("Hello", result);
});

QUnit.test("testing hello joe function", function(assert){
    var result = hello_joe("bob");
    // is the result as we expected?
    assert.equal("Hello", result);
});

QUnit.test("testing hello joe function", function(assert){
    var result = hello_joe("Nelisa");
    // is the result as we expected?
    assert.equal("Hello Nelisa", result);
});

QUnit.test("testing number_list function", function(assert){
    var result = number_list(6);
    // is the result as we expected?
    assert.equal(result.toString(), [1,2,3,4,5,6].toString());
});



QUnit.test("testing hello world function", function(assert){
    var result = sum_numbers(9);
    // is the result as we expected?
    assert.equal([1+2+3+4+5+6+7+8+9].toString(),result.toString());
});