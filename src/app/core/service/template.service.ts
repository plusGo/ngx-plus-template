import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  findAll(): Observable<any> {
    return HttpPlusClient.builder()
      .url('/mock/template.data.json')
      .get();
  }
}
