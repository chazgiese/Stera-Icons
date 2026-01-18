import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SkipBackRegular } from './SkipBackRegular';
import { SkipBackRegularDuotone } from './SkipBackRegularDuotone';
import { SkipBackBold } from './SkipBackBold';
import { SkipBackBoldDuotone } from './SkipBackBoldDuotone';
import { SkipBackFill } from './SkipBackFill';
import { SkipBackFillDuotone } from './SkipBackFillDuotone';

export interface SkipBackProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SkipBack - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SkipBackRegular } from 'stera-icons/SkipBackRegular';
 */
const SkipBack = memo(forwardRef<SVGSVGElement, SkipBackProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SkipBackBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SkipBackBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SkipBackFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SkipBackFill ref={ref} {...rest} />;
  if (duotone) return <SkipBackRegularDuotone ref={ref} {...rest} />;
  return <SkipBackRegular ref={ref} {...rest} />;
}));

SkipBack.displayName = 'SkipBack';

// Triple export pattern (lucide-react style)
export { SkipBack, SkipBack as SkipBackIcon, SkipBack as SiSkipBack };
