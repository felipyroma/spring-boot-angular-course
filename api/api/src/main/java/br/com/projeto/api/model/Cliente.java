package br.com.projeto.api.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "tbCLiente")
@Getter
@Setter
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private LocalDate dtNascimento;
    private String cidade;

    public Integer getId() {
        return id;
    }

    public Cliente() {
    }

    public Cliente(String nome, LocalDate dtNascimento, String cidade) {
        this.nome = nome;
        this.dtNascimento = dtNascimento;
        this.cidade = cidade;
    }

    public void update(Cliente novoCliente){
        this.setNome(novoCliente.getNome());
        this.setDtNascimento(novoCliente.getDtNascimento());
        this.setCidade(novoCliente.getCidade());
    }

    public String getNome() {
        return nome;
    }

    public LocalDate getDtNascimento() {
        return dtNascimento;
    }

    public String getCidade() {
        return cidade;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDtNascimento(LocalDate dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
