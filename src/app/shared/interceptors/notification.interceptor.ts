import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {AlertService} from "../services/alert.service";
import {alertMessagesMap} from "../model/enum/alert-messages-map";

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    const arr = event.headers.keys();
                    let alert: string | null = null;
                    let entity: string | null = null;
                    let param: string | null = null;
                    arr.forEach(entry => {
                        if (entry.toLowerCase().endsWith('app-alert')) {
                            alert = event.headers.get(entry);
                        }
                        if (entry.toLowerCase().endsWith('app-entity')) {
                            entity = event.headers.get(entry);
                        }
                        if (entry.toLowerCase().endsWith('app-param')) {
                            param = event.headers.get(entry);
                        }
                    });
                    if (alert) {
                        this.alertService.success(
                            alertMessagesMap.get(entity).replace("{param}", param)
                        );
                    }
                }
            })
        );
    }
}
