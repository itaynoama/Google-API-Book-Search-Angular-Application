import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {
    private API_path = 'https://www.googleapis.com/books/v1/volumes';
    private API_key = 'AIzaSyDIGH_qB9w6NWBzhk1pa7xlCPSU1Q1pq2M';
    
    constructor(private http: Http) { }
    
    SearchBooks(search: string) {
        return this.http.get(this.API_path + "?q=" + search + "&maxResults=40")
                        .map(res => res.json());
    }

    SearchByISBN(isbn){
        return this.http.get(this.API_path + "?q=isbn:" + isbn + "&maxResults=1")
                        .map(res => res.json());
    }
    
//    SearchByFilter(search: string, filter: string){
//        return this.http.get(this.API_path + "?q=" + search + "&filter=" + filter + "&key=" + this.API_key)
//                        .map(res => res.json());
//    }
    
    SearchByFilter(filter: string){
        return this.http.get(this.API_path + "?q=" + "&filter=" + filter + "&key=" + this.API_key)
                        .map(res => res.json());
    }
    
}
