import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) {}

  getAll(): Promise<any[] | undefined>{
    return this.http.get<any[] | undefined>(`${this.baseUrl}/posts`).toPromise()
  }

  getById(id:string):Promise<any>{
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`).toPromise()
  }

  create({title='',body='',userId=0}): Promise<any>{
    const bodyRequest = {
      title, body, userId
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json; charset=UTF-8'
      })
    }

    return this.http.post<any>(`${this.baseUrl}/posts`,bodyRequest).toPromise()
  }
}
