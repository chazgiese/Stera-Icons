import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SoccerBallRegular } from './SoccerBallRegular.js';
import { SoccerBallRegularDuotone } from './SoccerBallRegularDuotone.js';
import { SoccerBallBold } from './SoccerBallBold.js';
import { SoccerBallBoldDuotone } from './SoccerBallBoldDuotone.js';
import { SoccerBallFill } from './SoccerBallFill.js';
import { SoccerBallFillDuotone } from './SoccerBallFillDuotone.js';

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
export default SoccerBall;
