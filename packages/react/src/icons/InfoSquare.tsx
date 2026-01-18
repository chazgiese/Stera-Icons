import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { InfoSquareRegular } from './InfoSquareRegular';
import { InfoSquareRegularDuotone } from './InfoSquareRegularDuotone';
import { InfoSquareBold } from './InfoSquareBold';
import { InfoSquareBoldDuotone } from './InfoSquareBoldDuotone';
import { InfoSquareFill } from './InfoSquareFill';
import { InfoSquareFillDuotone } from './InfoSquareFillDuotone';

export interface InfoSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * InfoSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { InfoSquareRegular } from 'stera-icons/InfoSquareRegular';
 */
const InfoSquare = memo(forwardRef<SVGSVGElement, InfoSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <InfoSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <InfoSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <InfoSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <InfoSquareFill ref={ref} {...rest} />;
  if (duotone) return <InfoSquareRegularDuotone ref={ref} {...rest} />;
  return <InfoSquareRegular ref={ref} {...rest} />;
}));

InfoSquare.displayName = 'InfoSquare';

// Triple export pattern (lucide-react style)
export { InfoSquare, InfoSquare as InfoSquareIcon, InfoSquare as SiInfoSquare };
