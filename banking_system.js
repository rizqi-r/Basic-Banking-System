const saldoId = document.getElementById("totalSaldo");
saldoId.innerHTML = 0;
let saldo = 0;

class BankAccount {
    constructor(saldo) {
        this._saldo = saldo;
    }

    deposit(amount) {
        amount = Number(amount);
        if (!isNaN(saldoId.innerHTML)) {
            try {
                if (!isNaN(amount)) {
                    saldoId.innerHTML = "Saldo sedang diproses";
                    const processInterval = setInterval(() => {
                        saldoId.innerHTML += ".";
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(processInterval);
                        saldo += amount;
                        saldoId.innerHTML = saldo;
                        alert("Kamu telah setorkan tunai sebesar Rp. " + amount + " sekarang saldo mu Rp. " + saldo);
                    }, 3500);
                } else {
                    alert("Input hanya menerima angka!");
                    throw new Error("Kesalahan tipe data!");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Saldo sedang diproses!");
        }
    }
    
    withdraw(amount) {
        amount = Number(amount);
        if (!isNaN(saldoId.innerHTML)) {
            try {
                if (!isNaN(amount)) {
                    saldoId.innerHTML = "Saldo sedang diproses";
                    const processInterval = setInterval(() => {
                        saldoId.innerHTML += ".";
                    }, 1000);
                    setTimeout(() => {
                        clearInterval(processInterval);
                        if ((saldo - amount) < 0) {
                            alert("Saldo tidak cukup. Saldo mu sebesar Rp. " + saldo);
                        } else {
                            saldo -= amount;
                            saldoId.innerHTML = saldo;
                            alert("Kamu telah menarik tunai sebesar Rp. " + amount + " sekarang saldo mu Rp. " + saldo);
                        }
                    }, 3500);
                } else {
                    alert("Input hanya menerima angka!");
                    throw new Error("Kesalahan tipe data!");
                }
            } catch (error) {
                console.error(error);
            }

        } else {
            alert("Saldo sedang diproses!");
        }
    }
}

class Main extends BankAccount {
    constructor(saldo) {
        super(saldo);
    }

    menuScreen() {
        const menu = Number(window.prompt(`Saldo anda Rp. ${this._saldo}\n\n` + "Menu \n1. Setor tunai \n2. Tarik tunai \n3. Exit"));
        switch (menu) {
            case 1:
                const tambahSaldo = window.prompt("Berapa saldo yang ingin kamu setor");
                this.deposit(tambahSaldo);
                break;
            case 2:
                const kurangiSaldo = window.prompt("Berapa saldo yang ingin kamu tarik");
                this.withdraw(kurangiSaldo);
                break;
            case 3:
                break;
            default:
                alert("Menu Invalid");
                break;
        }   
    }
}

const start = () => new Main(saldo).menuScreen();
