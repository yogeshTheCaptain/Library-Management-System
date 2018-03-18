function GetAllBooks(){

	let books = [
                    {title:'Mathematics',author:'R.D.Sharma',available:true},
                    {title:'A Farewell to Arms',author:'Ernest',available:false},
                    {title:'I know Why the Caged Bird Sings',author:'Maya',available:false} 
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

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
