//funcion para realizar una pausa de la funcion por los segundos que coloque.
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// animate CSS, transiciones 

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.preventDefault();
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });

        

    });


// inicio principalmente las transiciones iniciales para cada contenedor del temporizador
animateCSS('.inact', 'bounceInRight');

animateCSS('.act', 'bounceInRight');

animateCSS('.last', 'bounceInRight');

// inicializo la variable elements que contendra todos los elementos li de las opciones.
var options = document.querySelectorAll('.options-li');
var options_S = document.querySelectorAll('.s');
var options_B = document.querySelectorAll('.b');
var options_R = document.querySelectorAll('.r');


// Recorro cada click de li al momento para agregarle al que sea seleccionado la funcion para cambiar su color
options.forEach(function (element) {
    element.addEventListener('click', function () {
        changeColorandSelection(element);
    });
    // agrego un addeventlistener para cuando se seleccione en una pantalla de telefono las opciones, y agrego un event para prevenir posibles errores
    element.addEventListener('touchstart', function () {
        event.preventDefault();
        changeColorandSelection(element);
    });
});

// 
function removeSelections() {

    // recorro cada opcion seleccionada, evaluo si tienen el color y se los remuevo, para que la proxima que vuelva al temporizador inactivo, no este ningun color seleccionado
    options_S.forEach(function (option) {
        if (option.classList.contains('changeColorLi')) {
            option.classList.toggle('changeColorLi');
        }
    });
    options_B.forEach(function (option) {
        if (option.classList.contains('changeColorLi')) {
            option.classList.toggle('changeColorLi');
        }
    });
    options_R.forEach(function (option) {
        if (option.classList.contains('changeColorLi')) {
            option.classList.toggle('changeColorLi');
        }
    });


}

//Variables que contendran los tiempos elegidos, en el formato de minutos, las repeticiones sera la cantidad
var finalStudyTime = null;
var finalBreakTime = null;
var finalRepTimes = null;
var studyTime = null;
var breakTime = null;
var repTimes = null;


