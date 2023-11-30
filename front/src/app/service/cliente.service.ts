import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  getAll():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url + "/clientes");
  }

  post(cliente: Cliente):Observable<Cliente>{
    this.validateData(cliente)
    return this.http.post<Cliente>(this.url + "/clientes", cliente);
  }

  put(cliente: Cliente, id: number):Observable<Cliente>{
    this.validateData(cliente)
    return this.http.put<Cliente>(this.url + "/clientes/" + id, cliente);
  }

  delete(id: number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.url + "/clientes/" + id);
  }

  validateData(cliente: Cliente) {
    if(cliente.nome == null || cliente.nome.trim() == ""){
      throw alert("Digite um nome válido!");
    }
    if(cliente.dtNascimento == null || cliente.dtNascimento.trim() == ""){
      throw alert("Digite uma data válida!");
    }
    if(cliente.cidade == null || cliente.cidade.trim() == ""){
      throw alert("Digite uma cidade válida!");
    }
  }
}
