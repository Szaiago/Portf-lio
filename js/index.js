const el_text = document.querySelector("#text");

(function(){
    const getText = el_text.textContent;

    const textSplit = getText.split('');

    el_text.textContent = "";

    textSplit.map((item,line)=> {
        setTimeout(() => {
            el_text.textContent += item;
        }, 120 * line);
    })
})();