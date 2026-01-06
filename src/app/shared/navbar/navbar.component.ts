import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // Asegúrate de incluir RouterModule aquí
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {

isMobileMenuOpen: boolean = false;

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
  constructor () { 

    /* toggleMenu() {
      this.menuAbierto = !this.menuAbierto;
  }

    verPerfil() {
    this.menuAbierto = false;
  } */
}
}

