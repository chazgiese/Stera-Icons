import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CanLabelRegular } from './CanLabelRegular';
import { CanLabelRegularDuotone } from './CanLabelRegularDuotone';
import { CanLabelBold } from './CanLabelBold';
import { CanLabelBoldDuotone } from './CanLabelBoldDuotone';
import { CanLabelFill } from './CanLabelFill';
import { CanLabelFillDuotone } from './CanLabelFillDuotone';

export interface CanLabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CanLabel - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CanLabelRegular } from 'stera-icons/icons/CanLabelRegular';
 */
const CanLabel = memo(forwardRef<SVGSVGElement, CanLabelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CanLabelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CanLabelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CanLabelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CanLabelFill ref={ref} {...rest} />;
  if (duotone) return <CanLabelRegularDuotone ref={ref} {...rest} />;
  return <CanLabelRegular ref={ref} {...rest} />;
}));

CanLabel.displayName = 'CanLabel';

// Triple export pattern (lucide-react style)
export { CanLabel, CanLabel as CanLabelIcon, CanLabel as SiCanLabel };
