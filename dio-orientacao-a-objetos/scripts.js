
class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada";
        }
        
        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'corrente';
        this._cartaCredito = cartaoCredito;
    }

    get cartaoCredito(){  
        return this._cartaCredito;
    }

    set cartaoCredito(valor){ // false ou true
        this._cartaCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
   
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if (valor > 500){
            return "Operação negada!"
        }
        this._saldo -= valor;
    }
}