const inputString = 'V+V';
const romanToArabicAlphabet = {
  "I": "1",
  "II": "2",
  "III": "3",
  "IV": "4",
  "V": "5",
  "VI": "6",
  "VII": "7",
  "VIII": "8",
  "IX": "9",
  "X": "10",
  "*": "*",
  "+": "+",
  "/": "/",
  "-": "-"
}; //alphabet
//const myRegex = /^[1-9]\s*[\+\-\*\/]\s*[1-10]$|^10\s*[\+\-\*\/]\s*[1-10]$|^[1-10]\s*[\+\-\*\/]\s*10$/;
const myRegex = /^([1-9]|10)\s*[\+\-\*\/]\s*([1-9]|10)$/;
//регулярка для проверки араб-символ-араб
function isArabicOrRoman(str) {
  if (/^[\d+\-*/.\s]+$/.test(str)) {
    return 'arabic';    
  } else if (/^[IVX+\-*/.\s]+$/i.test(str)) {
    return 'roman';
  } else {
    return 'mixed';
  }
} //на этом этапе код определяет невзирая на символы арабская или римская строка

//дальше надо написать блок кода, который будет учитывая работу функции isArabicOrRoman разделять вычисления, первое что надо сделать допилить арабские символы и проверить будет ли считать
//console.log(isArabicOrRoman(inputString));
  switch (isArabicOrRoman(inputString)){
    case 'arabic':
      if (myRegex.test(inputString)) {
        const result = eval(inputString);
        console.log(result); // Output: 14
        break;
      }
    case 'roman':
      function convertToArabic(inputString) {
        const splitString = inputString.split(' ');
        const convertedToArabic = splitString.map(char => {
          if (Object.keys(romanToArabicAlphabet).includes(char)) {
            return romanToArabicAlphabet[char];
          } else {
            return char;
          }
        }).join(' ');
  
        console.log(eval(convertedToArabic));
      }
      break;
    default:
      console.log('error');
      
  }









