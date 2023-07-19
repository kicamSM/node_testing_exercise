const { MarkovMachine } = require('./markov');

describe('markov machine', function () {
    test('accurate chain with no "null" values', function () {
        let mm = new MarkovMachine("the cat in the hat");
    
        expect(mm.chain).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} ); 
        expect(mm.chain).not.toContain('null');
    })

    // test('another test', function() {
    //     let mm = new MarkovMachine("this is a random text and this fantastic document produces random words in this fantasic environment") 
        
    // })

    test('test random', function() { 
    expect(MarkovMachine.random(['is', 'is'])).toEqual('is');
    expect(MarkovMachine.random(['frank', 'ted', 'is', 'and'])).toEqual(expect.any(String));
    })

    test('test numberWords', function() {
        let mm = new MarkovMachine("this is a random text and this fantastic document produces random words in this fantasic environment") 
        // let mm = new MarkovMachine("the cat in the hat");
        let text = mm.makeText(4)
        let textWords = text.split(/[ \r\n]+/);
        expect([4]).toContain(textWords.length)
    })

    // test('cuts off at length', function () {
    //     let bigrams = ["the cat", "cat in", "in the", "the hat", "hat "];
    //     let mm = new MarkovMachine("the cat in the hat");
    //     let output = mm.makeText(2);
    
    //     let outputWords = output.split(/[ \r\n]+/);
    //     expect([1, 2]).toContain(outputWords.length);
    //   });


})



