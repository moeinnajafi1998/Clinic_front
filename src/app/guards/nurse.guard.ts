import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';

export const nurseGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const recUser = inject(RecognizationService);
  if(recUser.user().user_type=="Nurse"){
    return true;
  }
  alert("ابتدا به عنوان پرستار وارد شوید");
  router.navigate(['/']);
  return false;
};
