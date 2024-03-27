import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule, translate } from '@ngneat/transloco';
import {
    NgxPermissionsModule,
    NgxPermissionsService,
    NgxRolesService,
} from 'ngx-permissions';

@Component({
    selector: 'example',
    standalone: true,
    imports: [TranslocoModule, MatButtonModule, NgxPermissionsModule],
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {
    /**
     * Constructor
     */
    constructor(
        private NgxPermissionsService: NgxPermissionsService,
        NgxRolesService: NgxRolesService
    ) {
        NgxRolesService.roles$.subscribe((data) => {
            console.log(data);
        });
        this.NgxPermissionsService.permissions$.subscribe((permissions) => {
            console.log('permissions', permissions);
        });
    }
}
