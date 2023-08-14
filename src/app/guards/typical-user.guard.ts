import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { CanActivateFn, Router } from '@angular/router';

export const typicalUserGuard: CanActivateFn = (route, state) => {
  const recUser = inject(RecognizationService);
  const router = inject(Router);

  if(recUser.user().user_type=="Typical_User"){
    return true;
  }
  alert("ابتدا به عنوان کاربر عادی وارد شوید");
  router.navigate(['/']);
  return false;

};
