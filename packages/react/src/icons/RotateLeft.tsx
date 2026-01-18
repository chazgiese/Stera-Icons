import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateLeftRegular } from './RotateLeftRegular';
import { RotateLeftRegularDuotone } from './RotateLeftRegularDuotone';
import { RotateLeftBold } from './RotateLeftBold';
import { RotateLeftBoldDuotone } from './RotateLeftBoldDuotone';
import { RotateLeftFill } from './RotateLeftFill';
import { RotateLeftFillDuotone } from './RotateLeftFillDuotone';

export interface RotateLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RotateLeftRegular } from 'stera-icons/RotateLeftRegular';
 */
const RotateLeft = memo(forwardRef<SVGSVGElement, RotateLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateLeftFill ref={ref} {...rest} />;
  if (duotone) return <RotateLeftRegularDuotone ref={ref} {...rest} />;
  return <RotateLeftRegular ref={ref} {...rest} />;
}));

RotateLeft.displayName = 'RotateLeft';

// Triple export pattern (lucide-react style)
export { RotateLeft, RotateLeft as RotateLeftIcon, RotateLeft as SiRotateLeft };
