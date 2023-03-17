const inputString = 'X+X';
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
  "XI": "11",
  "XII": "12",
  "XIII": "13",
  "XIV": "14",
  "XV": "15",
  "XVI": "16",
  "XVII": "17",
  "XVIII": "18",
  "XIX": "19",
  "XX": "20",
  "*": "*",
  "+": "+",
  "/": "/",
  "-": "-"
}; //алфавит

const mainRegex = /^([1-9]|10)\s*[\+\-\*\/]\s*([1-9]|10)$/;
//регулярка для проверки араб-символ-араб, операнды макс 10

function isArabicOrRoman(str) {
  if (/^[\d+\-*/.\s]+$/.test(str)) {
    return 'arabic';    
  } else if (/^[IVX+\-*/.\s]+$/i.test(str)) {
    return 'roman';
  } else {
    return 'mixed';
  }
} //на этом этапе код определяет невзирая на символы арабская или римская строка


  switch (isArabicOrRoman(inputString)){
      
    case 'arabic':
      if (mainRegex.test(inputString)) {
        const result = eval(inputString);
        console.log(Math.floor(result)); // допилить округление
      } else {
        console.log('error arabic more then 10');
      }
      break;
      
    case 'roman':
      
      function convertToArabic(string) {
        const splitString = string.split(/([-/*+])/); // Используем регулярное выражение, чтобы разделить строку по символам -/*+
        const convertedToArabic = splitString.map(char => {
          if (Object.keys(romanToArabicAlphabet).includes(char)) {
            return romanToArabicAlphabet[char];
          } else {
            return char;
          }
        }).join(''); 
        return convertedToArabic;
      };
      
      function convertToRomanian(string) {
        const splitString = inputString.split('');
        const convertedToRomanian = splitString.map(char => {
          if (Object.values(romanToArabicAlphabet).includes(char)) {
            return Object.keys(romanToArabicAlphabet).find(key => romanToArabicAlphabet[key] === char);
          } else {
            return char;
          }
        }).join('');
        return convertedToRomanian;
      }
      console.log(convertToRomanian(inputString));
      
      let convertedToArabic = convertToArabic(inputString);
      console.log(convertedToArabic+'конвертировали в арабские');

      function isMoreOrEqualZero(number) {
        if (mainRegex.test(number)) {
          const result = eval(number);
          return Math.floor(result);
          console.log(Math.floor(result)); //округление вниз
        } else {
          return ('error arabic more then 10');
        }
      };
      console.log(isMoreOrEqualZero(convertedToArabic)+'проверили меньше ли нуля');
      let result = (isMoreOrEqualZero(convertedToArabic));
      let resultInRomanian = convertToRomanian(result);
      console.log(resultInRomanian + 'обратно в римские');
      
      /*if (mainRegex.test(convertedToArabic)) {
        const result = eval(convertedToArabic);
        console.log(result); // допилить округление
      } else {
        console.log('error arabic more then 10');
      };     
      if ()*/
      break;
      
    default:
      console.log('error mixed numbers');
      
  }











