import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-book-api.service';
import { AuthenticateService } from '../login/loginService/authenticate.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    providers: [ AuthenticateService ],
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    book;
    books; 
    
    filters: any[] = [{value: 'partial'}, {value: 'full'}, {value: 'free-ebooks'}, {value: 'paid-ebooks'}, {value: 'ebooks'}];
    selectedFilter = this.filters[1];
    
    
    public user = localStorage.getItem('user');

    constructor(
        private googleBookApiService: GoogleBookApiService, 
        private _service:AuthenticateService, 
        private googleBooksApiService: GoogleBookApiService) { }
    
    OnSearch(s) {
        this.googleBookApiService.SearchBooks(s)
            .subscribe((data) => {
            this.books = data.items;
        });
    }
    
    //for dialog modal
    getSearchByISBN(isbn) {
        this.googleBooksApiService.SearchByISBN(isbn)
            .subscribe((data) => {
                this.book = data.items[0];
            }); 
    }
    
    onChange(filter) {
        console.log(filter);
        this.selectedFilter = filter;
        this.googleBooksApiService.SearchByFilter(filter)
            .subscribe((data) => {
                this.books = data.items;
            }); 
    }


    ngOnInit() {
        this._service.checkCredentials();     
    }
    
    logout():void {
        this._service.logout();
    }
}
