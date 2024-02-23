import { Component } from '@angular/core';
import { Curso } from '../model/curso';

//importacao do um modulo responsavel pelo angulas material
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CursosService } from '../services/cursos.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    AppMaterialModule,
    SharedModule
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  //aqui coloca os dados que vem da interface Curso.ts
  cursos$: Observable<Curso[]>;

  //aqui diz quais as colunas iram ser exibidas na tabela
  mostraColunas = ['id' ,'nome','categoria']

  constructor(
    private cursosServico: CursosService,
    public dialog: MatDialog
    ){

    //a lista curso que esta em cima esta recebendo os dados dentro da funcao que esta no service
    this.cursos$ = this.cursosServico.listaDeTodosCursos().pipe(
      catchError(error => {
        this.onError('Aconteceu um error ao carregar os cursos')
        return of([])
      })
    );
  }

  //funcao para aparecer a mensagem para o usuario
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
