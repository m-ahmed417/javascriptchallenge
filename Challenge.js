//Question One
function isNumberPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
//Question Two
function convertDaysToAge(days) {
  const daysInYear = 365;
  const ageInYears = days / daysInYear;
  return ageInYears;
}

//Question Three
function getLargestNumber(a, b, c) {
  let largest = a;
  if (b > a) {
    largest = b;
  }
  if (c > b) {
    largest = c;
  }
  if (a > c) {
    largest = a;
  }
  return largest;
}

//Question Four
function getLastName(names) {
  const lastNumber = names.lastIndex0f(names) - 1;
  const lastName = names[lastNumber];
  return lastName;
}


//Question Five
function allNumbersPositive(numbers)
for (let index=0; index<numbers.length;,i++) {
    if (numbers[index] < 0) {
        return false;
    {
        return true;
    }
    }
}

