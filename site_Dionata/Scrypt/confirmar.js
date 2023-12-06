document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table"); // Seleciona a tabela onde os produtos serão inseridos
    let finalPrice = document.getElementById("finalPrice"); // Elemento que exibirá o preço final
    let finalFrete = document.getElementById("finalFrete"); // Elemento que exibirá o valor do frete
    let finalTotal = document.getElementById("finalTotal"); // Elemento que exibirá o total

    const teleEntregaRadio = document.getElementById("teleEntrega");
    const tirarBalcaoRadio = document.getElementById("tirarBalcao");
    const bairrosLabel = document.querySelector('label[for="bairros"]');
    const bairrosSelect = document.getElementById("bairros");
    const enderecoLabel = document.querySelector('label[for="endereco"]');
    const enderecoInput = document.getElementById("endereco");
    const formaPagamentoLabel = document.querySelector(
        'label[for="formaPagamento"]'
    );
    const formaPagamentoSelect = document.getElementById("formaPagamento");

    function mostrarOcultarCamposTeleEntrega() {
        if (teleEntregaRadio.checked) {
            // Se Tele-Entrega estiver selecionado, mostra os elementos
            bairrosLabel.style.display = "block";
            bairrosSelect.style.display = "block";
            enderecoLabel.style.display = "block";
            enderecoInput.style.display = "block";
            formaPagamentoLabel.style.display = "block";
            formaPagamentoSelect.style.display = "block";
        } else {
            // Caso contrário, esconde os elementos
            bairrosLabel.style.display = "none";
            bairrosSelect.style.display = "none";
            enderecoLabel.style.display = "none";
            enderecoInput.style.display = "none";
            formaPagamentoLabel.style.display = "none";
            formaPagamentoSelect.style.display = "none";
        }
    }

    function calcularFrete() {
        const valorBairro =
            bairrosSelect.options[bairrosSelect.selectedIndex].getAttribute(
                "data-frete"
            );
        finalFrete.textContent = `R$${valorBairro}`;
        calcularTotal();
    }

    function calcularTotal() {
        const valorProdutos = parseFloat(
            finalPrice.textContent.replace("R$", "")
        );
        const valorFrete = parseFloat(finalFrete.textContent.replace("R$", ""));
        const total = valorProdutos + valorFrete;
        finalTotal.textContent = `R$${total.toFixed(2)}`;
    }

    teleEntregaRadio.addEventListener("change", () => {
        mostrarOcultarCamposTeleEntrega();
        calcularFrete();
    });

    tirarBalcaoRadio.addEventListener("change", () => {
        mostrarOcultarCamposTeleEntrega();
        calcularFrete();
    });

    bairrosSelect.addEventListener("change", calcularFrete);

    // Chama o evento de mudança inicialmente para esconder os elementos se Tele-Entrega não estiver selecionado
    mostrarOcultarCamposTeleEntrega();

    window.onload = () => {
        let total = 0;

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith("produto_")) {
                let produto = JSON.parse(localStorage.getItem(key));
                total += produto.valor * produto.quantidade;

                // Cria uma nova linha na tabela para cada produto
                let newRow = document.createElement("tr");
                let nameCell = document.createElement("td");
                let valorCell = document.createElement("td");
                let quantidadeCell = document.createElement("td");

                // Define o conteúdo das células com os valores do produto
                nameCell.textContent = produto.nome;
                valorCell.textContent = `R$${(
                    produto.valor * produto.quantidade
                ).toFixed(2)}`;
                quantidadeCell.textContent = produto.quantidade;

                newRow.appendChild(nameCell);
                newRow.appendChild(valorCell);
                newRow.appendChild(quantidadeCell);
                table.appendChild(newRow);
            }
        }

        finalPrice.textContent = `R$${total.toFixed(2)}`;
        calcularTotal(); // Chama o cálculo do total após carregar os produtos
    };
});
