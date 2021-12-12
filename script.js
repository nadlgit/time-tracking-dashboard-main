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

function loadJSON () {
    const jsonDataURL = './data.json';
    fetch(jsonDataURL)
    .then(response => response.json())
    .then(jsonData => {
        let sectionHTML;
        const sectionTitles = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'];
        const sectionIDs = ['work', 'play', 'study', 'exercise', 'social', 'self-care'];
        const formatTime = (duration) => {
            if (duration == 1) {
                return '1hr';
            } else {
                return `${duration}hrs`;
            }
        };
        for(let i = 0; i < jsonData.length; i++) {
            document.getElementById(sectionIDs[sectionTitles.indexOf(jsonData[i].title)]).innerHTML = `
<div>
    <header>${jsonData[i].title}</header>
    <div class="current daily">${formatTime(jsonData[i].timeframes.daily.current)}</div>
    <div class="previous daily">Yesterday - ${formatTime(jsonData[i].timeframes.daily.previous)}</div>
    <div class="current weekly timeframe-active">${formatTime(jsonData[i].timeframes.weekly.current)}</div>
    <div class="previous weekly timeframe-active">Last week - ${formatTime(jsonData[i].timeframes.weekly.previous)}</div>
    <div class="current monthly">${formatTime(jsonData[i].timeframes.monthly.current)}</div>
    <div class="previous monthly">Last month - ${formatTime(jsonData[i].timeframes.monthly.previous)}</div>
</div>`;
        }
    });
}
loadJSON();
