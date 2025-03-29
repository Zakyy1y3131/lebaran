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
    btn.style.position = "relative";
    if (flag == 1) {
        btn.style.left = "50px";
        btn.style.top = "20px";
        flag = 2;
    } else if (flag == 2) {
        btn.style.left = "-50px";
        btn.style.top = "-20px";
        flag = 3;
    } else if (flag == 3) {
        btn.style.left = "0px";
        btn.style.top = "0px";
        flag = 1;
    }
}
