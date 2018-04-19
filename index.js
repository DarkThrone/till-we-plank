import pretty from 'pretty-ms';

const DISPLAY = document.getElementById('days-till');
const JUDGEMENT_DAY = new Date(2018, 4, 15);
const setDisplay = () => {
    DISPLAY.textContent = pretty(JUDGEMENT_DAY - new Date(), {verbose: true,secDecimalDigits:0});
    window.requestAnimationFrame(setDisplay);
};

window.requestAnimationFrame(setDisplay);
