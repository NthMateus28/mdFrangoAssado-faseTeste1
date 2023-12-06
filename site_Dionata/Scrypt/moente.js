document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    const valorFinalElement = document.querySelector(".resultadoFinal");
    const precos = [45, 55, 45, 50, 48, 60, 3, 2, 6, 6, 15, 12];

    localStorage.clear();


    function calcularValorTotal() {
        let valorTotal = 0;

        products.forEach((product, index) => {
            const unidade = product.querySelector(".unidade");
            const quantidade = parseInt(unidade.textContent);
            const precoUnitario = precos[index];
            valorTotal += quantidade * precoUnitario;
        });

        return valorTotal.toFixed(2);
    }

    function atualizarValorFinal() {
        const valorTotal = calcularValorTotal();
        valorFinalElement.textContent = valorTotal;
    }

    function salvarProduto(index, quantidade) {
        const product = document.querySelectorAll(".product")[index];
        const titleProduct = product.querySelector(".titleProduct");
        const unidade = product.querySelector(".unidade");

        if (titleProduct && unidade) {
            const nome = titleProduct.childNodes[0].nodeValue.trim();
            const valor = parseFloat(titleProduct.textContent.split("R$")[1]);
            const produto = {
                nome: nome,
                valor: valor,
                quantidade: quantidade,
            };

            if (quantidade === 0) {
                localStorage.removeItem(`produto_${index}`);
            } else {
                localStorage.setItem(
                    `produto_${index}`,
                    JSON.stringify(produto)
                );
            }
        } else {
            console.error(
                "Elementos não encontrados para o produto de índice " + index
            );
        }
    }

    products.forEach((product, index) => {
        const btnAdicionar = product.querySelector(".btnAdicionar");
        const btnRetirar = product.querySelector(".btnRetirar");
        const unidade = product.querySelector(".unidade");

        btnAdicionar.addEventListener("click", () => {
            let valorAtual = parseInt(unidade.textContent);
            unidade.textContent = valorAtual + 1;

            salvarProduto(index, valorAtual + 1);
            atualizarValorFinal();
        });

        btnRetirar.addEventListener("click", () => {
            let valorAtual = parseInt(unidade.textContent);
            if (valorAtual > 0) {
                unidade.textContent = valorAtual - 1;
                salvarProduto(index, valorAtual - 1);
                atualizarValorFinal();
            }
        });
    });
});
