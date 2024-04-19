import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
    ],
    imports: [
        CommonModule
    ],
    exports:[
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule {

}