var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, candyList) {
    return [candyList, ...chocolateBars];
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, candyList) {
    chocolateBars.unshift(candyList)
    return array;
  }
  
  
  