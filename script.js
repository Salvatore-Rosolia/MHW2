/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const risposte = {};
const elements = document.querySelectorAll('.choice-grid div');
const risultato  = document.querySelector('#risultato');


for(const element of elements) {
    element.addEventListener('click', press);
}

function press(event) {
    let selected = event.currentTarget;
    selected.classList.remove('cornice');
    selected.classList.add('selezione');
    selected.classList.remove('opaco');
    selected.querySelector('.checkbox').src = 'images/checked.png';

    for(const ele of elements) {
        if(selected.dataset.questionId == ele.dataset.questionId && selected.dataset.choiceId != ele.dataset.choiceId) {
            ele.classList.add('opaco');
            ele.querySelector('.checkbox').src = 'images/unchecked.png';
            ele.classList.remove('selezione');
        }
    }
    sel_value(selected);
}




function pressReset(event){
    risultato.classList.remove('dec');
    risultato.classList.add('hidden'); 
     for (const conta in risposte) {

        delete risposte[conta];
    }


    
    for(const ele of elements){
        ele.addEventListener('click',press);
        ele.classList.remove('opaco');
        ele.querySelector(".checkbox").src='./images/unchecked.png';
        ele.classList.remove('selezione'); 
    }
}




function sel_value(selected){
    risposte[selected.dataset.questionId]=selected.dataset.choiceId;
    console.log(risposte);
    let i=0;
    for(let ris in risposte)
        i++;
    console.log(i)
    if(i==3){
        for(const elem of elements){
            elem.removeEventListener('click',press); 
        console.log('end');
        
        let risult;
        if(risposte['one']===risposte['two'] || risposte['one']===risposte['three']){
            risult = risposte['one'];
        } else if(risposte['two']===risposte['three']){
            risult = risposte['two'];
        } else { risult = risposte['one']; }
        
        console.log(risultato);

        const title=RESULTS_MAP[risult].title;
        const contents=RESULTS_MAP[risult].contents;
        console.log(title);
        console.log(contents);
        risultato.querySelector("h1").textContent=title;
        risultato.querySelector("p").textContent=contents;
        risultato.classList.remove('hidden');
        risultato.classList.add('dec');
        
    
        const resetta = document.querySelector('.button');
        
        resetta.addEventListener('click', pressReset);

    }
}

}





