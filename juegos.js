/* Retos visuales para ensayar decisiones antes de llevarlas al aula. */
const scienceGames = [
  {
    id: 'ecosistema', icon: '🌿', title: 'Rescate en la charca', topic: 'Ecosistemas',
    intro: 'Una charca cambia durante la temporada seca. Investiga el lugar y predice cómo se relacionan sus componentes.',
    transfer: 'Entrega tarjetas de agua, plantas, insectos y ranas. Pide unirlas con flechas rotuladas y explicar una predicción con el esquema, en LSC o por otra modalidad acordada.',
    rounds: [
      ['☀️', 'La charca pierde agua durante una sequía. ¿Qué componente abiótico está cambiando?', ['La rana', 'El agua', 'La planta'], 1, 'El agua es un componente sin vida. Su disponibilidad influye en los organismos de la charca.'],
      ['🐸', 'En este modelo, las ranas se alimentan de insectos. Si disminuyen los insectos, ¿qué puede pasar?', ['Las ranas tienen menos alimento', 'El agua deja de evaporarse', 'Los insectos pasan a ser abióticos'], 0, 'Las ranas pueden tener menos alimento. La relación alimentaria permite hacer una predicción sobre el cambio.'],
      ['🔎', '¿Qué evidencia muestra que el grupo comprendió la relación?', ['Una lista de nombres', 'Un dibujo sin etiquetas', 'Una flecha de insectos a ranas con una explicación'], 2, 'Pide que expliquen el significado de la flecha. En una cadena alimentaria, va del alimento al organismo que lo consume.']
    ]
  },
  {
    id: 'celula', icon: '🔬', title: 'Laboratorio de la célula', topic: 'La célula',
    intro: 'Haz parejas de estructura y función en un modelo de célula eucariota con núcleo.',
    transfer: 'Muestra primero el modelo y deja un momento para observarlo. Luego ofrece tarjetas de funciones y pide que cada estudiante ubique una y justifique su elección.',
    rounds: [
      ['◉', 'Empareja «membrana» con su función.', ['Contiene la mayor parte del ADN', 'Regula el intercambio con el entorno', 'Es el medio donde ocurren muchos procesos celulares'], 1, 'La membrana delimita la célula y regula el paso de sustancias entre ella y su entorno.'],
      ['◌', 'Empareja «citoplasma» con su función.', ['Regula el intercambio con el entorno', 'Contiene la mayor parte del ADN', 'Es el medio donde ocurren muchos procesos celulares'], 2, 'En el citoplasma ocurren muchos procesos celulares. En este modelo ocupa el espacio entre la membrana y el núcleo.'],
      ['◎', 'Empareja «núcleo» con su función.', ['Contiene la mayor parte del ADN', 'Regula el intercambio con el entorno', 'Es el medio donde ocurren muchos procesos celulares'], 0, 'En esta célula, el núcleo contiene la mayor parte del ADN. El esquema simplifica las estructuras para que se puedan ubicar.']
    ]
  },
  {
    id: 'materia', icon: '🧊', title: 'El viaje de una gota', topic: 'Estados de la materia',
    intro: 'Construye una secuencia de cambios de estado. Cada tarjeta correcta añade una etapa al recorrido.',
    transfer: 'Presenta hielo y agua líquida. Para el paso a gas, usa un modelo o un video pausado. Pide ordenar tarjetas con flechas y explicar qué cambia al calentar o enfriar.',
    rounds: [
      ['🧊', 'Empiezas con un cubo de hielo. Al calentarlo, ¿qué etapa sigue?', ['Fusión · agua líquida', 'Condensación · agua líquida', 'Solidificación · hielo'], 0, 'En la fusión, el agua pasa de sólido a líquido al recibir energía.'],
      ['💧', 'Un recipiente abierto con agua a temperatura ambiente pierde líquido poco a poco, sin burbujas. ¿Qué proceso lo explica?', ['Fusión · agua líquida', 'Solidificación · hielo', 'Evaporación · vapor de agua'], 2, 'La evaporación ocurre en la superficie del líquido y puede suceder sin que el agua hierva.'],
      ['🌫️', 'El vapor toca una superficie fría y aparecen gotas. ¿Cuál es el último paso?', ['Evaporación · vapor de agua', 'Condensación · agua líquida', 'Fusión · agua líquida'], 1, 'En la condensación, el vapor pierde energía y pasa a líquido. Las gotas visibles son agua líquida.']
    ]
  }
];

