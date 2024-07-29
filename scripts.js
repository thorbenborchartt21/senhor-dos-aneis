document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('clickMeButton');
    button.addEventListener('click', function() {
        alert('Você clicou no botão!');
    });

    var loadImagesButton = document.getElementById('loadImagesButton');
    loadImagesButton.addEventListener('click', function() {
        document.getElementById('image1').src = document.getElementById('imageURL1').value;
        document.getElementById('image2').src = document.getElementById('imageURL2').value;
        document.getElementById('image3').src = document.getElementById('imageURL3').value;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    const bookDetails = document.getElementById('book-details');
    const bookTitle = document.getElementById('book-title');
    const bookText = document.getElementById('book-text');
    const closeBookButton = document.getElementById('closeBook');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    let currentBook = null;
    let currentPage = 0;

    const bookContents = {
        'hobbit': [
            'Página 1: Introdução...',
            'Página 2: A Jornada...',
            'Página 3: O Retorno...',
            // Adicione mais páginas conforme necessário
        ],
        'sociedade-do-anel': [
            'Página 1: A Sociedade do Anel...',
            'Página 2: A Jornada...',
            // Adicione mais páginas conforme necessário
        ],
        'duas-torres': [
            'Página 1: As Duas Torres...',
            'Página 2: Batalhas...',
            // Adicione mais páginas conforme necessário
        ],
        'retorno-do-rei': [
            'Página 1: O Retorno do Rei...',
            'Página 2: O Grande Final...',
            // Adicione mais páginas conforme necessário
        ],
        'leaf-by-niggle': [
            'Página 1: Leaf by Niggle...',
            'Página 2: O Progresso...',
            // Adicione mais páginas conforme necessário
        ],
        'smith-of-wootton-major': [
            'Página 1: Smith of Wootton Major...',
            'Página 2: A Lenda...',
            // Adicione mais páginas conforme necessário
        ],
        'silmarillion': [
            'Página 1: O Silmarillion...',
            'Página 2: As Criações...',
            // Adicione mais páginas conforme necessário
        ],
        'contos-inacabados': [
            'Página 1: Contos Inacabados...',
            'Página 2: Os Detalhes...',
            // Adicione mais páginas conforme necessário
        ],
        'filhos-de-hurin': [
            'Página 1: Os Filhos de Húrin...',
            'Página 2: O Destino...',
            // Adicione mais páginas conforme necessário
        ],
        'beren-e-luthien': [
            'Página 1: Beren e Lúthien...',
            'Página 2: O Amor...',
            // Adicione mais páginas conforme necessário
        ],
        'fall-of-gondolin': [
            'Página 1: The Fall of Gondolin...',
            'Página 2: A Queda...',
            // Adicione mais páginas conforme necessário
        ],
        'livro-dos-contos-perdidos': [
            'Página 1: O Livro dos Contos Perdidos...',
            'Página 2: As Histórias...',
            // Adicione mais páginas conforme necessário
        ],
        'livro-dos-contos-perdidos-ii': [
            'Página 1: O Livro dos Contos Perdidos, Volume II...',
            'Página 2: A Continuação...',
            // Adicione mais páginas conforme necessário
        ],
        'lendario-de-numenor': [
            'Página 1: O Lendário de Númenor...',
            'Página 2: Os Povos...',
            // Adicione mais páginas conforme necessário
        ],
        'livro-da-criacao-dos-aneis': [
            'Página 1: O Livro da Criação dos Anéis do Poder...',
            'Página 2: O Poder...',
            // Adicione mais páginas conforme necessário
        ],
        'contos-da-primeira-era': [
            'Página 1: Os Contos da Primeira Era...',
            'Página 2: A Era...',
            // Adicione mais páginas conforme necessário
        ],
        'cima-de-um-mundo': [
            'Página 1: O Cima de um Mundo...',
            'Página 2: O Mundo...',
            // Adicione mais páginas conforme necessário
        ],
        'quebra-de-gondolin': [
            'Página 1: A Queda de Gondolin...',
            'Página 2: A História...',
            // Adicione mais páginas conforme necessário
        ],
        'road-to-middle-earth': [
            'Página 1: The Road to Middle-earth...',
            'Página 2: A Jornada...',
            // Adicione mais páginas conforme necessário
        ],
        'annotated-hobbit': [
            'Página 1: The Annotated Hobbit...',
            'Página 2: Anotações...',
            // Adicione mais páginas conforme necessário
        ],
    };

    function showBookDetails(bookId) {
        currentBook = bookId;
        currentPage = 0;
        bookTitle.textContent = `Título do Livro: ${bookId}`;
        bookText.textContent = bookContents[bookId] ? bookContents[bookId][currentPage] : 'Conteúdo não disponível.';
        bookDetails.classList.add('show');
    }

    function updatePage(direction) {
        if (currentBook && bookContents[currentBook]) {
            if (direction === 'next') {
                if (currentPage < bookContents[currentBook].length - 1) {
                    currentPage++;
                }
            } else if (direction === 'prev') {
                if (currentPage > 0) {
                    currentPage--;
                }
            }
            bookText.textContent = bookContents[currentBook][currentPage];
        }
    }

    books.forEach(book => {
        book.addEventListener('click', () => {
            const bookId = book.getAttribute('data-book');
            showBookDetails(bookId);
        });
    });

    closeBookButton.addEventListener('click', () => {
        bookDetails.classList.remove('show');
    });

    prevPageButton.addEventListener('click', () => {
        updatePage('prev');
    });

    nextPageButton.addEventListener('click', () => {
        updatePage('next');
    });
});
