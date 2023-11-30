package br.com.projeto.api.controller;

import br.com.projeto.api.model.Cliente;
import br.com.projeto.api.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public ResponseEntity<List<Cliente>> getAll() {
        if(clienteRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(clienteRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Cliente> post(@RequestBody Cliente cliente) {
        return ResponseEntity.status(201).body(clienteRepository.save(cliente));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> put(@RequestBody Cliente novoCliente, @PathVariable Integer id){
        Cliente cliente = clienteRepository.getById(id);
        cliente.update(novoCliente);
        return ResponseEntity.status(200).body(clienteRepository.save(cliente));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id){
        if(clienteRepository.findById(id).isEmpty()){
            return ResponseEntity.status(204).build();
        }
        clienteRepository.deleteById(id);
        return ResponseEntity.status(200).build();
    }


}
