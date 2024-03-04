const saldoId = document.getElementById("totalSaldo");
let saldo = 0;
saldoId.innerHTML = 0;

function tambahSaldo() {
    const jumlah = Number(window.prompt("Berapa saldo yang ingin kamu tambah"));
    if (typeof jumlah === "number" && !isNaN(jumlah)) {
        saldo = saldo + jumlah;
        saldoId.innerHTML = saldo;
        alert("Kamu telah setorkan tunai sebesar Rp. " + jumlah + " sekarang saldo mu Rp. " + saldo);
    } else {
        alert("Input hanya menerima angka!");
    }
}

function kurangiSaldo() {
    const jumlah = Number(window.prompt("Berapa saldo yang ingin kamu kurangi"));
    if (typeof jumlah === "number" && !isNaN(jumlah)) {
        if ((saldo - jumlah) < 0) {
            alert("Saldo tidak cukup. Saldo mu sebesar Rp. " + saldo);
        } else {
            saldo = saldo - jumlah;
            saldoId.innerHTML = saldo;
            alert("Kamu telah menarik tunai sebesar Rp. " + jumlah + " sekarang saldo mu Rp. " + saldo);
        }
    } else {
        alert("Input hanya menerima angka!");
    }
}
