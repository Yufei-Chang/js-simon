// creo un form generale e converto i valori attributi in valori variabili
const formElem = document.getElementById("form-section");
const btnElem = document.getElementById("number-btn");

// nel form inserisco un generatore di numeri e genero 5 numeri casuali

function generaNumeriRandom(event) {
    event.preventDefault();
    const numeri = [];
    const numberContainer = document.getElementById('risultato-numeri');
    numberContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
      const numero = Math.floor(Math.random() * 100) + 1;
      numeri.push(numero);
    const numberElement = document.createElement('span');
      numberElement.textContent = numero + " ";
      numberContainer.appendChild(numberElement);
    }
    // faccio un timer di 30 secondi e faccio sparire i numeri
    setTimeout(() => {
        numberContainer.innerHTML = '';
      }, 30000);
    
      return numeri;
    }    

  btnElem.addEventListener('click', generaNumeriRandom);


// creo 5 input in cui l'utente deve inserire i numeri mostrati

// se l'utente inserisce contenuti diversi dai numeri, lo avvisiamo con un alert

// collego input al generatore

// verifico se l'input dell'utente corrisponde ai numeri random del generatore

// mostro il risultato del gioco all'utente

