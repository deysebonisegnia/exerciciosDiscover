    const booksByCategory = [
    {
        category:"Riqueza",
        books:[
            {
                title:"Os segredos da mente milionária",
                author:"T.Harv Eker",
            },
            {
                title:"O homem mais rico da babilonia",
                author:"George s clason",
            },
            {
                title: "Pai rico,pai pobre",
                author: "Robert t.kiyosaki e sharon l. lechter",
            }
        ],
    },
    {
        category:"Inteligência Emocional",
        books:[
            {
                title:"Você é insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade _ Como enfrentar o mal do século",
                author:"Augusto Cury",

            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covery",
            },

        ],
    },
];
const TotalCategories = booksByCategory.length
    console.log(TotalCategories);
    for (let {} of booksByCategory){
        console.log('Total de livros da categoria:,category.category')
        console.log(category.books.length)
    }
    function countAuthors(){
        let authors = [];
        for(let category of booksByCategory){
            for (let book of category.books){
                if(authors.indexOf(book.author) == -1){
                    authors.push(book.author)


                }
            }

            
        }
        console.log ("Total de autores:",authors.length)
    }
    countAuthors();

    function booksOfAugustoCury(){
        let books = [];
        for(let category of booksByCategory){
            for (let book of category.books){
                if( book.author === 'Augusto Cury'){
                    books.push(book.title)
                }
            }
        }
        console.log("livros do autor")
    }











