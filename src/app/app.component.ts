import { Component } from '@angular/core';
import { SuccessMsgService } from './success-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SuccessMsgService]
})
export class AppComponent {

	constructor (private _newService: SuccessMsgService) {}



  title = this._newService.getMsg();
}