// Creo la funcion changeColor la cual cambiara el color del li seleccionado si corresponde y fijara una seleccion en la opcion elegida
function changeColorandSelection(element) {


    // Verifico que clase adicional contiene, para asi identificar en cual barra de opciones me encuentro
    if (element.classList.contains('s')) {

        // Inicializo en null la variable que contendra la opcion que podria estar con ya el color asignado
        var selectedElement = null;

        // Inicializo la variable donde estaran todas las opciones que tengan la clase adicional
        var specifyElements = document.querySelectorAll('.s')

        // Recorro cada una de las opciones
        specifyElements.forEach(function (element) {

            // Verifico que opcion podria contener la clase con el color cambiado, si es el caso, la asigno en la variable selectedElement para posteriormente removerle la dicha clase del color
            if (element.classList.contains('changeColorLi')) {
                selectedElement = element;
            }
        });

        // Asigno a la variable de estudio el elegido por el usuario
        if (element.classList.contains('15m')) {
            finalStudyTime = 15;
        }
        else if (element.classList.contains('30m')) {
            finalStudyTime = 30;
        }
        else if (element.classList.contains('1h')) {
            finalStudyTime = 60;
        }
        else if (element.classList.contains('2h')) {
            finalStudyTime = 120;
        }
        else if (element.classList.contains('3h')) {
            finalStudyTime = 180;
        }


        // Si se ha encontrado una opcion con la clase del color cambiado, se le removera para posteriormente asignarsela a la nueva opcion seleccionada.
        if (selectedElement) {
            selectedElement.classList.remove('changeColorLi');
        }

        // Verifico que la opcion seleccionada no sea la misma seleccionada anteriormente, porque en ese caso solo se le habria removido ya el color.
        if (selectedElement != element) {
            element.classList.add('changeColorLi');
        }
        // si selecciono nuevamente la opcion para deseleccionarla, la variabla quedara nula como en un principio
        if (selectedElement == element) {
            finalStudyTime = null;
        }


    }

    // Verifico que clase adicional contiene, para asi identificar en cual barra de opciones me encuentro
    else if (element.classList.contains('b')) {

        // Inicializo en null la variable que contendra la opcion que podria estar con ya el color asignado
        var selectedElement = null;

        // Inicializo la variable donde estaran todas las opciones que tengan la clase adicional
        var specifyElements = document.querySelectorAll('.b')

        // Recorro cada una de las opciones
        specifyElements.forEach(function (element) {

            // Verifico que opcion podria contener la clase con el color cambiado, si es el caso, la asigno en la variable selectedElement para posteriormente removerle la dicha clase del color
            if (element.classList.contains('changeColorLi')) {
                selectedElement = element;
            }
        });


        // Asigno a la variable de descanso el elegido por el usuario
        if (element.classList.contains('5m')) {
            finalBreakTime = 5;
        }
        else if (element.classList.contains('10m')) {
            finalBreakTime = 10;
        }
        else if (element.classList.contains('15m')) {
            finalBreakTime = 15;
        }
        else if (element.classList.contains('30m')) {
            finalBreakTime = 30;
        }
        else if (element.classList.contains('1h')) {
            finalBreakTime = 60;
        }

        // Si se ha encontrado una opcion con la clase del color cambiado, se le removera para posteriormente asignarsela a la nueva opcion seleccionada.
        if (selectedElement) {
            selectedElement.classList.remove('changeColorLi');
        }

        // Verifico que la opcion seleccionada no sea la misma seleccionada anteriormente, porque en ese caso solo se le habria removido ya el color.
        if (selectedElement != element) {
            element.classList.add('changeColorLi');
        }

        // si selecciono nuevamente la opcion para deseleccionarla, la variabla quedara nula como en un principio
        if (selectedElement == element) {
            finalBreakTime = null;
        }


    }

    // Verifico que clase adicional contiene, para asi identificar en cual barra de opciones me encuentro
    else if (element.classList.contains('r')) {

        // Inicializo en null la variable que contendra la opcion que podria estar con ya el color asignado
        var selectedElement = null;

        // Inicializo la variable donde estaran todas las opciones que tengan la clase adicional
        var specifyElements = document.querySelectorAll('.r')

        // Recorro cada una de las opciones
        specifyElements.forEach(function (element) {

            // Verifico que opcion podria contener la clase con el color cambiado, si es el caso, la asigno en la variable selectedElement para posteriormente removerle la dicha clase del color
            if (element.classList.contains('changeColorLi')) {
                selectedElement = element;
            }
        });


        // Asigno a la variable de repeticiones la elegida por el usuario
        if (element.classList.contains('1rep')) {
            finalRepTimes = 1;
        }
        else if (element.classList.contains('2rep')) {
            finalRepTimes = 2;
        }
        else if (element.classList.contains('3rep')) {
            finalRepTimes = 3;
        }
        else if (element.classList.contains('4rep')) {
            finalRepTimes = 4;
        }
        else if (element.classList.contains('5rep')) {
            finalRepTimes = 5;
        }


        // Si se ha encontrado una opcion con la clase del color cambiado, se le removera para posteriormente asignarsela a la nueva opcion seleccionada.
        if (selectedElement) {
            selectedElement.classList.remove('changeColorLi');
        }

        // Verifico que la opcion seleccionada no sea la misma seleccionada anteriormente, porque en ese caso solo se le habria removido ya el color.
        if (selectedElement != element) {
            element.classList.add('changeColorLi');
        }

        // si selecciono nuevamente la opcion para deseleccionarla, la variabla quedara nula como en un principio
        if (selectedElement == element) {
            finalRepTimes = null;
        }


    }


}

// Funcion para hacer funcionar el temporizador

// Inicializo variables que contienen los botones del temporizador
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('pause');
var restartButton = document.getElementById('re-start')
var stopButton = document.getElementById('stop');
var startAgainButton = document.getElementById('start-again');

// selecciono todos los div que contengan .timerText que vendran siendo el texto del temporizador funcionando
var timerTexts = document.querySelectorAll('.timer-text');

// inicializo variables que contendran los contenedor tanto inactivo, activo y terminado
var timerInactive = document.getElementById('inactive');
var timerActive = document.getElementById('active');
var timerDone = document.getElementById('done');

