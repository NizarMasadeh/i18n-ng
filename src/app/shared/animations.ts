import { trigger, style, transition, animate } from "@angular/animations"

export const routeAnimations = trigger('routeAnimations', [
    transition('* => *', [
        style({ position: 'relative' }),
        style({
            filter: 'blur(10px)',
        }),
        animate(
            '0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            style({
                filter: 'blur(0)',
            })
        ),
    ]),
]);