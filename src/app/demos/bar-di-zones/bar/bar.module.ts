import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarComponent } from "./bar.component";
import { BarUnidadeConfig } from "./bar.config";
import { BarService } from "./bar.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        BarComponent,
    ],
    exports: [
        BarComponent
    ],
})
export class BarModule { 
    static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config }
            ]
        }
    }

    static forChild() {

    }
}