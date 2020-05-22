class personagem {
    constructor(nome,vida,vida_atual,ataque){
        this.nome = nome;
        this.vida = vida;
        this.vida_atual = vida_atual;
        this.ataque = ataque;
        
    } 

     atacar(x){
         console.log(this.nome+" Ataca "+x.nome)  
         x.receberDano(Math.floor(Math.random() *this.ataque+1),this)
        }
        
    receberDano(x,objeto_ataque){
        this.vida_atual=this.vida_atual-x
        console.log(" e recebe "+x+" de Dano")
        if (x==this.ataque){
            console.log("Sofreu um *******************ATAQUE CRITICO***********************")
        }
        console.log("")
        if (this.vida_atual<1) {
            this.vida_atual=0;
            
            console.log(this.nome+" Moleu")
            end();
            objeto_ataque
        }  
        
    }
    cure(x){
        var magic = (this.ataque/2);
        var heal = (Math.floor(Math.random() *magic+1));
        this.vida_atual=this.vida_atual + heal;
        console.log('*x*x*x*')
        console.log(x.nome+" usa Cura e recupera "+ heal+ " de HP")
        
    }
            
             
}

var jogador = new personagem('[Sabio Qualhada]',100,100,20)
var monstro = new personagem("[Cutia do Mapiri]"   ,100,100,20)


function turno(){
    for (let i = 1; jogador.vida_atual!=0 && monstro.vida_atual!=0; i++) {  
        console.log("#####Turno: "+i);
        if (jogador.vida_atual<20){
            jogador.cure(jogador);
        }  
        else {

            jogador.atacar(monstro);
        }      

        if (monstro.vida_atual!=0){
            monstro.atacar(jogador);
        }
        status();
    }
};
function status (){
    console.log(jogador.nome+" HP: "+jogador.vida_atual+" "+monstro.nome+" HP: "+monstro.vida_atual)
    
}


function end (){
    status();
    console.log("######FIM#####");

}

turno();










