import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { User } from '../models/User';


export const clinicAdminGuard: CanActivateFn = (route, state) => {
  const recUser = inject(RecognizationService);

  if(recUser.user().user_type=="Clinic_Admin"){
    return true;
  }
  alert("ابتدا به عنوان مدیر درمانگاه وارد شوید");
  return false;
};