// inicializo las variables, contador de repeticiones, segundos, horas y minutos del temporizador
var seconds = 0;
var hour = 0;
var minutes = 0;

// inicializo en null la variable id de los intervalos
var intervalId = null;

// inicializo la variable que contiene el texto de la cantidad de tiempo finalizado en el temporizador
var timeDone = document.getElementById('time-done');

// variable para saber cuando entrar a la condicional requerida en cada tiempo de descanso
var isBreak = false;


// variable para cambiar el tiempo restante a tiempo de descanso y viceversa
var timeLeft = document.getElementById('time-left');


function startTimer() {
    // 
    var repCount = 0;
    var repSum = 0;

    // apenas inicia la funcion quito la transicion de salida, para que no se interponga en la de entrada
    timerInactive.classList.remove('animate__animated', 'animate__bounceOutLeft');


    // quito la visibilidad del texto de error
    document.getElementById('error').style.display = 'none';

    // le asigno a cada variable auxiliar los tiempos seleccionados por el usuario
    studyTime = finalStudyTime;
    breakTime = finalBreakTime;
    repTimes = finalRepTimes;

    // dejo cada variable final en nulo por si hay un proximo uso del temporizador desde cero
    finalStudyTime = null;
    finalBreakTime = null;
    finalRepTimes = null;


    // Si es menos de una hora se le restara un minuto.
    if (studyTime < 60) {
        minutes = studyTime;
        // minutes--;
        seconds = 0;
    }
    else {
        hour = studyTime / 60;
        // hour--;
        minutes = 0;
        seconds = 0;
    }

    // Hora siempre se le agregara un cero mas para que no quede solo un digito
    if (hour < 10) {
        document.getElementById('hour').innerHTML = '0' + hour;
    }
    else {
        document.getElementById('hour').innerHTML = hour;
    }

    // me aseguro de que siempre sean dos digitos, aunque los minutos sean menores de 10
    if (minutes < 10) {
        document.getElementById('minutes').innerHTML = '0' + minutes;
    }
    else {
        document.getElementById('minutes').innerHTML = minutes;
    }

    // me aseguro de que siempre sean dos digitos, aunque los segundos sean menores de 10
    if (seconds < 10) {
        document.getElementById('seconds').innerHTML = '0' + seconds;
    }
    else {
        document.getElementById('seconds').innerHTML = seconds;
    }

    // oculto el contenedor inactivo y muestro el activo y quito las selecciones de las opciones del inactivo para un proximo uso.
    timerInactive.style.display = 'none';
    timerActive.style.display = 'flex';
    removeSelections();

    //Funcion del funcionamiento del temporizador
    let timerFunction = () => {

        // Hora siempre se le agregara un cero mas para que no quede solo un digito
        if (hour < 10) {
            document.getElementById('hour').innerHTML = '0' + hour;
        }
        else {
            document.getElementById('hour').innerHTML = hour;
        }

        // me aseguro de que siempre sean dos digitos, aunque los minutos sean menores de 10
        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = '0' + minutes;
        }
        else {
            document.getElementById('minutes').innerHTML = minutes;
        }

        // me aseguro de que siempre sean dos digitos, aunque los segundos sean menores de 10
        if (seconds < 10) {
            document.getElementById('seconds').innerHTML = '0' + seconds;
        }
        else {
            document.getElementById('seconds').innerHTML = seconds;
        }

        // si quedan minutos, le resto uno y reseteo los segundos
        if (seconds == 0 && minutes > 0) {
            minutes--;
            seconds = 59;
        }
        // si quedan horas, le resto uno y reseteo los minutos y segundos
        else if (seconds == 0 && hour > 0) {
            hour--;
            seconds = 59;
            minutes = 59;
        }


        // si no quedan horas, minutos y segundos se detiene el temporizador
        else if (seconds == 0 && minutes == 0 && hour == 0) {

            // Si el usuario eligio repeticiones entrara
            if (repTimes != 0) {
                if (repCount < repTimes - 1) {
                    if (!isBreak) {

                        // cambio el texto del temporizador
                        timeLeft.innerHTML = 'Descanso Restante: ';

                        // le cambio el color a cada div del texto del temporizador descansando
                        timerTexts.forEach(function (element) {
                            element.classList.add('timeBreak-color');
                        });

                        //se le restara un minuto por es una hora o menos de una hora.
                        hour = 0;
                        minutes = breakTime;
                        minutes--;
                        seconds = 59;
                        isBreak = true;

                    }
                    else {

                        // coloco el texto del temporizador como estaba al inicio
                        timeLeft.innerHTML = 'Tiempo Restante:';

                        // le cambio el color a cada div del texto del temporizador funcionando
                        timerTexts.forEach(function (element) {
                            element.classList.remove('timeBreak-color');
                        });

                        //Si es menos de una hora se le restara un minuto.
                        if (studyTime <= 60) {
                            minutes = studyTime;
                            minutes--;
                        }

                        // Si el tiempo de estudio es mas de una hora, se le restara uno y se iniciara los minutos y segundos en 59

                        if (studyTime > 60) {
                            hour = studyTime / 60;
                            hour--;
                            minutes = 59;
                            seconds = 59;
                        }

                        // aumento el contador de repeticiones para llevar la cuenta de las que llevo y coloco el isBreak en false como al inicio.
                        repCount++;
                        isBreak = false;

                        // depende el caso le asigno a la variable repSum la cantidad de tiempo llevado a nivel de repeticiones.
                        if (repSum == 0) {
                            repSum = studyTime;
                        }
                        else {
                            repSum = studyTime * repCount;
                        }
                    }

                }

                // Si ninguna se cumple termino el temporizador y le agrego la transicion al temporizador finalizado
                else {
                    endTimer(repSum);
                    animateCSS('.last', 'bounceInRight');

                }
            }

           // Si ninguna se cumple termino el temporizador y le agrego la transicion al temporizador finalizado
            else {
                endTimer(repSum);
                animateCSS('.last', 'bounceInRight');
            }
        }

        // si ninguna aplica, el segundo se restara a uno
        else {
            seconds--;
        }

    }

    // Verifico que si no tiene valor el id, limpio sus intervalos para asi evitar problemas, y posteriormente vuelvo a los intervalos
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(timerFunction, 1000);

    // Funcion para cuando se de click al boton de pausa
    pauseButton.addEventListener('click', function () {

        //limpio el interval para que se pause el temporizador, y lo coloco en nulo
        clearInterval(intervalId);
        intervalId = null;

        // le cambio el color a cada div del texto del temporizador funcionando
        timerTexts.forEach(function (element) {
            if (element.classList.contains('timeBreak-color')) {
                element.classList.remove('timeBreak-color');
            }
            element.classList.add('timePaused-color');
        });

        // oculto el boton de pausa y muestro el boton de reanudar
        pauseButton.style.display = 'none';
        restartButton.style.display = 'flex';

    });

    // Funcion para reanudar el temporizador
    restartButton.addEventListener('click', function () {

        // le cambio el color a cada div del texto del temporizador funcionando
        timerTexts.forEach(function (element) {
            element.classList.remove('timePaused-color');
            if (isBreak) {
                element.classList.add('timeBreak-color');
            }
        });

        // Verifico que si no tiene valor el id, limpio sus intervalos para asi evitar problemas, y posteriormente vuelvo a los intervalos
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(timerFunction, 1000);

        // oculto el boton de reanudar y muestro el de pausa
        restartButton.style.display = 'none';
        pauseButton.style.display = 'flex';
    });

    // Funcion para detener el temporizador antes de tiempo
    stopButton.addEventListener('click', function () {

        // le agrego la transicion de entrada al temporizador finalizado
        animateCSS('.last', 'bounceInRight');

        // Detengo los intervalos
        clearInterval(intervalId);
        intervalId = null;



        // Transformo las horas a minutos y posteriormente, creo una variable siendo su valor la diferencia entre el tiempo de estudio y el tiempo actual del temporizador. Asi obtengo el tiempo transcurrido.
        hour *= 60;
        if (isBreak) {
            seconds = 0;
            minutes = 0;
            isBreak = false;
        }

        // console.log('studytime = ' + studyTime + ' repCount + ' + repCount + ' repSum = ' + repSum + ' hour = ' + hour + ' minutes =' + minutes);

        console.log('repSum = ' + repSum);

        var timeFinished = (studyTime + repSum) - (hour + minutes);

        //funcion para calcular y imprimir correctamente el tiempo transcurrido
        printTimeDone(timeFinished, hour, minutes, seconds);

    });

}

