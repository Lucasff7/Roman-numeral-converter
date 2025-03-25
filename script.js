const button  = document.getElementById("convert-btn");
const form = document.getElementById("form");
const result = document.getElementById("output")

const convertNumber = (num) =>{
  const results = [];
  const romanNumbers = [
    ['M', 1000],['CM', 900],['D', 500],['CD', 400],['C', 100],['XC', 90],['L', 50],['XL', 40],['X', 10],['IX', 9],['V', 5],['IV', 4],['I', 1]];

    romanNumbers.forEach((each) => {
      while(num >= each[1]){
        results.push(each[0]);
        num -= each[1];
      }
    });
  return results.join('');
};

const checkInput = (strNumber) =>{
  let alertText ="";

  if (!strNumber || strNumber.match(/[e.]/g)) {
    alertText = 'Please enter a valid number.';
  } else if (strNumber < 1) {
    alertText = 'Please enter a number greater than or equal to 1.';
  } else if(strNumber > 3999){
    alertText = "Please enter a number less than or equal to 3999"
  } else{
    return true;
  }
  result.innerText = alertText;
  result.classList.add("alert");
  return false;
};

form.addEventListener('submit', e => {
  e.preventDefault();
  clearAll();
});

button.addEventListener('click', () => {
  clearAll();
});


const clearAll = ()=>{
  const strNumber = document.getElementById('number').value;
  const int = parseInt(strNumber, 10);

  result.classList.remove('hidden');

  result.innerText = '';
  result.classList.remove('alert');

  if (checkInput(strNumber, int)) {
    result.innerText = convertNumber(int);
  }
};