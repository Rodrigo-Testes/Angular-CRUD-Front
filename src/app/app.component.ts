import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//importacao do um modulo responsavel por todos os imports dos modulos do angular material
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppMaterialModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
