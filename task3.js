function whatCentury(year) {
  // Вычисляем век: переводим строку в число, делим на 100 и округляем вверх
  const century = Math.ceil(parseInt(year, 10) / 100);
  
  // Исключения для 11, 12 и 13 веков (в английском они всегда с "th")
  if (century >= 11 && century <= 13) {
    return century + "th";
  }
  
  // Определяем окончание по последней цифре века
  const lastDigit = century % 10;
  switch (lastDigit) {
    case 1: return century + "st";
    case 2: return century + "nd";
    case 3: return century + "rd";
    default: return century + "th";
  }
}

// Проверка примеров из задания:
console.log(whatCentury("1999")); // "20th"
console.log(whatCentury("2011")); // "21st"
console.log(whatCentury("2154")); // "22nd"
console.log(whatCentury("2259")); // "23rd"
console.log(whatCentury("1124")); // "12th"
console.log(whatCentury("2000")); // "20th"