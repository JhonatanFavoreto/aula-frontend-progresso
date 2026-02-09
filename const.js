const pessoa = {
    nome: "Jhonatan",
    falar: function() {
    console.log("Meu nome é " + this.nome);
    }
};

pessoa.falar(); // "Meu nome é Jhonatan"

const usuario = {
    nome: "João",
    logar: function() {
        setTimeout(() => {
            console.log("Olá, meu nome é " + this.nome);
        }, 1000);
    }
};

usuario.logar();

const humano = {
    nome: "Jhonatan",
    falar: () => {
        console.log("Meu nome é " + this.nome);
    }
};

humano.falar(); // "Meu nome é Jhonatan"


const pesoaaa = {
        nome: "Henrico",
        apresentar: function () {
            let self = this; // Armazena a referência ao objeto atual
            setTimeout(function () {
                console.log("Olá, meu nome é " + self.nome);
            }, 1000);
        }
};

        pesoaaa.apresentar(); // Output: Olá, meu nome é Henrico