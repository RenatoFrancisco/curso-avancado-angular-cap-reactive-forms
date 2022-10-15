import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';

import { ProdutoDetalheComponent } from '../components/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../components/produto-count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) cards: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos =  this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {

    console.log('objeto do contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto!');
      return;
    });

    console.log(this.cards);
    this.cards.forEach(c => console.log(c));
  }

  mudarStatus(event: Produto) {
      event.ativo = !event.ativo;
  }
}
