import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertSucess(msg: string) {
    Swal.fire(
      'Parabéns!',
      msg,
      'success'
    );
  }

  alertErro(msg: string) {
    Swal.fire(
      'Ops!',
      msg,
      'error'
    );
  }
}
