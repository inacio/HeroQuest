//BONUS
///         1) Melhorar o sistema criando uma batalha real  até a morte de forma dinamica, 
//checando vida e determinando a vitória automaticamente em Loop até o final da batalha.
//          2) Criar Eventos e Interface html para o jogo, não necessitando de loop e 
//definição completa da batalha, tornando interativo e jogavel. Usando botões de ataque por exemplo.

//METODO -> Funcao que faz parte de objeto, logo o metodo referencia o objeto em si
// Funcao que nao faz parte de um objeto , referencia Global
class personagem {
    constructor(nome,vida,vida_atual,ataque){
        this.nome = nome;
        this.vida = vida;
        this.vida_atual = vida_atual;
        this.ataque = ataque;
        
    } 

     atacar(x){
         console.log(this.nome+" Ataca "+x.nome)  
         
         x.receberDano(Math.floor(Math.random() *this.ataque+1))
         
        }
        
        receberDano(x){
            this.vida_atual=this.vida_atual-x
            console.log(" e recebe "+x+" de Dano")
            if (x==this.ataque){
                console.log("Sofreu um *******************ATAQUE CRITICO***********************")
            }
            console.log("")
            if (this.vida_atual<1) {
                this.vida_atual=0;
                status();
                console.log(this.nome+" Moleu")
                end();
            }  
            
             
    }
}

var jogador = new personagem('[Sabio Qualhada]',100,100,20)
var monstro = new personagem("[Cutia do Mapiri]"   ,100,100,20)

function turno(){
    for (let i = 1; jogador.vida_atual!=0 && monstro.vida_atual!=0; i++) {  
        console.log("#####Turno: "+i);
        jogador.atacar(monstro);
        if (monstro.vida_atual!=0){
            monstro.atacar(jogador);
        }
    }
};
function status (){
    console.log(jogador.nome+" HP: "+jogador.vida_atual+" "+monstro.nome+" HP: "+monstro.vida_atual)
    console.log("");
}


function end (){
    console.log("######FIM#####");

}

turno();










