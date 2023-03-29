// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = 'Nelson';
console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Connor';
console.log(`The navigator's name is ${hacker2}.`)


if(hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) { // driver
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else { // navigator
  console.log(`It seems that the navigator has the longest name, it has   ${hacker2.length} characters.`)
}

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let hacker1Spaced='';
for ( let i=0; i < hacker1.length; i++) {
  hacker1Spaced += hacker1[i]+' ';
}
console.log(hacker1Spaced.toUpperCase());

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let string = '';
for(let i = hacker1.length - 1; i >= 0; i--) {
    string += hacker1[i];
}
console.log(string);

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?


if(hacker1.localeCompare(hacker2) == -1) {
  console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}


// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.


let longText= `Lorem ipsum dolor sit amet,    consectetur adipiscing elit. Nunc aliquet pellentesque dolor, eget varius turpis egestas non. Sed sed urna urna. Morbi posuere, ipsum eu tempus gravida, nibh dui imperdiet sapien, sed dignissim libero tortor sit amet neque. Maecenas tempus massa ut lacus ornare porttitor. Pellentesque egestas tincidunt accumsan. Etiam rutrum a ante ut suscipit. Integer imperdiet sit amet metus sed elementum. Pellentesque dictum sapien id purus lobortis, sit amet gravida nibh hendrerit. Etiam imperdiet ex a lorem commodo lacinia. Morbi et est quis diam viverra facilisis id a erat. Aliquam vitae odio nisl. Phasellus condimentum ex id cursus placerat. Maecenas faucibus maximus metus, id laoreet nisl scelerisque tempor. Ut tempus libero eget vehicula volutpat. Aliquam imperdiet ac arcu vel pellentesque. Sed vitae purus consectetur, rutrum nulla accumsan, consequat est. Aliquam ut magna ac lectus aliquam mattis. Nullam mi purus, tincidunt at nisi a, convallis posuere tellus. Mauris euismod vulputate ex. Pellentesque sodales euismod felis, et sagittis augue condimentum in. Donec lacinia vel velit ut sagittis. Maecenas in elit cursus, ultricies lectus sed, iaculis magna. Cras nec ultricies nunc. Praesent ut laoreet ligula, ut fermentum massa. Vivamus a nunc ornare turpis consequat congue. Maecenas erat nibh, porttitor in lacus pulvinar, feugiat condimentum purus. Nunc sagittis massa lorem, nec luctus risus finibus nec. Maecenas sodales ut quam id tempus. Aenean et iaculis quam. Duis vel suscipit nulla. Suspendisse bibendum diam in elit vehicula, a eleifend quam ultrices. Nulla vitae porttitor tortor, ut tristique nulla. Mauris id lectus lacinia turpis consequat vehicula eu vel dui. Pellentesque aliquam dapibus gravida. Duis mauris lorem, mollis in feugiat vel,      cursus sed lectus. Sed sit amet dolor metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin venenatis pulvinar pellentesque. Nam consectetur nulla et elit condimentum, eu elementum metus mattis. Suspendisse consectetur porttitor sodales.`

wordCount = 0;
countET = 0;
for(let i=0; i<longText.length; i++) {
  if(longText[i] === ' ' && longText[i-1] !== ' '){
    wordCount +=1;
  }
  if(longText[i-1] === ' ' && longText[i] === 'e' && longText[i+1] === 't' && longText[i+2] === ' ') {
    countET +=1;
  }
}


// bonus 2 


let phrase2 = 'Amor, Roma';

let phraseNoSpecialChars = '';
for(let i=0;i<=phrase2.length-1;i++){
  if(phrase2[i].match(/[a-z]/i)){
    phraseNoSpecialChars += phrase2[i].toLowerCase();
  }
}

let phraseBackward = ''
for(let i=phraseNoSpecialChars.length-1;i>=0;i--){
  phraseBackward += phraseNoSpecialChars[i];
}

if(phraseNoSpecialChars === phraseBackward) {
  console.log('is a palidrome')
}
