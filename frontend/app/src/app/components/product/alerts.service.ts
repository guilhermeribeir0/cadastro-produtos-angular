import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertSucess(msg: string) {
    Swal.fire({
      icon: 'success',
      title: 'Parabéns!',
      text: msg,
      confirmButtonColor: '#4428AA'
    });
  }

  alertErro(msg: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msg,
      confirmButtonColor: '#4428AA'
    });
  }
}
