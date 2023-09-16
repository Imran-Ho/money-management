
function bringElement (elementId){
    
    const bringElementHere = document.getElementById(elementId);
    const bringElementHereString = bringElementHere.value;
    const bringElementFigure = parseInt(bringElementHereString);

    return bringElementFigure;
   
    
}


function bringElementInner (elementInner, addValues){
    const bringElement = document.getElementById(elementInner);
    const bringElementString = bringElement.innerText;
    const bringElementFigure = parseInt(bringElementString);
    return bringElementFigure;
    
}

function setElementInner (elementInner, addValues){
    const bringElementInner = document.getElementById(elementInner);
    const bringElementInnerString = bringElementInner.innerText;
    const bringElementInnerFigure = parseInt(bringElementInnerString);
    bringElementInner.innerText = addValues;
}