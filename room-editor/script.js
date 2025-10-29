// Transcription code...
function transcript(input) {
    const inputDom = document.getElementById(`${input}-input`);
    let outputDom;
    
    if (input === 'braille'){
        outputDom = document.getElementById('one-line-input');
        outputDom.value = inputDom.value.replace(/\n/g, "<br>");
    } else if (input === 'text'){
        outputDom = document.getElementById('braille-input');
        let result = [];
        const braille = [10241, 10243, 10249, 10265, 10257, 10251, 10267, 10259, 10250, 10266, 10245, 10247, 10253, 10269, 10261, 10255, 10271, 10263, 10254, 10270, 10277, 10279, 10298, 10285, 10301, 10293];
        for(let i = 0; i < inputDom.value.length; i++){
            if (inputDom.value[i] === ' ') {result[i] = String.fromCharCode(10240); continue};
            result[i] = String.fromCharCode(braille[inputDom.value[i].toLowerCase().charCodeAt() - 97]);
        }
        outputDom.value = result.join('');
    } else if (input === 'one-line'){
        outputDom = document.getElementById('braille-input');
        outputDom.value = inputDom.value.replace(/<br>/g, "\n");
    }
    inputDom.value = ''; // Clear input after everything.
}

// Traffic light animations...
window.addEventListener("DOMContentLoaded", (event) => {
    let brailleButton = document.getElementById('braille-send'), textButton = document.getElementById('text-send');

    brailleButton.addEventListener("click", function(){
        let index = 0;
        document.querySelectorAll('.traffic-light div').forEach(function(el){

            el.addEventListener('animationend', function(){
                el.classList.remove('light-spot');
            })
            el.style.animationDelay = index + 's';
            el.classList.add('light-spot');
            index += 0.5;
        });


    });

    textButton.addEventListener("click", function(){
        let index = 2;
        document.querySelectorAll('.traffic-light div').forEach(function(el){

            el.addEventListener('animationend', function(){
                el.classList.remove('light-spot');
            })
            el.style.animationDelay = index + 's';
            el.classList.add('light-spot');
            index -= 0.5;
        });


    });
});