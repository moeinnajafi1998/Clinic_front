import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';

export const clinicAdminGuard: CanActivateFn = (route, state) => {
  const recUser = inject(RecognizationService);
  const router = inject(Router);

  if(recUser.user().user_type=="Clinic_Admin"){
    return true;
  }
  alert("ابتدا به عنوان مدیر درمانگاه وارد شوید");
  router.navigate(['/']);
  return false;
};
