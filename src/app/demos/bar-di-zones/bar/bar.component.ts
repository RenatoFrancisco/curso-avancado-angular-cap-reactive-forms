import { Component, Inject, OnInit } from '@angular/core';
import { BarUnidadeConfig } from './bar.config';
import { BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarService, useClass: BarService }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  barBebida1: string;

  constructor(
    private barService: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig
    ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.ObterBebidas();
    this.configManual = this.ApiConfigManual;
  }

}
