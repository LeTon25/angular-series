import { HttpEvent, HttpInterceptor ,HttpRequest,HttpHandler} from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({headers: req.headers.append('kk','lil')})
        return next.handle(modifiedReq).pipe(
            tap(event =>{
                console.log(event)
            })
        )
    }

}