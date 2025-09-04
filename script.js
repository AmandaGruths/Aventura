const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar')

avanca.forEach(button =>{
 button.addEventListener('clik',function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAtribute('data-proximo');

    atual.classList.remove('ativo');
    cont proximoElemento= document.getElementById(proximoPasso);

    if(proximoElemento){
        proximoElemento.classList.add('ativo');
    } else {
            console.error(`Elemento com ID "${proximoPasso}" não encontrado.`)
    }
  });
});
