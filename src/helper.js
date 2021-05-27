//For the library we only use PURE functions

//tested
var isValid = function(input){
    if(input !=undefined && input != null && input !=''){
        return true;
    }
    return false;
}

//tested
function getDirectionFactor(direction){
    var factor = 1;
    if(direction ==='left'){
        factor = -1;
    }
    else if(direction === 'right'){
        factor = +1;
    }
    return factor;
}

//tested
function getNextElementCurrentPositionLeftByDirection(imageElement1Current,imageElement2Next, direction){
    var  movingPointImage2 = 0;
    if(direction ==='left'){
        movingPointImage2 = imageElement1Current.offsetLeft + imageElement1Current.clientWidth;
    }
    if(direction ==='right'){
        movingPointImage2 = imageElement1Current.offsetLeft - imageElement2Next.clientWidth;
    }
    return movingPointImage2;
}

//tested
function getNextElementInitialPositionLeftByDirection(imageElement1Current,imageElement2Next, direction){
    var image2PositionLeft = 0;
    if(direction === 'left'){
        image2PositionLeft = imageElement1Current.offsetLeft + imageElement1Current.clientWidth;
    } 
    if(direction === 'right'){
        image2PositionLeft =imageElement1Current.offsetLeft - imageElement2Next.clientWidth 
    }
    return image2PositionLeft;
}

//tested
function getWindowWidthByDirection(direction){
    var directionFactor = getDirectionFactor(direction);
    var deviceWidth = (window.innerWidth || document.documentElement.clientWidth);
    var deviceWidthByDirection = deviceWidth * ( directionFactor );
    return deviceWidthByDirection;
}

//tested
function getNextArrayElementIndexByDirection(direction, currentIndex, totalElementsCount){   
    var selectedIndex = 0;
    if(currentIndex >= totalElementsCount || currentIndex <0){
        return selectedIndex;
    }
    if(direction ==='left'){
        selectedIndex = (currentIndex === totalElementsCount-1)? 0: currentIndex + 1; 
    }
    else if(direction === 'right'){
        selectedIndex = (currentIndex === 0)? totalElementsCount-1 : currentIndex - 1;
    }
    return selectedIndex;
}


//tested
function insertImagesInTargetElement(targetElement, imagesLocationFileArray){
    var clone = null;
    if(isValid(targetElement)){
        // Create a copy of it
        clone = targetElement.cloneNode(true);
        for(var a = 0; a<imagesLocationFileArray.length ; a++){
            var imageElement = document.createElement('IMG');
            imageElement.src = imagesLocationFileArray[a];
            imageElement.id = 'image_'+a;
            imageElement.classList.add('sliding-image');
            var selectedClass =(a === 0 ) ? 'display' : 'hide';
            imageElement.classList.add(selectedClass);
            clone.appendChild(imageElement);
        }
    }
    return clone;
}

//tested
function getNextArrayElementByDirection(direction, className, htmlElementsArray){
   
    for(var a = 0; a < htmlElementsArray.length; a++){
        if(htmlElementsArray[a].classList.contains(className)){
            var next =getNextArrayElementIndexByDirection(direction ,a ,htmlElementsArray.length);           
            return htmlElementsArray[next]
        }
    }
    return null;
}

//tested
function hasCurrentElementReachedEndingPosition(direction, elementCurrent){
    var deviceWidthByDirection = getWindowWidthByDirection(direction);
    var elementCurrentLeft = elementCurrent.offsetLeft;
    if(direction === 'left' && elementCurrentLeft<= deviceWidthByDirection){
        return true;        
    }
    if(direction === 'right' && elementCurrentLeft >= deviceWidthByDirection){
        return true;        
    }
    return false;
}

//tested
function hasNextElementReachedEndingPosition(direction, elementNext, targetLocationPoint){    
    var elementNextLeft = elementNext.offsetLeft;
    if(direction === 'left' && elementNextLeft <=targetLocationPoint){
        return true;
    }
    if(direction === 'right' && elementNextLeft>=targetLocationPoint){
        return true;
    }
    return false;
}




window.helper ={
    isValid,
    getDirectionFactor,
    getNextElementCurrentPositionLeftByDirection,
    getNextElementInitialPositionLeftByDirection,
    getWindowWidthByDirection,
    getNextArrayElementIndexByDirection,
    insertImagesInTargetElement,
    getNextArrayElementByDirection,
    hasCurrentElementReachedEndingPosition,
    hasNextElementReachedEndingPosition
}