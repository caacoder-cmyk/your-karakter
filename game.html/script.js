// tombol start
document.getElementById("startBtn")?.addEventListener("click", function () {
  window.location.href = "quiz.html";
});

// data soal
let soalList = [
  {
    soal: "Kalau ada masalah kamu:",
    A: "Mikir dulu",
    B: "Langsung solusi",
    C: "Curhat",
    D: "Diam"
  },
  {
    soal: "Kamu lebih suka:",
    A: "Belajar",
    B: "Bikin sesuatu",
    C: "Ekspresi diri",
    D: "Hidup tenang"
  },
  {
    soal: "Kalau gagal kamu:",
    A: "Analisis",
    B: "Coba lagi",
    C: "Sedih 😭",
    D: "Terima"
  }
];

// skor
let skor = { A: 0, B: 0, C: 0, D: 0 };

// index soal
let index = 0;

// tampilkan soal
function tampilSoal() {
  document.getElementById("soal").innerText = soalList[index].soal;
  document.getElementById("btnA").innerText = soalList[index].A;
  document.getElementById("btnB").innerText = soalList[index].B;
  document.getElementById("btnC").innerText = soalList[index].C;
  document.getElementById("btnD").innerText = soalList[index].D;
}

// jawab
function jawab(pilihan) {
  skor[pilihan]++;
  index++;

  if (index < soalList.length) {
    tampilSoal();
  } else {
    tampilHasil();
  }
}

// tampil hasil
function tampilHasil() {
  let max = 'A';

  for (let key in skor) {
    if (skor[key] > skor[max]) {
      max = key;
    }
  }

  let nama = "";
  let gambar = "";
  let deskripsi = "";

  if (max === 'A') {
    nama = "🧠 Albert Einstein";
    gambar = "images/einstein.jpg";
    deskripsi = "Kamu tipe pemikir, logis, dan suka memahami dunia.";
  } 
  else if (max === 'B') {
    nama = "🚀 Elon Musk";
    gambar = "images/musk.jpg";
    deskripsi = "Kamu ambisius, penuh ide, dan suka tantangan.";
  } 
  else if (max === 'C') {
    nama = "🎤 Taylor Swift";
    gambar = "images/taylorswift.jpg";
    deskripsi = "Kamu ekspresif, perasa, dan kreatif.";
  } 
  else {
    nama = "🕊️ Mahatma Gandhi";
    gambar = "images/gandhi.jpg";
    deskripsi = "Kamu tenang, bijak, dan damai.";
  }

  document.getElementById("nama").innerText = nama;
  document.getElementById("gambar").src = gambar;
  document.getElementById("deskripsi").innerText = deskripsi;

  document.getElementById("hasil").style.display = "block";
}

// load pertama
if (document.getElementById("soal")) {
  tampilSoal();
}