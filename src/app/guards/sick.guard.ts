import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';

export const sickGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const recUser = inject(RecognizationService);
  if(recUser.user().user_type=="Sick"){
    return true;
  }
  alert("ابتدا به عنوان بیمار وارد شوید");
  router.navigate(['/']);
  return false;

};
