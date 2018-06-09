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
    chocolateBars.push(candyList);
    return chocolateBars;
  }
  
  function accessElementInArray(chocolateBars, index) {
    return chocolateBars[0];
  }
  
  