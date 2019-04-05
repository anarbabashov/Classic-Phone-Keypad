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
    clearTimeout(timeoutID)
    timeoutID = timeout()
    if (isFlagEnable && cashButtonValue === buttonId && currentData.added.length) {
      var returnValue = inputValue.slice('', inputValue.length - 1) + currentData.added[addedNumber]  
      if (currentData.added[addedNumber + 1]) {
            addedNumber = addedNumber + 1
        } else {
            addedNumber = 0
        }
        return (returnValue)
    } else {
        isFlagEnable = true
        cashButtonValue = buttonId
        return (inputValue + currentData.value)
    }
  }
}
