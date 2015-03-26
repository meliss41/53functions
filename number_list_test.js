TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(6);
    // is the result as we expected?
    assert.equals(result.toString(), [1,2,3,4,5,6].toString());
});

