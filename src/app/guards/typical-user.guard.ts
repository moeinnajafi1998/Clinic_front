import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RecognizationService } from '../services/recognization.service';
import { User } from '../models/User';

export const typicalUserGuard: CanActivateFn = (route, state) => {

  const recUser = inject(RecognizationService);
  const user = recUser.recognizedUser as User;

  if(user.user_type=="Typical_User"){
    return true;
  }

  return false;

};
