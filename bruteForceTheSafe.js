const numbers = document.getElementsByClassName('form__cipher-input');
const submitButton = document.getElementsByClassName('form__cipher-button form__cipher-button_submit')[0];

let maxTries = 99999;

for (let i = 99999; i >= 0; i--) {
  let stringTries = i.toString().split('');
  // console.log(stringTries);
  numbers[0].value = stringTries[0] || 0;
  numbers[1].value = stringTries[1] || 0;
  numbers[2].value = stringTries[2] || 0;
  numbers[3].value = stringTries[3] || 0;
  numbers[4].value = stringTries[4] || 0;
  submitButton.click();

  //console.log(`submitted number: ${numbers[0].value}${numbers[1].value}${numbers[2].value}${numbers[3].value}${numbers[4].value}`);
};
