package JAVA;

import java.time.LocalDateTime;
class library{
	String date;
	String name;
	String []books;
	int number;
	int no_of_books;
	
	
	library(){
		this.books= new String [100];
		this.no_of_books=0;
	}
	public boolean issueBook(String string) {
		System.out.println("The book you issued is "+ string);
		
		return false;
		
	}
	 String getissueBook(String name) {
		return this.name=name;
		}
	public void  addBook(String books){
		this.books[no_of_books]=books;
		no_of_books ++;
		System.out.print(books +" book has been added at date :");
		LocalDateTime ldt=LocalDateTime.now();
		System.out.println(ldt);
		
	}
	public void returnBook() {
		LocalDateTime ldt=LocalDateTime.now();
		LocalDateTime now = ldt;
		LocalDateTime sdnm=now.plusMonths(1);//sdnm= sameDateNextMonth
		
		System.out.println("The date of returning or reissuing the book :"+sdnm);
	}
	public void availBook(String[] books,String toCheckValue) {
		
		boolean test=false;
		for(String element : books) {
			if(element == toCheckValue) {
				test=true;
				break;
			}
		}
		System.out.println("Is "+ toCheckValue+" available in the library ?? "+test);
	}
}
public class Library {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		library l =new library();
		String[] books=new String[] {"RD Sharma", "Wings of Fire", "Gulliver's Travels","The 5am Club"
				,"The Marvels","Brain Rules","Target 3 Billion","Rise India!","Black Panther"};
		String toCheckValue ="Black Panther";
		//availBook(books, toCheckValue);
		l.availBook(books, toCheckValue);
		System.out.println("--------");
		
		l.issueBook("Black Panther");
		System.out.println("--------");
		
		l.addBook("Black Panther");
		System.out.println("--------");
		
		l.returnBook();
		
		
	}

	//private static void availBook(String[] books, String toCheckValue) {
		// TODO Auto-generated method stub
		
	//}

}
