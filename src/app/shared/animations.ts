import { 
    trigger,
    state, 
    animate, 
    transition, 
    style, 
    query, 
    stagger 
  } from '@angular/animations'; 
  
  export const routeAnimation = trigger('routeAnimation', [ 
    transition('* => *', [ 
      // initial state of element 
      query( 
        ':enter', 
        [style({ opacity: 0 })], 
        { optional: true } 
      ), 
      // leave route (leave comes first to remove last route) 
      query( 
        ':leave', 
        [ 
          // start 
          style({ opacity: .5, transform: 'translateY(0%)' }), 
          // end 
          animate('.5s ease', style({ opacity: 0 })) 
        ], 
        { optional: true } 
      ), 
      // enter route 
      query( 
        ':self', 
        [ 
          // start 
          style({ opacity: 0 }), 
          // end 
          animate('1.0s ease', style({ opacity: 1 })) 
        ], 
        { optional: true } 
      ) 
    ]) 
  ]); 
 
  export const onSideNavChange = trigger('onSideNavChange', [
    state('close',
      style({
        'min-width': '60px'
      })
    ),
    state('open',
      style({
        'min-width': '170px'
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
 
  export const animateText = trigger('animateText', [
    state('hide',
      style({
        'display': 'none',
        opacity: 0,
      })
    ),
    state('show',
      style({
        'display': 'block',
        opacity: 1,
      })
    ),
    transition('close => open', animate('3s ease-out')),
    transition('open => close', animate('1s ease-out')),
  ]);
 
  export const onMainContentChange = trigger('onMainContentChange', [
    state('close',
      style({
        'margin-left': '70px'
      })
    ),
    state('open',
      style({
        'margin-left': '200px'
      })
    ),
    transition('close => open', animate('250ms ease-in')),
    transition('open => close', animate('250ms ease-in')),
  ]);
 