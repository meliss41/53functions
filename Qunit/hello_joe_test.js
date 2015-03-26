TestMyCode.run("testing hello world function", function(assert){
    var result = hello_joe("joe");
    // is the result as we expected?
    assert.equals("Hello", result);
});

TestMyCode.run("testing hello world function", function(assert){
    var result = hello_joe("bob");
    // is the result as we expected?
    assert.equals("Hello", result);
});

TestMyCode.run("testing hello world function", function(assert){
    var result = hello_joe("Nelisa");
    // is the result as we expected?
    assert.equals("Hello Nelisa", result);
});
