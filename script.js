let flag = 1;

function f1() {
    Swal.fire({
        title: "Selamat Hari Raya!",
        text: "Berbuat khilaf adalah sifat, meminta maaf adalah kewajiban, dan kembalinya fitrah adalah tujuan.\n\nMarilah kita melunturkan ego dan saling membuka pintu maaf.\n\nSelamat Hari Raya Lebaran! Semoga Allah SWT kembali mempertemukan kita di bulan Ramadan berikutnya.",
        confirmButtonText: "Mohon Maaf Lahir Batin 🙏",
        confirmButtonColor: "#008cff"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "https://wa.me/6285150621367?text=Mohon%20Maaf%20Lahir%20Batin%20Bro%20!!!!!";
        }
    });
}

function f() {
    let btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    
    // Mendapatkan ukuran layar
    let maxX = window.innerWidth - btn.offsetWidth;
    let maxY = window.innerHeight - btn.offsetHeight;

    // Posisi acak dalam batas layar
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
