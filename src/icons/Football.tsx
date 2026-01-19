import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FootballRegular } from './FootballRegular';
import { FootballRegularDuotone } from './FootballRegularDuotone';
import { FootballBold } from './FootballBold';
import { FootballBoldDuotone } from './FootballBoldDuotone';
import { FootballFill } from './FootballFill';
import { FootballFillDuotone } from './FootballFillDuotone';

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
