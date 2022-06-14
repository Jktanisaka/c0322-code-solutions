function graduate(credential) {
  return function name(fullName) {
    return fullName + ',' + ' ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Jonathan Tanisaka'));
console.log(lawSchool('Jonathan Tanisaka'));
