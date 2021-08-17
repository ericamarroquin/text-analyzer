// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0 || word.trim().length === 0));
}


// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function numberOfWordRepeats(text) {
  let count = [];
  let countedWords = [];
  const wordArray = text.toLowerCase().split(" ");
  wordArray.forEach(function(word) {
    let num = numberOfOccurrencesInText(word, text);
    if (!countedWords.includes(word)) {
      countedWords.push(word);
      count.push(num + " " + word);
    }
  })
  let initialOutput = count.sort();
  let finalOutput = initialOutput.reverse();
  let finalOutputArray = (finalOutput[0] + " " + finalOutput[1] + " " + finalOutput[2]);
  let strings = finalOutputArray.split(" ");

  console.log(strings);
  console.log(finalOutputArray);
  return strings
} 


// function numberOfWordRepeats(text) {
//   let count = [];
//   let countedWords = [];
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(word) {
//     let num = numberOfOccurrencesInText(word, text);
//     if (!countedWords.includes(word)) {
//       count.push(num);
//       countedWords.push(word);
//     }
//   })

//   console.log(count);
//   console.log(countedWords)
// }


// function numberOfWordRepeats(text) {
//   let count = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(word, index) {
//     if (word === wordArray[index+1]) {
//       count++
//     }
//   });
//   return count;
// }

function 
// UI Logic

function boldPassage(word,text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word,passage));
  });
});