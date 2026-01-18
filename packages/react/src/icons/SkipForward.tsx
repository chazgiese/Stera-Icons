import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SkipForwardRegular } from './SkipForwardRegular';
import { SkipForwardRegularDuotone } from './SkipForwardRegularDuotone';
import { SkipForwardBold } from './SkipForwardBold';
import { SkipForwardBoldDuotone } from './SkipForwardBoldDuotone';
import { SkipForwardFill } from './SkipForwardFill';
import { SkipForwardFillDuotone } from './SkipForwardFillDuotone';

export interface SkipForwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SkipForward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SkipForwardRegular } from 'stera-icons/SkipForwardRegular';
 */
const SkipForward = memo(forwardRef<SVGSVGElement, SkipForwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SkipForwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SkipForwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SkipForwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SkipForwardFill ref={ref} {...rest} />;
  if (duotone) return <SkipForwardRegularDuotone ref={ref} {...rest} />;
  return <SkipForwardRegular ref={ref} {...rest} />;
}));

SkipForward.displayName = 'SkipForward';

export { SkipForward };
