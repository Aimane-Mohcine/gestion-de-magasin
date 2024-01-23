import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin
      });
    }

    // If the user has the role "ADMIN", allow access automatically
    if (this.roles.includes('ADMIN')) {
      return true;
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // If the user has the role "USER" and the required roles, allow access
    if (this.roles.includes('USER') && requiredRoles.every(role => this.roles.includes(role))) {
      return true;
    }

    // If the user doesn't have the required roles, show an alert and navigate to a suitable page.
    alert('Vous devez vous connecter en tant qu\'administrateur ou avoir les rôles requis.');
    this.router.navigate(['/home']); // Replace with the appropriate route

    // Deny access since the user doesn't have the required roles.
    return false;
  }
}
