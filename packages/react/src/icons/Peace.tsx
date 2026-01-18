import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PeaceRegular } from './PeaceRegular';
import { PeaceRegularDuotone } from './PeaceRegularDuotone';
import { PeaceBold } from './PeaceBold';
import { PeaceBoldDuotone } from './PeaceBoldDuotone';
import { PeaceFill } from './PeaceFill';
import { PeaceFillDuotone } from './PeaceFillDuotone';

export interface PeaceProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Peace - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PeaceRegular } from 'stera-icons/PeaceRegular';
 */
const Peace = memo(forwardRef<SVGSVGElement, PeaceProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PeaceBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PeaceBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PeaceFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PeaceFill ref={ref} {...rest} />;
  if (duotone) return <PeaceRegularDuotone ref={ref} {...rest} />;
  return <PeaceRegular ref={ref} {...rest} />;
}));

Peace.displayName = 'Peace';

// Triple export pattern (lucide-react style)
export { Peace, Peace as PeaceIcon, Peace as SiPeace };
