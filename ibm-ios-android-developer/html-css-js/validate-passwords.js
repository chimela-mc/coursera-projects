const samplePasswords = [
  "Password123!",
  "letmein",
  "Qwerty@2021",
  "12345678",
  "Admin#2022",
  "welcome",
  "StrongPass!9",
  "password",
];

function validatePassword(password) {
  const minLength = 8;
  const maxLength = 20;
  const regex = /[A-Za-z0-9]/.test(password);
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  samplePasswords.forEach((string) => {
    if (string.length < minLength || string.length > maxLength) {
      console.log(`"${string}" is invalid: Length should be between ${minLength} and ${maxLength} characters.`);
    }else if (regex === false) {
      console.log(`"${string}" is invalid: Must contain at least one letter and one number.`);
    } else if (specialCharRegex === true) {
      console.log(`"${string}" is invalid: Must contain only letters and numbers.`);
    } else {
      console.log(`"${string}" is valid.`);
    }

  })
}

validatePassword(samplePasswords);