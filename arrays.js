var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, twizzlers) {
    return [candyList, ...chocolateBars];
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, candyList) {
    chocolateBars.unshift(candyList);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars, candyList) {
    return[...chocolateBars, candyList];
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, candyList) {
    chocolateBars.push(candyList);
    return chocolateBars;
  }
  
  function accessElementInArray(chocolateBars, index) {
    return chocolateBars[0];
  }
  
  