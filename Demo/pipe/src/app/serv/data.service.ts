import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  getPosts():Promise<any[] | undefined>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise()
  }


}
