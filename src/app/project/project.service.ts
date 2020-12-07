import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'https://oblako-testapp.herokuapp.com/api/v1/projects';
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT', 'Access-Control-Allow-Origin': '*' });
  options = { headers: this.headers };
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl);
  }
}
