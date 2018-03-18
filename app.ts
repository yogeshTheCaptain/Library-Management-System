function GetAllBooks(){

	let books = [
                    {title:'Ulysses'                         ,     author:'James'  ,  available:true  ,    category:Category.Fiction} ,
                    {title:'A Farewell to Arms'              ,     author:'Ernest' ,  available:false ,    category:Category.Fiction} ,
                    {title:'I know Why the Caged Bird Sings' ,     author:'Maya'   ,  available:false ,    category:Category.Poetry} ,
                    {title:'Moby Dick'                       ,     author:'Herman' ,  available:true  ,    category:Category.Fiction}
	            ];

	            return books;
}

function LogFirstAvailable(books): void{

	let numberOfBooks: number = books.length;
	let firstAvailable: string = '';

	for(let currentBook of books){
              
		if(currentBook.available){

               firstAvailable = currentBook.title ;
               break;    
		}
	}

	console.log('Total Books: '+ numberOfBooks);
	console.log('First Available: '+ firstAvailable);
}

enum Category{Biography,Poetry,Fiction,History,Children}

function GetBooktitlesbyCategory(categoryFilter: Category): Array<string>{

	console.log('Getting Books in Category: '+ Category[categoryFilter]);

	const allBooks = GetAllBooks();
	const filteredTitles:string[] = [] ;

	for(let currentBook of allBooks){

		if(currentBook.category === categoryFilter){
			filteredTitles.push(currentBook.title);
		}
	}
	return filteredTitles;
} 

function LogBookTitles(titles: string[]): void{

	for(let title of titles){
		console.log(title);
	}
}

const poetryBooks = GetBooktitlesbyCategory(Category.Poetry);
LogBookTitles(poetryBooks);
