import { Injectable } from '@angular/core';

@Injectable()
export class SuccessMsgService {

  constructor() {

   }

   getMsg() {
   return "Successful";
   }

}
