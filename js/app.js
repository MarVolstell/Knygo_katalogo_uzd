// Data structure for book inventory
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Programavimas linksmai",
                "ISBN": "IT-12345",
                "publishing_year": 2019, // New book
                "pages": 250,
                "quantity": 12,
                "price": 25
            },
            {
                "title": "JavaScript for Beginners",
                "ISBN": "IT-12346",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Web Development 101",
                "ISBN": "IT-12347",
                "publishing_year": 2018,
                "pages": 350,
                "quantity": 5,
                "price": 40
            },
            {
                "title": "AI Programming",
                "ISBN": "IT-12348",
                "publishing_year": 2021,
                "pages": 450,
                "quantity": 10,
                "price": 50
            },
            {
                "title": "Advanced Python",
                "ISBN": "IT-12349",
                "publishing_year": 2017,
                "pages": 500,
                "quantity": 7,
                "price": 60
            }
        ]
    },
    {
        "category": "Fizika",
        "books": [
            {
                "title": "Mechanika ir Judėjimas",
                "ISBN": "PH-12345",
                "publishing_year": 2015,
                "pages": 320,
                "quantity": 15,
                "price": 20
            },
            {
                "title": "Elektromagnetizmas",
                "ISBN": "PH-12346",
                "publishing_year": 2019,
                "pages": 280,
                "quantity": 10,
                "price": 22
            },
            {
                "title": "Šviesos teorija",
                "ISBN": "PH-12347",
                "publishing_year": 2020,
                "pages": 200,
                "quantity": 18,
                "price": 25
            },
            {
                "title": "Termodinamika",
                "ISBN": "PH-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 12,
                "price": 30
            },
            {
                "title": "Kvantinė fizika",
                "ISBN": "PH-12349",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 40
            }
        ]
    },
    {
        "category": "Literatūra",
        "books": [
            {
                "title": "Shakespeare: Asmenybė ir kūryba",
                "ISBN": "LT-12345",
                "publishing_year": 2016,
                "pages": 350,
                "quantity": 20,
                "price": 15
            },
            {
                "title": "Poezija ir pasaka",
                "ISBN": "LT-12346",
                "publishing_year": 2018,
                "pages": 280,
                "quantity": 30,
                "price": 18
            },
            {
                "title": "Romanų pasaulis",
                "ISBN": "LT-12347",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 25,
                "price": 22
            },
            {
                "title": "Klasikiniai kūriniai",
                "ISBN": "LT-12348",
                "publishing_year": 2015,
                "pages": 500,
                "quantity": 10,
                "price": 35
            },
            {
                "title": "Moderni literatūra",
                "ISBN": "LT-12349",
                "publishing_year": 2020,
                "pages": 350,
                "quantity": 8,
                "price": 28
            }
        ]
    },
    {
        "category": "Matematika",
        "books": [
            {
                "title": "Algebra pradedantiesiems",
                "ISBN": "MA-12345",
                "publishing_year": 2016,
                "pages": 250,
                "quantity": 18,
                "price": 15
            },
            {
                "title": "Matematikos pagrindai",
                "ISBN": "MA-12346",
                "publishing_year": 2018,
                "pages": 300,
                "quantity": 12,
                "price": 20
            },
            {
                "title": "Geometrijos pradžiamokslis",
                "ISBN": "MA-12347",
                "publishing_year": 2019,
                "pages": 350,
                "quantity": 14,
                "price": 25
            },
            {
                "title": "Kalkuliacija",
                "ISBN": "MA-12348",
                "publishing_year": 2021,
                "pages": 400,
                "quantity": 10,
                "price": 30
            },
            {
                "title": "Statistika ir tikimybė",
                "ISBN": "MA-12349",
                "publishing_year": 2020,
                "pages": 500,
                "quantity": 5,
                "price": 40
            }
        ]
    },
    {
        "category": "Psichologija",
        "books": [
            {
                "title": "Psichologijos pagrindai",
                "ISBN": "PS-12345",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 25,
                "price": 20
            },
            {
                "title": "Kognityvinė psichologija",
                "ISBN": "PS-12346",
                "publishing_year": 2019,
                "pages": 320,
                "quantity": 12,
                "price": 22
            },
            {
                "title": "Psichologija ir žmogaus elgsena",
                "ISBN": "PS-12347",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 10,
                "price": 25
            },
            {
                "title": "Psichoterapija",
                "ISBN": "PS-12348",
                "publishing_year": 2021,
                "pages": 350,
                "quantity": 8,
                "price": 30
            },
            {
                "title": "Socialinė psichologija",
                "ISBN": "PS-12349",
                "publishing_year": 2020,
                "pages": 280,
                "quantity": 15,
                "price": 28
            }
        ]
    }
];





const buttons = document.querySelectorAll('button')
const links = document.querySelectorAll('article')
const searchButton = document.querySelector('.search button')
const searchResultContainer = document.querySelector('.jsSearchLinkContainer')






;//Kategoriju rodymas
(()=>{
const why = (h)=>{
    let hell = ()=>{
    for(let book of inventory[h].books)
        {
            let sigh = document.createElement('li')
            links[h].appendChild(sigh)
            let bookTitle = document.createElement('a')
            bookTitle.setAttribute("href", "#")
            bookTitle.textContent = book.title
            sigh.appendChild(bookTitle)
        }
            let reverseBaby = ()=>{
            while(sigh = links[h].firstChild)
            { 
                links[h].removeChild(sigh)
            }
            buttons[h].removeEventListener('click', reverseBaby)
            buttons[h].addEventListener('click', hell)
        }
        buttons[h].removeEventListener('click', hell)
        buttons[h].addEventListener('click', reverseBaby)
}
    buttons[h].addEventListener('click', ()=> hell(h), {once: true})
}
for (let category in inventory)
    {
        why(category)
    }
})()
;



//Search funkcija
searchButton.addEventListener('click', ()=>{
    let inputValue = document.querySelector('input').value
    let allBooks = []
    let allBookValues = []
    let i = 0
    let filteredTitleIndex = []
    let filteredTitles = []


    //get every array in allBooks and every value in idkman
    for(let category of inventory){
        for(let book of category.books){
            allBooks.push(Object.values(book))
                for(let bookValues of Object.values(book))
                    allBookValues.push(bookValues)
        }
    }
    let filteredBook = allBookValues.filter((flt)=>flt == inputValue)


    if(isNaN(parseInt(inputValue))){
        console.log("ITS A MIRACLE")
    }else inputValue = parseInt(inputValue)

    for(let theBooksArray of allBooks){
        i = i + 1
        let temp = theBooksArray.indexOf(inputValue)
        //console.log(temp)
        if(temp != -1){
            filteredTitleIndex.push(i)
        }
    }

    console.log(filteredTitles)

    for (let titleIndex of filteredTitleIndex)
        {
            filteredTitles.push(allBooks[titleIndex - 1][0])
        }
    if (filteredBook == "")
        {
            while(searchResultContainer.firstChild)
            {
                searchResultContainer.removeChild(searchResultContainer.firstChild)
            }
            let searchResult = document.createElement('a')
            searchResult.textContent = "No results found"
            searchResultContainer.appendChild(searchResult)
            return 0
        }
    while(searchResultContainer.firstChild)
        {
            searchResultContainer.removeChild(searchResultContainer.firstChild)
        }
    for(let bah in filteredTitles)
        {
            let searchResult = document.createElement('a')
            searchResult.setAttribute("href", "#")
            searchResult.textContent = filteredTitles[bah]
            searchResultContainer.appendChild(searchResult)
        }
})
