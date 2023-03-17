const string = 'I + I';//это то, что передаст тест в общую функцию
let inputString = string.replace(/\s/g, "");//костыль, который убирает из строки все пробелы, потому что я забыл об этом и тестил на примерах вида 1+1
const alphabetRomanArabic = new Map([
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
]);//алфавит

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
} //определяет арабская или римская строка (пробелы и математические операторы не в счет)

switch (isArabicOrRoman(inputString)){
//Main switch, разделяем вычисления в зависимости от типа строки, чтобы знать в каком виде давать результат
    case 'arabic':
      if (mainRegex.test(inputString)) {//тестирует через mainRegex
        const result = eval(inputString);
        console.log(Math.floor(result)); // округляет через floor
      } else {
        console.log('error arabic wrong main regex');
      }
      break;
      
    case 'roman':
      function romanToArabic(roman) {//функция принимает только числа и возвращает арабское написание
        if (roman < 1) return 0;//непонятная строка проверить  
        let num = 0;
        for (let [romanDigit, arabicValue] of alphabetRomanArabic) {
          while (roman.startsWith(romanDigit)) {
            num += arabicValue;
            roman = roman.slice(romanDigit.length);
          }
        }
        return num.toString();
      };// принимает только числа и возвращает арабское написание      
    
      function preparationToCalc(arr) {
        const processedArr = arr.map((str) => {
          if (/[\-+*/]/.test(str)) {
            return str;
          } else {
            return romanToArabic(str);
          }
        });
        const resultStr = processedArr.join('');
        return resultStr;
      }// принимает splitString и возвращает готовую к вычислениям строку

      function arabicToRoman(num) {
        if (num <= 0) {
          return 'римское число <= 0, это пустая строка';
        }
        let roman = '';
        for (let [romanDigit, arabicValue] of alphabetRomanArabic) {
          while (num >= arabicValue) {
            roman += romanDigit;
            num -= arabicValue;
          }
        }
        return roman;
        }// принимает арабское число и возвращает римское, если меньше или равно 0 - возвращает пустую строку

      function mainLogic (string) {
        const splitString = string.split(/([-/*+])/);//разбил на операнды
        let stringToCalc = preparationToCalc(splitString);//запишем подготовленную строку
        let result;//сюда запишем значение выражения
        if (mainRegex.test(stringToCalc)) {//тестирует через mainRegex
           const mathResult = eval(stringToCalc);//результат вычислений дробный
           result = Math.floor(mathResult); // финальный результат вычислений
        } else {
           return 'error romanian wrong main regex';
        }   
        return arabicToRoman(result);//пропустим через функцию обратной конвертации в римские
      }// собирает остальные функции 
      
      console.log(mainLogic(inputString));//выводим результат работы ветки
      
      /*function convertToArabic(string) {
        const splitString = string.split(/([-/*+])/); // Используем регулярное выражение, чтобы разделить строку по символам -/*+
        const convertedToArabic = splitString.map(char => {
          if (Object.keys(romanToArabicAlphabet).includes(char)) {
            return romanToArabicAlphabet[char];
          } else {
            return char;
          }
        }).join(''); 
        return convertedToArabic;
      };*/// старая функция преобразования римских в арабские      
      
      /*function convertToRomanian(string) {
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
      console.log(convertToRomanian(inputString));*///старая функция преобразования арабских в римские
      
      //let convertedToArabic = convertToArabic(inputString);
      //console.log(convertedToArabic+'конвертировали в арабские');

      /*function isMoreOrEqualZero(number) {
        if (mainRegex.test(number)) {
          const result = eval(number);
          return Math.floor(result);
          console.log(Math.floor(result)); //округление вниз
        } else {
          return ('error arabic more then 10');
        }
      };//функция проверяет меньше или равно нулю арабское число, если да - возвращает ноль, а так же вычисляет значение и возвращает результат округленный до целого*///    устаревшая функция, реализовал проверку внутри arabicToRoman
      
      /*console.log(isMoreOrEqualZero(convertedToArabic)+'проверили меньше ли нуля');
      let result = (isMoreOrEqualZero(convertedToArabic));
      let resultInRomanian = convertToRomanian(result);
      console.log(resultInRomanian + 'обратно в римские');*/
      
      /*if (mainRegex.test(convertedToArabic)) {
        const result = eval(convertedToArabic);
        console.log(result); // допилить округление
      } else {
        console.log('error arabic more then 10');
      };     
      if ()*/
      break;
      
    default://если смешанные и вычислять дальше нет смысла
      console.log('error mixed numbers');      
  }















