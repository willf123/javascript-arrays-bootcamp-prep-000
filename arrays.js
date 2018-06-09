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
    chocolateBars.unshift(candyList);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars, candyList) {
    return[chocolateBars]
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, candyList) {
    
  }
  
  
  
  