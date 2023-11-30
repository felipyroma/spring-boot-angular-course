import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/Cliente'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  // obj cliente
  cliente = new Cliente();

  // visibilidade dos botões
  btnCadastro: boolean = true;

  tabela: boolean = true;

  // json de clients
  clientes: Cliente[] = []

  // idades: number[] = []

  constructor(private service: ClienteService) { }

  getAll(): void {
    this.service.getAll().subscribe(
      (res) => {
        this.clientes = res
        if (this.clientes != null) {
          this.formatAge()
        }

      }
    )
  }

  register(): void {
    this.service.post(this.cliente).subscribe(
      () => {
        alert("Cliente cadastrado com sucesso!")
        this.getAll()
        this.cliente = new Cliente()
      }
    )
  }

  edit(): void {
    this.service.put(this.cliente, this.cliente.id).subscribe(
      () => {
        alert("Cliente editado com sucesso!")
        this.getAll()
        this.cliente = new Cliente()
        this.btnCadastro = true;
        this.tabela = true;
      }
    )
  }

  delete(): void {
    this.service.delete(this.cliente.id).subscribe(
      () => {
        alert("Cliente removido com sucesso!")
        this.getAll()
        this.cliente = new Cliente()
        this.btnCadastro = true;
        this.tabela = true;
      }
    )
  }

  cancel(): void {
    this.btnCadastro = true;
    this.tabela = true;
    this.cliente = new Cliente()
  }

  formatAge(): void {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < this.clientes.length; i++) {
      let age: number = Number(currentYear) - Number(this.clientes[i].dtNascimento.substring(0, 4));

      this.clientes[i].idade = age;
    }
  }

  selectEspecificClient(index: number): void {
    this.cliente = this.clientes[index]

    this.btnCadastro = false;
    this.tabela = false;
  }

  ngOnInit(): void {
    this.getAll();
  }

}
