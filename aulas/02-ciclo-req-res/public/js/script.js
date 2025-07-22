document.querySelector('form').addEventListener('submit', enviarFormulario);

async function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email }),
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }

        const data = await response.json();
        alert(`Usuário ${data.nome} adicionado com sucesso!`);
    } catch (error) {
        console.log('Erro', error);
        alert('Ocorreu um erro ao enviar os dados.');
    }
}
