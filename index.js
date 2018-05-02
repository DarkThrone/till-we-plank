const $d = document.getElementById('d'),
      $h = document.getElementById('h'),
      $m = document.getElementById('m'),
      $s = document.getElementById('s'),
      D = 'day', H='hour', M = 'minute', S = 'second';
const JUDGEMENT_DAY = new Date(2018, 4, 15);
const DELTA_DAY = new Date().getDate() - JUDGEMENT_DAY.getDate();
const EMOTIONS = {
    "😭": -3,
    "😀": -1,
    "😃": 6,
    "🙁": 7,
    "☹️": 8,
    "😠": 9,
    "😡": 10,
    "🤬": 11
};

const getEmotion = d => Object
      .keys(EMOTIONS)
      .find(k => d < EMOTIONS[k]);

document.getElementById('emotion').textContent = getEmotion(DELTA_DAY);

const dt = () => JUDGEMENT_DAY - new Date();

const plur = (w, v) => v === 1? `${v} ${w}` : `${v} ${w}s`;
const extract = d => { with(new Date(+d)) return [getDate(), getHours(), getMinutes(), getSeconds()]; };

const setTitle = (d, h, m, s) => document.title = `${getEmotion(DELTA_DAY)} ${d}d ${h}h ${m}m ${s}s`;

const setDisplay = () => {
    const [d, h, m, s] = extract(dt());
    $d.textContent = plur(D, d);
    $h.textContent = plur(H, h);
    $m.textContent = plur(M, m);
    $s.textContent = plur(S, s);
    setTitle(d, h, m, s);
    window.requestAnimationFrame(setDisplay);
};

window.requestAnimationFrame(setDisplay);
