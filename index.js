var cronometro = (function(){

    var display = document.getElementById('temporizador');
    var i = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    var parado = true


    function iniciar(){
        //Não permite ter mais de um intervalo
        if (parado){
            parado = false
            interval = setInterval(contador, 1000);
        }
    }

    function parar(){
        parado = true
        clearInterval(interval);
    }

    function zerar(){
        parar()
        i = -1;
        
        contador() //Atualiza display
    }

    function contador(){
        i++
        segundos = i;
        
        //Converte segundos totais em horas/minutos/segundos
        horas = Math.floor(segundos / 3600)
        minutos = Math.floor(segundos % 3600 / 60)
        segundos = (segundos % 3600 % 60)

        display.textContent =  `${String(horas).padStart(2,'0')}:${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
    }

    return {
        iniciar,
        parar,
        zerar,
    }

})()