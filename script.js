emailjs.init("ckXAyc2-50F_UnTyZ");

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    const templateParams = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        corso: document.getElementById("corso").value
    };

    emailjs.send("service_wibqaba", "template_95z6dad", templateParams)
        .then(() => {
            document.getElementById("form").style.display = "none";
            document.getElementById("form").insertAdjacentHTML("afterend", `
                <div style="text-align:center; padding: 40px;">
                    <h3 style="color: var(--rosso); font-family: 'Bebas Neue', sans-serif; font-size: 2em; letter-spacing: 3px;">ISCRIZIONE CONFERMATA!</h3>
                    <p style="color: var(--testo-muted); margin-top: 10px;">Ti contatteremo presto per confermare la tua iscrizione.</p>
                </div>
            `);
        })
        .catch(err => {
            alert("Errore nell'invio, riprova più tardi.");
            console.error(err);
        });
});