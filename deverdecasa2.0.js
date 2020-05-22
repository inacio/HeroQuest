window.onload =initPage;
    function initPage(){
    var atualizaJ = document.getElementById("vidaJ")
    var atualizaM = document.getElementById("vidaM")
    atualizaJ.innerHTML = "HP: "+ jogador.vida_atual
    atualizaM.innerHTML = "HP: "+ monstro.vida_atual
    }      
    class personagem {
        constructor(nome,vida,vida_atual,ataque){
            this.nome = nome;
            this.vida = vida;
            this.vida_atual = vida_atual;
            this.ataque = ataque;
            
        } 

        atacar(x){
            if (this.vida_atual!=0 && x.vida_atual!=0){
                let dano = Math.floor(Math.random() *this.ataque+1)    
                
                if (dano==this.ataque){
                    dano = dano*2
                    x.vida_atual=x.vida_atual-dano 
                    console.log(this.nome + " ataca "+ x.nome+ " ACERTANDO UM ATAQUE CRITICO "+ dano);
                    let progresso= document.getElementById("estatus")
                    progresso.innerHTML =this.nome + " ataca "+ x.nome+ " ACERTANDO UM ATAQUE CRITICO "+ dano
                   
                }
                else {
                    x.vida_atual=x.vida_atual-dano 
                    console.log(this.nome + " ataca "+ x.nome+ " atingindo em "+ dano+" de dano");
                    let progresso= document.getElementById("estatus")
                    progresso.innerHTML =this.nome + " ataca "+ x.nome+ " atingindo "+ dano+ " de dano"
                    
                }
                if (x.vida_atual<1) {
                    x.vida_atual=0;
                    
                    console.log(x.nome+" Moleu")
                    end();
                }  
            }  
            
        }
            
        /*receberDano(x){
            console.log("TESTES " + globalThis.nome)
            this.vida_atual=this.vida_atual-x //recebe o dano Y
            console.log(this+"Ataca e recebe "+x+" de Dano")
            
         }*/
        cure(x){
            if (this.vida_atual!=0 && x.vida_atual!=0){
                var magic = (this.ataque/1);
                var heal = (Math.floor(Math.random() *magic+1));
                this.vida_atual=this.vida_atual + heal;
                console.log('*x*x*x*')
                console.log(this.nome+" usa Cura e recupera "+ heal+ " de HP")                      
        }          
        let progresso= document.getElementById("estatus")
        progresso.innerHTML ="Voce nao pode se curar estando morto"
        }                  
    }

    var jogador = new personagem('[Guerreiro]'    ,100,100,20)
    var monstro = new personagem("[Orc]"   ,100,100,20)

    function battle(){


        //for (let i = 1; jogador.vida_atual!=0 && monstro.vida_atual!=0; i++) {  
        /*let i =1    
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
            status();*/
    // }

    }


    function status (){
        initPage();
        
        
        console.log(jogador.nome+" HP: "+jogador.vida_atual+" "+monstro.nome+" HP: "+monstro.vida_atual)
        

        
    }

    function sleep(){
        if (monstro.vida_atual ==0){
            jogador.vida_atual =jogador.vida
            monstro.vida_atual = monstro.vida
            console.log("Voce dormiu e um novo inimigo  apareceu")
            let progresso= document.getElementById("estatus")
            progresso.innerHTML ="Voce dormiu e um novo inimigo  apareceu"
            status();

        }
        else if (jogador.vida_atual==0) {
            console.log("Uma fada ressucitou voce e curou seu inimigo")
            let progresso= document.getElementById("estatus")
            progresso.innerHTML ="Uma fada ressucitou voce e curou seu inimigo"
            jogador.vida_atual =jogador.vida
            monstro.vida_atual = monstro.vida
            status();
        }
        else {
            console.log("Voce nao pode descansar em batalha")
            let progresso= document.getElementById("estatus")
            progresso.innerHTML ="Voce nao pode descansar em batalha"
            
        }
    
    }

    function end (){
        status();
        console.log("######FIM#####");
        let progresso= document.getElementById("estatus")
        progresso.innerHTML ="###FIM##"
        

    }

    function ataqueInimigo(){
        monstro.atacar(jogador);
        status();
    }