

TestMyCode.run("testing sum_numbers function", function(assert){
    var result = sum_numbers(6,9);
    // is the result as we expected?
    assert.equals(15, result;
});


    function numbers_sum(number)
{
    var numbers = [];
    for(var n = 1; n<=number ; n++)
    {
        numbers.push(n);

    }

    return eval(numbers.join('+'));

}


functon sum_numbers(total,n){

        var total = total+n;
        for (i = 0; i <=total.length; i++) {
            total += total[i];
            }
        return total;
    }

    function sum_numbers(amount) {
        var total = 0;
        for (i = 0; i < amount.length; ++i) {
             total += amount[i]; // add each element in an array to total
        }
        return total;// return sum of elements in array
}