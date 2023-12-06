var cart = Number(document.getElementById("cart").textContent);
var btnPrimeiro = document.getElementById("btnPrimeiro");
var btnSegundo = document.getElementById("btnSegundo");
var btnTerceiro = document.getElementById("btnTerceiro");

var mainPrimeiro = document.getElementById("mainPrimeiro");

var btnEnviar = document.getElementById("btnEnviar");

var resultado = cart;
let servico = [];

btnPrimeiro.addEventListener("click", (event) => {
    event.preventDefault();

    let index = servico.indexOf("Primeiro Serviço");

    console.log(servico);

    if (index != -1) {
        servico.splice(index, 1);
        console.log(servico);
        document.getElementById("mainPrimeiro").style.background = "";
        btnPrimeiro.style.background = "";
        btnPrimeiro.style.color = "";
        resultado--;
        document.getElementById("cart").textContent = resultado;
    } else {
        resultado++;
        servico.push("Primeiro Serviço");
        console.log(servico);

        document.getElementById("cart").textContent = resultado;

        document.getElementById("mainPrimeiro").style.background = "#a14548";
        btnPrimeiro.style.background = "#cc171c";
        btnPrimeiro.style.color = "#f0f8ff";
    }
});

btnSegundo.addEventListener("click", (event) => {
    event.preventDefault();

    let index = servico.indexOf("Segundo Serviço");

    console.log(servico);

    if (index != -1) {
        servico.splice(index, 1);
        console.log(servico);

        document.getElementById("mainSegundo").style.background = "";
        btnSegundo.style.background = "";
        btnSegundo.style.color = "";
        resultado--;
        document.getElementById("cart").textContent = resultado;
    } else {
        resultado++;
        servico.push("Segundo Serviço");

        document.getElementById("cart").textContent = resultado;

        document.getElementById("mainSegundo").style.background = "#a14548";
        btnSegundo.style.background = "#cc171c";
        btnSegundo.style.color = "#f0f8ff";
    }
});

btnTerceiro.addEventListener("click", (event) => {
    event.preventDefault();

    let index = servico.indexOf("Terceiro Serviço");

    console.log(servico);

    if (index != -1) {
        servico.splice(index, 1);
        console.log(servico);
        document.getElementById("mainTerceiro").style.background = "";
        btnTerceiro.style.background = "";
        btnTerceiro.style.color = "";
        resultado--;
        document.getElementById("cart").textContent = resultado;
    } else {
        resultado++;
        servico.push("Terceiro Serviço");

        document.getElementById("cart").textContent = resultado;

        document.getElementById("mainTerceiro").style.background = "#a14548";
        btnTerceiro.style.background = "#cc171c";
        btnTerceiro.style.color = "#f0f8ff";
    }
});

// btnEnviar.addEventListener("click", () => {
//     if (servico != "") {
//         var destino = `https://api.whatsapp.com/send/?phone=5554991965403&text=Olá%20gostaria%20do%20serviço%20${servico}&type=phone_number&app_absent=0`;

//         window.location.href = destino;
//     } else {
//         alert(`Selecione pelo menos um serviço!`);
//     }
// });
