// Selecionar todos os links de perfil
const perfis = document.querySelectorAll('.perfil');

// Adicionar event listener para cada perfil
perfis.forEach(perfil => {
    perfil.addEventListener('click', (event) => {
        // Obter o nome do perfil
        const nome = perfil.querySelector('.nome-perfil').textContent;

        // Obter a imagem do perfil
        const imagem = perfil.querySelector('img').src;

        // Obter o alt da imagem
        const alt = perfil.querySelector('img').alt;

        // Criar objeto do perfil ativo
        const perfilAtivo = {
            nome: nome,
            imagem: imagem,
            alt: alt
        };

        // Armazenar no localStorage
        localStorage.setItem('perfilAtivo', JSON.stringify(perfilAtivo));
    });
});