// Funcion para cuando se de click al boton de volver a empezar
startAgainButton.addEventListener('click', async function () {
    
    // Si pause el temporizador y lo detuve verifico que vuelva a colocarse el button pause y ocultarse el boton reanudar para la proxima
    if (pauseButton.style.display == 'none') {
        pauseButton.style.display = 'flex';
        restartButton.style.display = 'none';
    }

    // le agrego la transicion de entrada al temporizador inactivo y activo
    animateCSS('.inact', 'bounceInRight');
    animateCSS('.act', 'bounceInRight');

    // le agrego la transicion de salida al temporizador finalizado y luego se la quito
    done.classList.add('animate__animated', 'animate__bounceOutLeft');
    await wait(500);

    // oculto el temporizador finalizado y muestro la interfaz temporizador inactivo
    timerDone.style.display = 'none';
    timerInactive.style.display = 'flex';

    done.classList.remove('animate__animated', 'animate__bounceOutLeft');

});


// si doy click en A estudiar! se inicia la funcion padre del temporizador
start.addEventListener('click', async function () {

    // si solamente se elegio una opcion de tiempo de estudio funcionara el temporizador pero si en cambio si no se elige finalBreakTime o si no se elige FinalRepTimes y se elige el otro de esos dos, no funcionara.
    if (finalStudyTime !== null && finalBreakTime === null && finalRepTimes === null) {
        timerInactive.classList.add('animate__animated', 'animate__bounceOutLeft');
        await wait(500);
        startTimer();
    }
    else if (finalStudyTime !== null && finalBreakTime !== null && finalRepTimes !== null) {
        timerInactive.classList.add('animate__animated', 'animate__bounceOutLeft');
        await wait(500);
        startTimer();
    }
    else {
        document.getElementById('error').style.display = 'flex';
    }

});



