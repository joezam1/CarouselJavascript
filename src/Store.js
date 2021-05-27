
var initialState = {
  count: 99  
};


var observersCallbackArray = [];

//tested
var counter = 1;
function addObserverToList(sectionName,callbackFunction){

  console.log('MYSTORE-addObserverToList-addCallback:',counter);
  console.log('MYSTORE-addObserverToList-sectionName:',sectionName);
  counter++;
    var callbackObj = {sectionName: sectionName, call:callbackFunction}
    const found = observersCallbackArray.find(element => element.sectionName === callbackObj.sectionName);
    if(found === null || found === undefined){
      observersCallbackArray.push(callbackObj);
    }
    return observersCallbackArray.length;
}

//tested
function notifyAllObservers(){
  console.log('notifyAllObservers-observersCallbackArray',observersCallbackArray);
  for(var a =0; a< observersCallbackArray.length; a++){
    observersCallbackArray[a].call(initialState);
  }
  return observersCallbackArray.length;
}

function setInitialState(stateObj){
  initialState = stateObj;
}
function getInitialState(){
  return initialState;
}
//test
function reducer(state, action) {
  var objInformation = null;
  const aType = action.type;
  switch (aType) {
    case 'reset':
      objInformation = initialState;
      break;
    case 'increment':
      var objInfo = { count: initialState.count + action.payload};
      initialState = objInfo;
      objInformation = objInfo
      break;

    case 'decrement':
      var objInfo1 = { count: initialState.count - action.payload };
      initialState = objInfo1;
      objInformation = objInfo1;
      break;
    default:      
      objInformation = state;
  }

  notifyAllObservers();
  return objInformation;

}

  var service = {
    addObserverToList:addObserverToList,
    notifyAllObservers:notifyAllObservers,
    setInitialState:setInitialState,
    getInitialState:getInitialState,
    reducer : reducer,
    initialState:initialState
  }

  export default service;