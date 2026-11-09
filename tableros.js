/* Tableros de las misiones. Las respuestas escritas admiten tildes y mayúsculas. */
const puzzleText = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase();

function mazeRound(round, next, feedback) {
  const grid = ['S..##', '##...', '#..#.', '#.#..', '#...E'];
  const route = [0, 1, 2, 7, 8, 9, 14, 19, 24];
  const at = round * 2;
  const map = document.createElement('div');
  map.className = 'maze-grid';
  map.setAttribute('aria-label', 'Laberinto de la charca');
  let position = route[at];
  function draw() {
    map.innerHTML = grid.join('').split('').map((tile, i) => {
      const open = tile !== '#';
      const near = (Math.floor(i/5) === Math.floor(position/5) && Math.abs(i-position) === 1) || Math.abs(i-position) === 5;
      const label = i === position ? 'Tu posición' : tile === 'E' ? 'Salida' : tile === 'S' ? 'Entrada' : open ? 'Sendero' : 'Muro';
      return `<button type="button" aria-label="${label}, fila ${Math.floor(i/5)+1}, columna ${i%5+1}" ${!open || !near ? 'disabled' : ''} data-cell="${i}" class="${i === position ? 'here' : open ? 'open' : 'wall'}">${i === position ? '🐸' : tile === 'E' ? '🚩' : tile === 'S' ? '↦' : open ? '·' : '■'}</button>`;
    }).join('');
  }
  draw();
  next.before(map);
  map.onclick = event => {
    const button = event.target.closest('[data-cell]');
    if (!button || button.disabled) return;
    if (next.hidden) {
      feedback.textContent = 'Resuelve la pregunta para abrir el paso.';
      return;
    }
    const cell = Number(button.dataset.cell);
    if (!route.slice(at+1, at+3).includes(cell) || cell === route[at+2] && position === route[at]) {
      feedback.textContent = 'Ese sendero se aleja de la salida. Prueba una casilla hacia la derecha o hacia abajo.';
      return;
    }
    position = cell;
    draw();
    if (position === route[at+2]) {
      map.querySelectorAll('button').forEach(tile => tile.disabled = true);
      next.disabled = false;
      feedback.textContent = round === 3 ? '¡Llegaste a la salida!' : 'Puerta superada. Puedes avanzar al siguiente tramo.';
      next.focus();
    } else {
      map.querySelector('[data-cell="' + route[at+2] + '"]').focus();
    }
  };
}

const cellWords = [
  {answer:'MEMBRANA', row:0, col:0, across:true},
  {answer:'NUCLEO', row:0, col:6, across:false},
  {answer:'CITOPLASMA', row:5, col:3, across:true},
  {answer:'ADN', row:5, col:9, across:false}
];

function crosswordRound(round, next, feedback) {
  const word = cellWords[round];
  const letters = new Map();
  cellWords.forEach(({answer,row,col,across}, index) => {
    [...answer].forEach((letter, i) => {
      const key = (row + (across ? 0 : i)) * 14 + col + (across ? i : 0);
      const cell = letters.get(key) || {letter, entries:[]};
      cell.entries.push(index);
      if (i === 0) cell.number = index + 1;
      letters.set(key, cell);
    });
  });
  const form = document.createElement('form');
  form.innerHTML = `<div class="cross-grid" aria-hidden="true">${Array.from({length:112}, (_, i) => {
    const cell = letters.get(i);
    if (!cell) return '<span></span>';
    return `<span class="cross-cell ${cell.entries.includes(round) ? 'current' : ''}">${cell.number ? `<small>${cell.number}</small>` : ''}<b class="cross-letter">${cell.entries.some(index => index < round) ? cell.letter : ''}</b></span>`;
  }).join('')}</div>
  <label for="cell-answer">${round+1} ${word.across ? 'horizontal' : 'vertical'} · ${word.answer.length} letras</label>
  <div class="puzzle-input"><input id="cell-answer" autocomplete="off" required><button class="btn">Comprobar palabra</button></div>`;
  feedback.before(form);
  form.onsubmit = event => {
    event.preventDefault();
    if (!next.hidden) return;
    const input = form.querySelector('input');
    if (puzzleText(input.value) !== word.answer) {
      feedback.textContent = 'Revisa la pista y las letras que se cruzan con las palabras ya resueltas.';
      return;
    }
    const explanation = scienceGames[1].rounds[round][4];
    const cells = form.querySelectorAll('.cross-cell.current');
    cells.forEach((cell, i) => cell.querySelector('.cross-letter').textContent = word.answer[i]);
    feedback.textContent = '✓ ' + explanation;
    input.readOnly = true;
    form.querySelector('button').disabled = true;
    next.hidden = false;
    next.focus();
  };
}

const greetingBase = [
  'ARFQSMPLTD', 'GDXAEORSEB', 'TRLNNMCRUG', 'PQAOBXDMEO',
  'RSECCIHLNP', 'MQIRPIDTAA', 'BZCOAPNOSM', 'LEOSCDTEOS',
  'JOGNBIERKA', 'RLQOPAHGTS'
];
const greetingPaths = [[52,43,34,25,16], [20,31,42,53,64,75,86], [9,19,29,39,49,59,69]];

const greetingGrid = [...greetingBase.join('')];
['ADIOS', 'GRACIAS', 'PERMISO'].forEach((word, index) => {
  greetingPaths[index].forEach((cell, i) => greetingGrid[cell] = word[i]);
});

function wordSearchRound(round, next, feedback) {
  const path = greetingPaths[round];
  const map = document.createElement('div');
  map.className = 'word-grid';
  map.setAttribute('aria-label', 'Sopa de letras, 10 filas y 10 columnas');
  map.innerHTML = [...greetingGrid.join('')].map((letter, i) =>
    `<button type="button" aria-pressed="false" aria-label="${letter}, fila ${Math.floor(i/10)+1}, columna ${i%10+1}" data-letter="${i}">${letter}</button>`).join('');
  feedback.before(map);
  let start = null;
  map.onclick = event => {
    const button = event.target.closest('[data-letter]');
    if (!button || !next.hidden) return;
    const end = Number(button.dataset.letter);
    if (start === null) {
      start = end;
      button.setAttribute('aria-pressed','true');
      feedback.textContent = 'Ahora marca el otro extremo de la palabra.';
      return;
    }
    const first = path[0], last = path.at(-1);
    if ((start === first && end === last) || (start === last && end === first)) {
      path.forEach(index => map.children[index].setAttribute('aria-pressed','true'));
      feedback.textContent = '✓ ' + signsGame.rounds[round][4];
      next.hidden = false;
      next.focus();
    } else {
      map.children[start].setAttribute('aria-pressed','false');
      feedback.textContent = 'Inténtalo de nuevo. Busca en línea recta, también en diagonal o en sentido inverso.';
    }
    start = null;
  };
}
