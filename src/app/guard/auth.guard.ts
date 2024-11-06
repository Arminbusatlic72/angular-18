import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let rout = inject(Router);
  if (route.url.length > 0) {
    const menu = route.url[0].path;

    if (menu === 'customer') {
      alert("You don't have access");
      rout.navigate(['home']);
      return false;
    }
  }

  return true;
};
