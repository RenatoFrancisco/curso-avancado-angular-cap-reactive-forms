import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BarService {

    constructor(private http: HttpClient) { }

    ObterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServiceMock {

    constructor(private http: HttpClient) { }

    ObterBebidas(): string {
        return 'Mock';
    }

    obterPorcoes(): string {
        return 'Mock';
    }

    obterRefeicoes(): string {
        return 'Mock';
    }
}