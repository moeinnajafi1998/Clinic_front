import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';

export const SuperUserAndWhareHouseKeeper: CanActivateFn = (route, state) => {
  const recUser = inject(RecognizationService);
  const router = inject(Router);

  if(recUser.user().user_type=="Warehouse_Keeper" || recUser.user().is_superuser==true ){
    return true;
  }
  router.navigate(['/']);
  return false;
};
