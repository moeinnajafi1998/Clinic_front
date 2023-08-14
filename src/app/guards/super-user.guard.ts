import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { User } from '../models/User';

export const superUserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const recUser = inject(RecognizationService);
  console.log(recUser.user())
  if(recUser.user().is_superuser==true){
    console.log("superuser guard => is_superuser = " + recUser.checkLogIn());
    return true;
  }
  alert("ابتدا به عنوان مدیر کل وارد شوید");
  router.navigate(['/']);
  return false;

};
