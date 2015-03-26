TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("melissa");
    // is the result as we expected?
    assert.equals("Hello MELISSA",result);
});

