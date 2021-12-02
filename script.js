function onTimeFrameClick (clickedElem, newTimeFrame) {
   const activeClassName = 'timeframe-active';
   const oldActiveElem = document.getElementsByClassName(activeClassName);
   while (oldActiveElem.length > 0) {
       oldActiveElem[0].classList.remove(activeClassName);
   }
   const newActiveElem = document.getElementsByClassName(newTimeFrame);
   for(let i = 0; i < newActiveElem.length; i++) {
       newActiveElem[i].classList.add(activeClassName);
   }
   clickedElem.classList.add(activeClassName);
}