const signsGame = {
  id: 'saludos', icon: '💬', title: 'El saludo en su momento', topic: 'Primeras señas',
  intro: 'Elige una expresión según el momento de la conversación. Después contrástala con el video de su ficha.',
  transfer: 'Ensaya una bienvenida y una despedida usando los videos y los apoyos comunicativos acordados.',
  rounds: [
    ['👋', 'Llegas al aula y quieres iniciar una interacción. ¿Qué expresión buscarías?', ['Gracias', 'Adiós', 'Hola'], 2, '«Hola» abre la interacción. Observa su ficha en el catálogo antes de practicar.'],
    ['💬', 'Termina la clase y quieres despedirte del grupo. ¿Qué expresión buscarías?', ['Adiós', 'Hola', 'Gracias'], 0, '«Adiós» sirve para despedirse. Mira la demostración completa en el video de su ficha.']
  ]
};

scienceGames[0].type = 'Laberinto';
scienceGames[0].intro = 'Resuelve la pregunta de cada puerta y mueve la rana dos casillas contiguas hasta el siguiente tramo.';
scienceGames[0].rounds = [
  ['☀️', 'Dos charcas tienen las mismas plantas, pero una recibe menos lluvia y baja su nivel. ¿Qué variable abiótica explica directamente esa diferencia?', ['La cantidad de agua disponible', 'La variedad de insectos', 'La altura de las plantas'], 0, 'La cantidad de agua disponible cambia con las lluvias y afecta el hábitat.', 'Piensa en la condición física que cambia antes que los organismos.'],
  ['🐸', 'Los insectos se alimentan de plantas y las ranas comen insectos. Si escasean las plantas, ¿qué efecto indirecto es razonable?', ['Las ranas tendrán más alimento', 'Las ranas podrían encontrar menos presas', 'La sequía se detendrá'], 1, 'Menos plantas pueden reducir los insectos disponibles como alimento para las ranas.', 'Sigue dos eslabones de la cadena alimentaria.'],
  ['🍂', '¿Qué ocurriría primero si disminuyeran mucho los hongos descomponedores?', ['Se aceleraría el reciclaje de nutrientes', 'La luz dejaría de llegar al agua', 'Se acumularían restos orgánicos'], 2, 'Al disminuir la descomposición, se acumulan restos y se liberan nutrientes más lentamente.', 'Piensa en lo que normalmente les pasa a las hojas caídas.'],
  ['🔎', 'Quieres saber si la luz afecta el crecimiento de las plantas de la charca. ¿Qué comparación aísla mejor su efecto?', ['Misma especie y cantidad de agua, distinta luz', 'Distinta especie y distinta cantidad de agua', 'Una planta al sol y una roca a la sombra'], 0, 'Mantener constantes la especie y el agua permite comparar el efecto de la luz.', 'Cambia solo el factor que quieres estudiar.']
];
scienceGames[1].type = 'Crucigrama';
scienceGames[1].intro = 'Lee cada pista y escribe la palabra que encaja. Las palabras resueltas dejan letras de ayuda en sus cruces.';
scienceGames[1].rounds = [
  ['◉', 'Si una molécula debe atravesar una barrera selectiva para salir de la célula, ¿qué estructura cruza?', [], 0, 'La membrana regula los intercambios con el entorno.'],
  ['◎', 'En una célula eucariota, ¿qué estructura rodeada por una envoltura contiene la mayor parte del material hereditario?', [], 0, 'El núcleo eucariota contiene la mayor parte del ADN.'],
  ['◌', '¿Qué región se encuentra entre la membrana y el núcleo, y contiene el medio acuoso y otros componentes celulares?', [], 0, 'El citoplasma contiene el citosol y componentes donde ocurren procesos celulares.'],
  ['🧬', '¿Qué sigla de tres letras identifica la molécula que almacena la información hereditaria?', [], 0, 'El ADN almacena la información hereditaria.']
];
scienceGames[2].type = 'Secuencia';
scienceGames[2].rounds[0][2] = ['Fusión · agua líquida', 'Sublimación · vapor de agua', 'Solidificación · hielo'];
scienceGames[2].rounds[1][2] = ['Ebullición · ocurre en todo el líquido', 'Condensación · agua líquida', 'Evaporación · ocurre en la superficie'];
scienceGames[2].rounds[2][2] = ['Deposición · hielo', 'Condensación · agua líquida', 'Fusión · agua líquida'];
scienceGames[2].rounds.push(['❄️', 'Las gotas permanecen el tiempo suficiente en un congelador. ¿Qué paso cierra el recorrido?', ['Condensación · líquido', 'Sublimación · gas', 'Solidificación · hielo'], 2, 'Al enfriarse hasta congelarse, el agua líquida pasa a sólido.', 'Empieza en líquido y piensa en lo que ocurre al perder energía.']);
signsGame.type = 'Sopa de letras';
signsGame.intro = 'Deduce la palabra por la situación. Toca su primera y última letra. Puede estar en diagonal, vertical o al revés.';
signsGame.rounds = [
  ['👋', 'La clase termina y quieres despedirte. Encuentra la expresión de cinco letras.', [], 0, '«Adiós» sirve para despedirse. Observa su demostración en Primeras señas.'],
  ['💬', 'Un compañero te presta un material y quieres agradecerle. Busca la expresión de siete letras.', [], 0, '«Gracias» expresa agradecimiento.'],
  ['🚪', 'Quieres pasar entre dos personas sin interrumpirlas. Busca la expresión de siete letras.', [], 0, '«Permiso» puede usarse para pedir paso.']
];

