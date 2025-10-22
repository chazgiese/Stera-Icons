import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SoccerBallIcon as SoccerBallIconRegular } from './soccer-ball';
import { SoccerBallIconBold } from './soccer-ball-bold';
import { SoccerBallIconFilled } from './soccer-ball-filled';
import { SoccerBallIconFilltone } from './soccer-ball-filltone';
import { SoccerBallIconLinetone } from './soccer-ball-linetone';

export interface SoccerBallIconProps extends IconProps {
  variant?: IconVariant;
}

const SoccerBallIcon = memo(forwardRef<SVGSVGElement, SoccerBallIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SoccerBallIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SoccerBallIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SoccerBallIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SoccerBallIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SoccerBallIconRegular ref={ref} {...props} />;
  }
}));

SoccerBallIcon.displayName = 'SoccerBallIcon';

export { SoccerBallIcon };
