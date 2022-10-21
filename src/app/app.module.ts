import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { NavegacaoModule } from './navegacao/navegacao-module';
import { ProdutoService } from './demos/arquitetura-componentes/services/produto.service';
import { ProdutoResolve } from './demos/arquitetura-componentes/services/produto.resolve';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarService } from './demos/bar-di-zones/bar/bar.service';
import { BarModule } from './demos/bar-di-zones/bar/bar.module';
import { HttpClient } from '@angular/common/http';
import { TodoComponent } from './demos/todo-list/todo/todo.component';

export const BAR_PROVIDERS: Provider[] = [
  BarService
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'asdcsdfvghnhgjhtrrrfewr54212'
    }),
    TodoComponent
  ],
  providers: [
    ProdutoService,
    ProdutoResolve,
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
