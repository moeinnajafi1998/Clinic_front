import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { User } from '../models/User';

export const nurseGuard: CanActivateFn = (route, state) => {

  const recUser = inject(RecognizationService);
  if(recUser.user().user_type=="Nurse"){
    return true;
  }
  alert("ابتدا وارد شوید");
  return false;
};
