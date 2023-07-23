const STR = "Hello World";
let letter = "l";
function deleteLetter(letter, STR) {
	let newString = "";
	for (let i = 0; i < STR.length; i++) {
		if (STR[i] !== letter) {
			newString += STR[i];
		}
	}
	return newString;
}
console.log(deleteLetter(letter, STR));
// Second exercise. 
let arr = [4, 3, 1, 2];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}
console.log(insertionSort(arr));