const { MarkovMachine } = require('./markov');

describe('markov machine', function () {
    test('accurate chain', function () {
        let mm = new MarkovMachine("the cat in the hat");
    
        expect(mm.chain).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} )
        // expect(mm.chain).toEqual({'the': ["cat", "hat"], cat: ["in"], in: ["the"], hat: [null]} )
    })
})