// Funcion para cuando finalice el temporizador solo
async function endTimer(repSum) {


    // inicio horas y minutos en 0
    hour = 0;
    minutes = 0;

    // detengo los intervalos
    clearInterval(intervalId);
    intervalId = null;

    // creo una variable con valor la cantidad de tiempo que se elegio para estudiar multiplicado la cantidad de veces que se repitio
    var timeFinished = (finalRepTimes == 0) ? studyTime : studyTime + repSum;

    // Si el tiempo transcurrido es mayor a 60, los minutos se convertira en horas para la variable correspondiente y se hara la transformacion correcta a la cantidad de minutos transcurridos.
    // los demas if son para cada uno de los casos si es mayor o menor de 60 el tiempo transcurrido
    if (timeFinished > 60) {
        hour = Math.floor(timeFinished / 60);
        var aux = (timeFinished / 60) - hour;
        minutes = aux * 60;
    }
    else if (timeFinished == 60) {
        hour = Math.floor(timeFinished / 60);
        timeFinished = timeFinished - hour;
    }
    else if (timeFinished < 60) {
        minutes = timeFinished;
    }

    //si horas y minutos son mayores a 0 se imprimiran ambos
    if (hour != 0 && minutes != 0) {

        // codigo para colocar las 's' debidamente
        if (hour > 1 && minutes > 1) {
            timeDone.innerHTML = hour + ' horas y <br>' + minutes + ' minutos';
        }
        else if (hour > 1 && minutes == 1) {
            timeDone.innerHTML = hour + ' horas y <br>' + minutes + ' minuto';
        }
        else if (hour == 1 && minutes > 1) {
            timeDone.innerHTML = hour + ' hora y <br>' + minutes + ' minutos';
        }

    }
    // si minutos es 0 no se imprimira
    else if (hour != 0 && minutes == 0) {

        // codigo para colocar las 's' debidamente
        if (hour > 1) {
            timeDone.innerHTML = hour + ' horas';
        }
        else if (hour == 1) {
            timeDone.innerHTML = hour + ' hora';
        }

    }

    // si hora es 0 no se imprimira
    else if (hour == 0 && minutes != 0) {

        // codigo para colocar las 's' debidamente
        if (minutes > 1) {
            timeDone.innerHTML = minutes + ' minutos';
        }
        else if (minutes == 1) {
            timeDone.innerHTML = minutes + ' minuto';
        }

    }
    // si ambos son 0 solo se imprimira minutos
    else {
        timeDone.innerHTML = minutes + ' minutos';
    }

    timerActive.classList.add('animate__animated', 'animate__bounceOutLeft');
    await wait(500);

    // oculto el temporizador activo y muestro la interfaz para cuando termina el temporizador
    timerActive.style.display = 'none';
    timerDone.style.display = 'flex';

    // le remuevo la trnasicion de salida al temporizador activo
    timerActive.classList.remove('animate__animated', 'animate__bounceOutLeft');

}

