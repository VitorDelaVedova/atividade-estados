var combo = document.getElementById('estados');

combo.addEventListener("change", function(){
    var div = document.querySelector('.form');
    var sigla = combo.options[combo.selectedIndex].value;
    
    var bandeira;
    var estado;
    
    if(sigla == "pr"){
        estado = 'Paraná';
        bandeira = 'Bandeiras/PR.png';

    }else if(sigla == "sc"){
        estado = 'Santa Catarina';
        bandeira = 'Bandeiras/SC.png';
    
    }else if(sigla == "rs"){
        estado = 'Rio Grande do Sul';
        bandeira = 'Bandeiras/RS.png';
    } 

    var removeImagem = document.getElementById('img');

    if (!!removeImagem) {
        div.removeChild(document.getElementById('img'));
        div.removeChild(document.querySelector('p'));
    }

    if (estado != undefined) {
        var p = document.createElement('p');
        p.innerText = estado;
        var img = document.createElement('img');
        img.setAttribute('src', bandeira);  
        img.setAttribute('id', 'img');
        img.setAttribute('class', 'bandeira');
        div.appendChild(p);
        div.appendChild(img);
    }
})

