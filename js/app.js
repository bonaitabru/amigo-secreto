let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value.trim() === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(amigo.value.trim())) {
        alert('Este amigo já foi adicionado.');
        return;
    }

    amigos.push(amigo.value.trim());
    atualizarListaAmigos();
    amigo.value = '';
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => removerAmigo(index);

        li.appendChild(removeBtn);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos quatro amigos para realizar o sorteio.');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`; 
        } else {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`; 
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
