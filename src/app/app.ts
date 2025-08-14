import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, LOCALE_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routeAnimations } from './shared/animations';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    routeAnimations
  ]
})
export class App {
  animationState: string = '';

  constructor(
    @Inject(LOCALE_ID) private localeId: string,
    private _cdr: ChangeDetectorRef
  ) { }

  ngAfterContentInit() {
    Promise.resolve().then(() => {
      this.prepareRoute();
      this._cdr.detectChanges();
    });
  }

  prepareRoute(outlet?: RouterOutlet) {
    const newState = outlet?.activatedRouteData?.['animation'] ?? '';
    if (this.animationState !== newState) {
      this.animationState = newState;
      this._cdr.detectChanges();
    }
    return this.animationState;
  }

  isCurrentLocale(locale: string): boolean {
    return this.localeId === locale;
  }

  switchLanguage(targetLocale: string): void {
    const currentUrl = window.location;
    const currentPathname = currentUrl.pathname;
    const baseUrl = `${currentUrl.protocol}//${currentUrl.host}`;

    console.log('Current pathname:', currentPathname);
    console.log('Target locale:', targetLocale);

    let newPath: string;

    /**
     * @description Route after localId
     */
    let routePath = '';

    if (currentPathname.startsWith('/en-US/')) {
      routePath = currentPathname.substring('/en-US'.length);
    } else if (currentPathname.startsWith('/ar-JO/')) {
      routePath = currentPathname.substring('/ar-JO'.length);
    } else if (currentPathname === '/') {
      routePath = '/';
    } else {
      routePath = currentPathname;
    }

    if (routePath === '/') {
      routePath = '';
    }

    if (targetLocale === 'ar-JO') {
      newPath = `/ar-JO${routePath}`;
    } else {
      newPath = `/en-US${routePath}`;
    }

    console.log('Route path:', routePath);
    console.log('New path:', newPath);

    window.location.href = `${baseUrl}${newPath}`;
  }
}