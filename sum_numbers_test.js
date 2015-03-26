
TestMyCode.run("testing hello world function", function(assert){
    var result = sum_numbers(9);
    // is the result as we expected?
    assert.equals([1+2+3+4+5+6+7+8+9].toString(),result.toString());
});