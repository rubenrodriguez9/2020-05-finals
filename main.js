const makeRunOn = function(paragraph){
  let result = '';
  for(let i = 0;i < paragraph.length;i++){
    if(paragraph[i] === '.' && i !== paragraph.length -1){
      result += ','
    }else result += paragraph[i]
  }
  return result 
}

const totalScore = function(arr, num = 1, bonus){
  result = 0
  for(const point of arr){
    result += point.score
  }
  if(num !== 1){
   result = result * num
  }
  if(bonus){
    result+= bonus
  }
  return result 
}

const nightOwls = function(arr){
  let result = []
for(const person of arr){
  if(person.localTime >= 100 && person.localTime <= 400 && person.asleep === false){
    result.push(person)
  }

}
return result
}

const getToBed = function(arr){
  let result = [];

  for(const person of arr){
      result.push(person)
  }
  
  for(const human of result){
    if(human.localTime >=100 && human.localTime <=400){
      human.asleep === true
    }
    
    return result
  }


}

const findIndices = function(arr, callback){

  callback = function(item){
    result = []
    for(let i = 0;i < item.length;i++){
      if(item){
        result.push(i)
      }
    }
    return result
  }

  return arr.filter(callback)


}

const Faqtory = function(){

  let obj ={

      length: 0,
      'questions': [],

    addQuestion: function(){
      let question ={
        answered: false
      }
      
    }

  }
  return obj
}






if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
