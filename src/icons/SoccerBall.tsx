import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerBallRegular } from './SoccerBallRegular';
import { SoccerBallRegularDuotone } from './SoccerBallRegularDuotone';
import { SoccerBallBold } from './SoccerBallBold';
import { SoccerBallBoldDuotone } from './SoccerBallBoldDuotone';
import { SoccerBallFill } from './SoccerBallFill';
import { SoccerBallFillDuotone } from './SoccerBallFillDuotone';

export interface SoccerBallProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SoccerBall - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SoccerBallRegular } from 'stera-icons/icons/SoccerBallRegular';
 */
const SoccerBall = memo(forwardRef<SVGSVGElement, SoccerBallProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SoccerBallBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SoccerBallBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SoccerBallFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SoccerBallFill ref={ref} {...rest} />;
  if (duotone) return <SoccerBallRegularDuotone ref={ref} {...rest} />;
  return <SoccerBallRegular ref={ref} {...rest} />;
}));

SoccerBall.displayName = 'SoccerBall';

// Triple export pattern (lucide-react style)
export { SoccerBall, SoccerBall as SoccerBallIcon, SoccerBall as SiSoccerBall };