const prepGames = prepSteps.map((step, i) => ({
  id: 'preparacion-' + i, icon: step.icon, title: step.title,
  intro: 'Ensaya una decisión y luego aplícala al borrador de tu propia clase.',
  rounds: [[step.icon, step.question, step.options, step.correct, step.feedback]]
}));

function readGameProgress(value) {
  const ids = [...scienceGames, signsGame, ...prepGames].map(game => game.id);
  return Array.isArray(value) ? [...new Set(value.filter(id => ids.includes(id)))] : [];
}
data.gameWins = readGameProgress(data.gameWins);

function mountGame(container, game) {
  let round = 0;
  const path = [];
  if (game.id === 'materia') path.push('Inicio · hielo');
  container.classList.add('game-board');
  function draw(moveFocus = false) {
    const finished = round === game.rounds.length;
    const [icon, prompt, options, correct, explanation, hint] = finished ? [] : game.rounds[round];
    container.innerHTML = `
      <div class="game-label"><span aria-hidden="true">${game.icon}</span> ${game.topic || 'Decisión docente'}
        <span class="game-count">${finished ? '✓ Completado' : `Reto ${round + 1} de ${game.rounds.length}`}</span>
      </div>
      <h3 tabindex="-1">${finished ? '¡Misión completada!' : game.title}</h3>
      ${round === 0 ? `<p>${game.intro}</p>` : ''}
      ${path.length ? `<ol class="game-path">${path.map(stage => `<li>${stage}</li>`).join('')}</ol>` : ''}
      ${game.id === 'celula' && !finished ? `<figure class="game-model"><svg viewBox="0 0 450 300" role="img" aria-label="Modelo simplificado de una célula eucariota">${topics[1].svg}</svg></figure>` : ''}
      ${finished ? `
        ${game.transfer ? `<p><strong>Llévalo a tu aula.</strong> ${game.transfer}</p>` : '<p>Aplica esta decisión en el espacio de tu borrador.</p>'}
        <button class="btn light" data-replay>Volver a jugar</button>
        ${game.id === 'saludos' ? '<button class="btn" data-view-adios>Ver la ficha de Adiós →</button>' : ''}` : `
        <div class="game-prompt"><span aria-hidden="true">${icon}</span><strong>${prompt}</strong></div>
        <div class="game-options">${options.map((option, i) => `<button type="button" data-choice="${i}"><span aria-hidden="true">${i + 1}</span>${option}</button>`).join('')}</div>
        <p class="game-feedback" role="status"></p>
        <button type="button" class="btn" data-next hidden>${round + 1 === game.rounds.length ? 'Completar misión' : 'Siguiente reto'} →</button>`}
    `;
    if (moveFocus) container.querySelector('h3').focus();
    if (finished) {
      container.querySelector('[data-replay]').onclick = () => { round = 0; path.splice(1); draw(true); };
      const adios = container.querySelector('[data-view-adios]');
      if (adios) adios.onclick = () => {
        signCategory = 'Todas';
        signQuery = '';
        onlyNewSigns = false;
        favoritesOnly = false;
        selectedSchoolSign = 'adios';
        clipIndex = 0;
        if (location.hash === '#lsc') {
          lsc();
          $('#school-sign-detail').scrollIntoView({block: 'start'});
          const title = $('#school-sign-detail h3');
          title.tabIndex = -1;
          title.focus({preventScroll: true});
        } else {
          go('lsc');
        }
      };
      return;
    }

    const buttons = [...container.querySelectorAll('[data-choice]')];
    const next = container.querySelector('[data-next]');
    const feedback = container.querySelector('.game-feedback');
    buttons.forEach((button, i) => {
      button.onclick = () => {
        if (!next.hidden) return;
        if (i !== correct) {
          button.classList.add('try-again');
          feedback.textContent = 'Pista: ' + (hint || (game.id === 'materia' ? 'Identifica el estado inicial y el final. Luego piensa si el agua ganó o perdió energía.' : explanation));
          return;
        }
        button.classList.add('game-correct');
        buttons.forEach(choice => choice.setAttribute('aria-disabled', 'true'));
        feedback.textContent = '✓ ' + explanation;
        next.hidden = false;
      };
    });
    if (game.id === 'ecosistema') {
      next.disabled = true;
      mazeRound(round, next, feedback);
    }
    if (game.id === 'celula') crosswordRound(round, next, feedback);
    if (game.id === 'saludos') wordSearchRound(round, next, feedback);
    next.onclick = () => {
      if (game.id === 'materia') path.push(options[correct]);
      round++;
      if (round === game.rounds.length && !data.gameWins.includes(game.id)) {
        data.gameWins.push(game.id);
        save();
        const marker = main.querySelector('[data-game][aria-pressed="true"] .game-marker');
        if (marker) {
          marker.textContent = '✓';
          marker.insertAdjacentHTML('afterend', '<span class="sr">Completado</span>');
        }
      }
      draw(true);
    };
  }
  draw();
}

