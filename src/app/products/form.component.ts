import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ClientesService],
})
export class FormComponent implements OnInit {
 cliente: Cliente = new Cliente();
titulo: string ="TU MADRE"


constructor (private clientesService: ClientesService,
  private router: Router,
  private activatedRoute: ActivatedRoute) {}

ngOnInit() {
this.cargarCliente();
}

cargarCliente(): void{
this.activatedRoute.params.subscribe(params=>{
  let id = params['id']
  if(id){
    this.clientesService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
  }
})
}


 create(): void {
 this.clientesService.create(this.cliente)
 .subscribe(json => {
  this.router.navigate(['/clientes'])
  swal.fire('Nuevo cliente', `Cliente creado con exito!`, 'success')
   }
 );
}

update():void {
  this.clientesService.update(this.cliente).subscribe(json => {
    this.router.navigate(['/clientes'])
    swal.fire('Cliente Actualizado', `Cliente ${json.cliente.nombre} actualizado con exito!`, 'success');
  })
}


}
