/** Textual markov chain generator */



class MarkovMachine {
  
  /** build markov machine; read in text.*/


  constructor(text) {
    // console.log('constructor is running')
    let words = text.split(/[ \r\n]+/);
    // console.log('words', words)
    this.words = words.filter(c => c !== "");
    console.log('this.words', this.words)
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO

    let chain = {}

    for(let i=0; i < this.words.length; i++) {
      if(!chain.hasOwnProperty(this.words[i])) {
        // does string exist in chain. If not a key then creates empty array 
        chain[this.words[i]] = []
        // console.log(typeof(this.words[i]))
      }
  
      chain[this.words[i]].push(this.words[i + 1]  || null)
      
  }
  // console.log(typeof(chain['the']))
  // console.log(chain)
  this.chain = chain
  this.makeText()
    }
  


  /** return random text from chains */

  static random(array) {
    return array[Math.floor(Math.random() * (array.length))]
  }

  makeText(numWords = 100) {
    // TODO 
      let newText = []
      let keys = Object.keys(this.chain)
      // console.log('keys:', keys)
      let key = MarkovMachine.random(keys);

      while(newText.length < numWords && key !== null) {
        newText.push(key)
        key = MarkovMachine.random(this.chain[key])
        // console.log('key', key)
      }
    
        let compiledText = newText.join(' ');

        return compiledText
      }
    
}

// }


module.exports = { MarkovMachine }; 

// let mm = new MarkovMachine("the, cat, in the hat");

// let mm1 = new MarkovMachine("Not on a train! Not in a tree!");
// let mm2 = new MarkovMachine("I would not like them Here or there I would not like them Anywhere I do not like Green eggs and ham I do not like them Sam-I-am");
// let mm3 = new MarkovMachine("I do not like them with a fox");


// notes 

   // let valuePairs = []
    // let arrayKeys = [] 
    // let values = []

  //   for(const string of this.words) {
  //     if(!chain.hasOwnProperty(string)) {
  //       // does string exist in chain. If not a key then creates empty array 
  //       chain[string] = []
  //     }
  //     chain[string].push(string)
  // }

  
    // for(let i=0; i < this.words.length; i++) {
    //   let values = []
    //   let key = this.words[i]
    //   let value = 
    //   // chain[key] = this.words[i+1]
      
    // }


    // console.log(chain)


    
      // console.log('randomKey', randomKey)
      // let values = this.chain[startKey]
      // let randomValue = values[Math.floor(Math.random() * (values.length))]
      // console.log('values', values)
      // console.log('randomValue', randomValue)

      // newText.push(startKey)


    

      // let randomValue;

      // for(let i=0; i < numWords; i++) {
      //   console.log('for loop is running')
      //   let keys = Object.keys(this.chain)
      //   // console.log('keys:', keys)
      //   let startKey = keys[Math.floor(Math.random() * (keys.length))]
      //   let values = this.chain[startKey]
      //   let randomValue = values[Math.floor(Math.random() * (values.length))]
      //   console.log(randomValue)


      //   if(i === 0){
      //   newText.push(startKey)
      //   }
        
        // if(randomValue !== null && i > 0){
        //   newText.push(randomValue)
        //   if(randomValue) {
        //     let newKey = randomValue
        //     let values = this.chain[newKey]
        //     let randomValue = values[Math.floor(Math.random() * (values.length))]
        //   }
        //   }

         // let startKey = keys[Math.floor(Math.random() * (keys.length))]