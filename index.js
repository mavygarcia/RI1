const personagens = [ 
    {
        Nome: "Natasha Romannoff",
        codinome: "Viúvs negra",
        armaPrincipal: "Bastões de choque",
        armaSecundaria: "Braceletes",
        velocidade: 90,
        forca: 60,
        resistencia: 70,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        Nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura Mark LXXXV",
        armaSecundaria: "Raios Repulsores",
        velocidade: 90,
        forca: 80,
        resistencia: 80,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        Nome: "Thor",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 85,
        forca: 100,
        resistencia: 85,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        Nome: "T'Challa",
        codinome: "Pantera Negra",
        armaPrincipal: "Garras de Vibranium",
        armaSecundaria: "Traje de Absorção Cinética",
        velocidade: 92,
        forca: 84,
        resistencia: 90,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        Nome: "Bucky Barnes",
        codinome: "Soldado Invernal",
        armaPrincipal: "Braço de Vibranium",
        armaSecundaria: "Fuzil de Assalto",
        velocidade: 80,
        forca: 82,
        resistencia: 85,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        Nome: "thanos",
        codinome: "Thanos",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Espada de Lâmina Dupla",
        velocidade: 75,
        forca: 100,
        resistencia: 100,
        descricao: function (){
            return "Nome do personagem: " + this.Nome + "\n"
            + "Codinome do personagem: "  + this.codinome + "\n"
            + "Arma principal: "  + this.armaPrincipal + "\n"
            + "Arma secundaria: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia;
        }
    },

]
function comparacaoPersonagens(personagens) {
    for (let i = 0; i < personagens.length; i++) {
        for (let p = i + 1; p < personagens.length; p++) {
            const personagem1 = personagens[i];
            const personagem2 = personagens[p];

            console.log("comparação dos personagens:\n");
            console.log(personagem1.descricao());
            console.log("\nVs.\n");
            console.log(personagem2.descricao());
            console.log("------------------");

            
            if (personagem1.forca > personagem2.forca) {
                console.log(`${personagem1.codinome} vence em FORÇA.`);
            } else if (personagem2.forca > personagem1.forca) {
                console.log(`${personagem2.codinome} vence em FORÇA.`);
            } else {
                console.log("Empate em FORÇA.");
            }

            
            if (personagem1.velocidade > personagem2.velocidade) {
                console.log(`${personagem1.codinome} vence em VELOCIDADE.`);
            } else if (personagem2.velocidade > personagem1.velocidade) {
                console.log(`${personagem2.codinome} vence em VELOCIDADE.`);
            } else {
                console.log("Empate em VELOCIDADE.");
            }

            
            if (personagem1.resistencia > personagem2.resistencia) {
                console.log(`${personagem1.codinome} vence em RESISTÊNCIA.`);
            } else if (personagem2.resistencia > personagem1.resistencia) {
                console.log(`${personagem2.codinome} vence em RESISTÊNCIA.`);
            } else {
                console.log("Empate em RESISTÊNCIA.");
            }
            console.log("\n");
        }
    }
}

comparacaoPersonagens(personagens);