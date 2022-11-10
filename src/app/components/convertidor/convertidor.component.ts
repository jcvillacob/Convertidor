import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class convertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  listTengo = ['USD', 'EUR', 'COP'];

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero == 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero == 'EUR') {
          this.total = this.cantidad * 1.1;
        }
        if (this.quiero == 'COP') {
          this.total = this.cantidad * 4897;
        }
        break;
      case 'EUR':
        if (this.quiero == 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero == 'USD') {
          this.total = this.cantidad / 1.1;
        }
        if (this.quiero == 'COP') {
          this.total = this.cantidad * 4897;
        }
        break;
      case 'COP':
        if (this.quiero == 'COP') {
          this.total = this.cantidad;
        }
        if (this.quiero == 'USD') {
          this.total = this.cantidad / 4897;
        }
        if (this.quiero == 'EUR') {
          this.total = this.cantidad / 4897;
        }
        break;
    }
  }
}
