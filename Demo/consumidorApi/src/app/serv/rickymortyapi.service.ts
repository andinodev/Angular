import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickymortyapiService {
  
  page: number = 1
  baseUrl: string = `https://rickandmortyapi.com/api/character?page=${page}`

  constructor(private http: HttpClient) { }

  getAll(): Promise<any[] | undefined>{
    return this.http.get<any[] | undefined>(`${this.baseUrl}`).toPromise()
  }


  
}

