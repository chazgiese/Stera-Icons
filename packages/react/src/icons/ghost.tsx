import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GhostRegular } from './GhostRegular';
import { GhostRegularDuotone } from './GhostRegularDuotone';
import { GhostBold } from './GhostBold';
import { GhostBoldDuotone } from './GhostBoldDuotone';
import { GhostFill } from './GhostFill';
import { GhostFillDuotone } from './GhostFillDuotone';

export interface GhostProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Ghost with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GhostRegular } from 'stera-icons/GhostRegular';
 */
const Ghost = memo(forwardRef<SVGSVGElement, GhostProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GhostBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GhostBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GhostFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GhostFill ref={ref} {...rest} />;
  if (duotone) return <GhostRegularDuotone ref={ref} {...rest} />;
  return <GhostRegular ref={ref} {...rest} />;
}));

Ghost.displayName = 'Ghost';

export { Ghost };
