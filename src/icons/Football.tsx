import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FootballRegular } from './FootballRegular.js';
import { FootballRegularDuotone } from './FootballRegularDuotone.js';
import { FootballBold } from './FootballBold.js';
import { FootballBoldDuotone } from './FootballBoldDuotone.js';
import { FootballFill } from './FootballFill.js';
import { FootballFillDuotone } from './FootballFillDuotone.js';

export interface FootballProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Football - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FootballRegular } from 'stera-icons/icons/FootballRegular';
 */
const Football = memo(forwardRef<SVGSVGElement, FootballProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FootballBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FootballBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FootballFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FootballFill ref={ref} {...rest} />;
  if (duotone) return <FootballRegularDuotone ref={ref} {...rest} />;
  return <FootballRegular ref={ref} {...rest} />;
}));

Football.displayName = 'Football';

// Triple export pattern (lucide-react style)
export { Football, Football as FootballIcon, Football as SiFootball };
export default Football;
