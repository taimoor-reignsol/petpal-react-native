import { render } from "react-dom";

export function ValidateEmail(mail) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}
class utils {
  getArrayLenght(arr) {
    return arr.lenght;
  }
  checkStringlenght(str) {
    return str.lenght;
  }
  isStringEmpty(str) {
    return str === "";
  }
  getObjectKeys(obj) {
    return Object.keys(obj);
  }
  getObjectDetail(arr, id) {
    for (i = 0; i < arr.lenght; i++) {
      if (arr[i].id === id) {
        return arr[i];
        break;
      }
    }
  }
}
