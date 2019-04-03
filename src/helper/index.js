export function calcInputDisplay() {
  var isFlagEnable;
  var cashButtonValue;
  var addedNumber = 0;
  var timeoutID;
  var timeout =  () => (setTimeout(()=>{
      isFlagEnable = undefined;
      cashButtonValue = undefined;
      addedNumber = 0;
  }, 600))

  return ({buttonId, currentData, inputValue}) => {

    console.log(currentData.added);
    clearTimeout(timeoutID)
    timeoutID = timeout()
    if (isFlagEnable && cashButtonValue === buttonId && currentData.added.length) {
        if (currentData.added[addedNumber + 1]) {
            addedNumber = addedNumber + 1
            console.log(addedNumber);
        } else {
            addedNumber = 0
        }
        return (inputValue.slice('', inputValue.length - 1) + currentData.added[addedNumber])
    } else {
        isFlagEnable = true
        cashButtonValue = buttonId
        return (inputValue + currentData.value)
    }
  }
}
