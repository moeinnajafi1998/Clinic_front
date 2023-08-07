import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { User } from '../models/User';

export const sickGuard: CanActivateFn = (route, state) => {

  const recUser = inject(RecognizationService);
  if(recUser.user().user_type=="Sick"){
    return true;
  }
  alert("ابتدا به عنوان بیمار وارد شوید");
  return false;

};