function renderGameHub() {
  const games = [...scienceGames, signsGame];
  main.innerHTML = head('MAPA DE MISIONES', 'Aprende jugando.', 'Prueba una actividad, descubre por qué funciona y adapta la idea para tu próxima clase.') +
    `<div class="game-map">${games.map((game, i) => `
      <button type="button" class="game-tile" aria-pressed="false" data-game="${i}">
        <span class="game-icon" aria-hidden="true">${game.icon}</span>
        <span><small>${game.topic} · ${game.type}</small><strong>${game.title}</strong></span>
        <span class="game-marker" aria-hidden="true">${data.gameWins.includes(game.id) ? '✓' : '→'}</span>
        ${data.gameWins.includes(game.id) ? '<span class="sr">Completado</span>' : ''}
      </button>`).join('')}</div>
    <section class="game-play" id="game-hub-play" aria-label="Misión seleccionada"></section>
    <div class="game-links"><button class="btn light" onclick="go('ciencias')">Prepara tu clase →</button><button class="btn light" onclick="go('lsc')">Explora Primeras señas →</button></div>`;
  main.querySelectorAll('[data-game]').forEach(button => {
    button.onclick = () => {
      main.querySelectorAll('[data-game]').forEach(tile => tile.setAttribute('aria-pressed', String(tile === button)));
      const panel = $('#game-hub-play');
      mountGame(panel, games[Number(button.dataset.game)]);
      panel.querySelector('h3').focus();
    };
  });
}

navs.splice(navs.findIndex(([id]) => id === 'ciencias'), 0, ['juegos', 'Misiones']);
const homeBeforeGames = home;
home = function () {
  homeBeforeGames();
  main.querySelector('.hero2')?.insertAdjacentHTML('afterend', `
    <section class="game-invite"><span class="game-icon" aria-hidden="true">✦</span>
      <div><span class="eyebrow">APRENDE JUGANDO</span><h2>Tu próxima misión te espera.</h2>
      <p>Escapa del laberinto, resuelve un crucigrama o encuentra expresiones en la sopa de letras.</p></div>
      <button class="btn" onclick="go('juegos')">Ver misiones →</button>
    </section>`);
};

const prepBeforeGames = science;
science = function () {
  prepBeforeGames();
  mountGame($('#prep-game'), prepGames[prepStep]);
  main.querySelector('.prep-intro').insertAdjacentHTML('afterend',
    '<p><button class="btn light" onclick="go(\'juegos\')">Ensayar juegos de Ciencias Naturales →</button></p>');
};

const signsBeforeGames = lsc;
lsc = function () {
  signsBeforeGames();
  main.insertAdjacentHTML('beforeend', '<section class="game-play" id="signs-game" aria-label="Juego de expresiones cotidianas"></section>');
  mountGame($('#signs-game'), signsGame);
};
window.gameHubReady = true;
render();
