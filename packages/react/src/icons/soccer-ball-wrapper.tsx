import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerBallIcon as RegularSoccerBallIcon } from './soccer-ball';
import { SoccerBallIconDuotone as SoccerBallIconDuotone } from './soccer-ball-duotone';
import { SoccerBallIconBold as SoccerBallIconBold } from './soccer-ball-bold';
import { SoccerBallIconBoldDuotone as SoccerBallIconBoldDuotone } from './soccer-ball-bold-duotone';
import { SoccerBallIconFill as SoccerBallIconFill } from './soccer-ball-fill';
import { SoccerBallIconFillDuotone as SoccerBallIconFillDuotone } from './soccer-ball-fill-duotone';

export interface SoccerBallIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SoccerBallIcon = memo(forwardRef<SVGSVGElement, SoccerBallIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SoccerBallIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SoccerBallIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SoccerBallIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SoccerBallIconFill ref={ref} {...props} />;
  if (duotone) return <SoccerBallIconDuotone ref={ref} {...props} />;
  return <RegularSoccerBallIcon ref={ref} {...props} />;
}));

SoccerBallIcon.displayName = 'SoccerBallIcon';

export { SoccerBallIcon };
