import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { InfoCircleRegular } from './InfoCircleRegular';
import { InfoCircleRegularDuotone } from './InfoCircleRegularDuotone';
import { InfoCircleBold } from './InfoCircleBold';
import { InfoCircleBoldDuotone } from './InfoCircleBoldDuotone';
import { InfoCircleFill } from './InfoCircleFill';
import { InfoCircleFillDuotone } from './InfoCircleFillDuotone';

export interface InfoCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * InfoCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { InfoCircleRegular } from 'stera-icons/InfoCircleRegular';
 */
const InfoCircle = memo(forwardRef<SVGSVGElement, InfoCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <InfoCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <InfoCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <InfoCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <InfoCircleFill ref={ref} {...rest} />;
  if (duotone) return <InfoCircleRegularDuotone ref={ref} {...rest} />;
  return <InfoCircleRegular ref={ref} {...rest} />;
}));

InfoCircle.displayName = 'InfoCircle';

// Triple export pattern (lucide-react style)
export { InfoCircle, InfoCircle as InfoCircleIcon, InfoCircle as SiInfoCircle };