async function printTimeDone(timeFinishedValue, hourValue, minutesValue, secondsValue) {

    // // Si el tiempo transcurrido es mayor a 60, los minutos se convertira en horas para la variable correspondiente y se hara la transformacion correcta a la cantidad de minutos transcurridos.
    // los demas if son para cada uno de los casos si es mayor o menor de 60 el tiempo transcurrido
    if (timeFinishedValue > 60) {
        hourValue = Math.floor(timeFinishedValue / 60);
        var aux = (timeFinishedValue / 60) - hourValue;
        minutesValue = Math.round(aux * 60);
    }
    else if (timeFinishedValue == 60) {
        hourValue = Math.floor(timeFinishedValue / 60);
        timeFinishedValue = timeFinishedValue - hourValue;
    }
    else if (timeFinishedValue < 60) {
        hourValue = 0;
        minutesValue = timeFinishedValue;
    }

    // si segundos es diferente a 0, es decir no se ha culminado la totalidad del minuto, no se cuenta
    if (secondsValue != 0) {
        minutesValue--;
    }

    // si horas y minutos son mayores a 0 se imprimiran ambos
    if (hourValue != 0 && minutesValue != 0) {

        // codigo para colocar las 's' debidamente
        if (hourValue > 1 && minutesValue > 1) {
            timeDone.innerHTML = hourValue + ' horas y <br>' + minutesValue + ' minutos';
        }
        else if (hourValue > 1 && minutesValue == 1) {
            timeDone.innerHTML = hourValue + ' horas y <br>' + minutesValue + ' minuto';
        }
        else if (hourValue == 1 && minutesValue > 1) {
            timeDone.innerHTML = hourValue + ' hora y <br>' + minutesValue + ' minutos';
        }

    }
    // si minutos es 0 no se imprimira
    else if (hourValue != 0 && minutesValue == 0) {

        // codigo para colocar las 's' debidamente
        if (hourValue > 1) {
            timeDone.innerHTML = hourValue + ' horas';
        }
        else if (hourValue == 1) {
            timeDone.innerHTML = hourValue + ' hora';
        }

    }
    // si horas es 0 no se imprimira
    else if (hourValue == 0 && minutesValue != 0) {

        // codigo para colocar las 's' debidamente
        if (minutesValue > 1) {
            timeDone.innerHTML = minutesValue + ' minutos';
        }
        else if (minutesValue == 1) {
            timeDone.innerHTML = minutesValue + ' minuto';
        }

    }
    // si ambos son 0 solo se imprimira minutos
    else {
        timeDone.innerHTML = minutesValue + ' minutos';
    }


    // le a;ado el temporizador activo la transicion de salida.
    timerActive.classList.add('animate__animated', 'animate__bounceOutLeft');
    await wait(500);

    // oculto el temporizador activo y muestro la interfaz para cuando termina el temporizador
    timerActive.style.display = 'none';
    timerDone.style.display = 'flex';

    timerActive.classList.remove('animate__animated', 'animate__bounceOutLeft');

    timerTexts.forEach(function (element) {
        if (element.classList.contains('timePaused-color')) {
            element.classList.remove('timePaused-color');
        }
    });

   
}



