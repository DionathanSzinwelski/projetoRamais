class Prefeitura{

    constructor() {
        this.arrayPrefeitura = [];
 }


salvar(){
   let prefeitura = this.lerdados();

   if(this.validaCampos(prefeitura)) {
       this.adicionar(prefeitura);
   }

   this.listaTabela();
}

listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0; i < this.arrayPrefeitura.length; i++ ) {
        let tr = tbody.insertRow();

        let td_ramal = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_setor = tr.insertCell();
        let td_anexo = tr.insertCell();
        let td_prefeitura = tr.insertCell();

        td_ramal.innerText = this.arrayPrefeitura[i].ramal;
        td_nome.innerText = this.arrayPrefeitura[i].nome;
        td_setor.innerText = this.arrayPrefeitura[i].setor;
        td_anexo.innerText = this.arrayPrefeitura[i].anexo;
        td_prefeitura.innerText = this.arrayPrefeitura[i].prefeitura;

        td_ramal.classList.add('center');
        td_nome.classList.add('center');
        td_setor.classList.add('center');
        td_anexo.classList.add('center');
        td_prefeitura.classList.add('center');

    }
}

adicionar(prefeitura) {
    this.arrayPrefeitura.push(prefeitura);
}

lerdados(){
    let prefeitura = {}

    prefeitura.ramal = document.getElementById('ramal').value;
    prefeitura.nome = document.getElementById('nome').value;
    prefeitura.setor = document.getElementById('setor').value;
    prefeitura.anexo = document.getElementById('anexo').value;
    prefeitura.prefeitura = document.getElementById('prefeitura').value;

    return prefeitura;
}

validaCampos() {
    let msg = '';

    if(prefeitura.ramal == ''){
        msg += '- Informe o ramal \n';
    }

    if(prefeitura.nome == ''){
        msg += '- Informe o nome \n';
    }

    if(prefeitura.setor == ''){
        msg += '- Informe o setor \n';
    }

    if(prefeitura.anexo == ''){
        msg += '- Informe o anexo \n';
    }

    if(prefeitura.prefeitura == ''){
        msg += '- Informe a prefeitura \n';
    }

    if(msg != '') {
        alert(msg);
        return false
    }

    return true;

}

consultar(){
    alert('asas'); 
}

}
var prefeitura = new Prefeitura();