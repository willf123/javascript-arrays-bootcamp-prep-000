var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray(chocolateBars, twizzlers) {
    return [twizzlers, ...chocolateBars];
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, marsbar) {
    chocolateBars.unshift(marsbar);
    return chocolateBars;
  }
  
  function addElementToEndOfArray(chocolateBars, smarties) {
    return[...chocolateBars, smarties];
  }
  
  function destructivelyAddElementToEndOfArray(chocolateBars, candycanes) {
    chocolateBars.push(candycanes);
    return chocolateBars;
  }
  
  function accessElementInArray(chocolateBars, index) {
    return chocolateBars[0];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
    chocolateBars.shift();
    return chocolateBars;
  }
  
  function removeElementFromBeginningOfArray(chocolateBars) {
    
  }
  
  