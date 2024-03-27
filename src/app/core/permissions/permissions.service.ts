import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PermissionsService {
    constructor(private _HttpClient: HttpClient) {}

    getPermissions(): Observable<string[]> {
        return this._HttpClient.get('./assets/test.json').pipe(
            map((data: any) => {
                console.log('data:getPermissions ' + JSON.stringify(data));

                return data.STUDENT_PAGE;
            })
        );
    }
}
