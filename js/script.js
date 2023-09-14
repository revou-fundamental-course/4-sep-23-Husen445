function hitungKeliling() {
    var Sisi = parseFloat(document.getElementById("inputField2").value);
    if (isNaN(Sisi)) {
        alert("Masukan Nilasi Sisi Untuk Mendapatkan Hasil Keliling Persegi")
    } else {
        var hasil = 4 * Sisi;

        document.getElementById("hasilkeliling").textContent = hasil;
    }
}

function HapusKeliling() {
    var Sisi = document.getElementById("inputField2");
    Sisi.value = "";

    var HapusKeliling = document.getElementById("hasilkeliling");
    HapusKeliling.textContent = "";

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "none";
    }
}

function hitungLuas() {
    var Sisi = parseFloat(document.getElementById("inputField1").value);
    if (isNaN(Sisi)) {
        alert("Masukan Nilai Sisi Untuk Mendapatkan Hasil Luas Persegi")
    } else {
        var hasil = Sisi * Sisi;

        document.getElementById("hasilluas").textContent = hasil;
    }
}

function HapusLuas() {
    var Sisi = document.getElementById("inputField1");
    Sisi.value = "";

    var HapusLuas = document.getElementById("hasilluas");
    HapusLuas.textContent = "";

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "none";
    }
}