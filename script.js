function setAmount(amount) {
    document.getElementById("customAmount").value = amount;
    document.querySelectorAll(".amount-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.innerText == amount) btn.classList.add("active");
    });
}

function pay() {
    let amount = document.getElementById("customAmount").value;
    if (!amount || amount <= 0) {
        alert("Введите сумму оплаты");
        return;
    }

    document.getElementById("loading").style.display = "block";

    fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount })
    }).then(() => {
        setTimeout(() => {
            window.location.href = "https://app.mbank.kg/qr/#00020101021132440012c2c.mbank.kg01020210129967731144601302125204999953034175915SUNATKhODZhA%20A.6304cde6";
        }, 800);
    });
}
