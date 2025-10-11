import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerBallIcon as SoccerBallIconRegular } from './soccer-ball';
import { SoccerBallIconBold } from './soccer-ball-bold';
import { SoccerBallIconFilled } from './soccer-ball-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SoccerBallIconRegular ref={ref} {...props} />;
  }
}));

SoccerBallIcon.displayName = 'SoccerBallIcon';

export { SoccerBallIcon };
