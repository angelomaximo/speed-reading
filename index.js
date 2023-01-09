const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const input = document.getElementById('input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    
  const text = input.value;
  output.innerHTML = text;
  output2.innerHTML = formatting( blocking(text.split(" ")) );
})


function formatting(text) {
  //Split text into words inside an array.
  const words = text.split(" ");

  for (let word of words) {
    if(word === 'dog') words[words.indexOf(word)] = '🐕';
    if(word === 'ice-cream') words[words.indexOf(word)] = '🍦';

    // numbers 
    if(word === 'ten') words[words.indexOf(word)] = '10';
    if(word === 'eleven') words[words.indexOf(word)] = '11';
    if(word === 'fifteen') words[words.indexOf(word)] = '12';
    if(word === 'thirteen') words[words.indexOf(word)] = '13';
    if(word === 'fourteen') words[words.indexOf(word)] = '14';
    if(word === 'fifteen') words[words.indexOf(word)] = '15';
    if(word === 'sixteen') words[words.indexOf(word)] = '16';
    if(word === 'seventeen') words[words.indexOf(word)] = '17';
    if(word === 'eighteen') words[words.indexOf(word)] = '18'; 
    if(word === 'nineteen') words[words.indexOf(word)] = '19'; 
    if(word === 'twenty') words[words.indexOf(word)] = '20';
    if(word === 'twenty-one') words[words.indexOf(word)] = '21';
    if(word === 'twenty-two') words[words.indexOf(word)] = '22';
    if(word === 'twenty-three') words[words.indexOf(word)] = '23';
    if(word === 'twenty-four') words[words.indexOf(word)] = '24';
    if(word === 'twenty-five') words[words.indexOf(word)] = '25';
    if(word === 'twenty-six') words[words.indexOf(word)] = '26';
    if(word === 'twenty-seven') words[words.indexOf(word)] = '27';
    if(word === 'twenty-eight') words[words.indexOf(word)] = '28';
    if(word === 'twenty-nine') words[words.indexOf(word)] = '29';
    if(word === 'thirty') words[words.indexOf(word)] = '30';


    if(word === 'ninety') words[words.indexOf(word)] = '90'; 
  }

  return words.join(" ");
}


const txt = `

`


function blocking(arr) {
  let strArr = [];

  for(let i = 0; i < arr.length; i += 2) {
    strArr.push('<span class="block">[</span>', arr[i])
    strArr.push(arr[i + 1], '<span class="block">] </span>');
  }

  return strArr.join(" ");
}


// Split text into words inside an array.
// If word inside array match with icon, then 
 //arr[index] = matched icon