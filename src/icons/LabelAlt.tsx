import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LabelAltRegular } from './LabelAltRegular';
import { LabelAltRegularDuotone } from './LabelAltRegularDuotone';
import { LabelAltBold } from './LabelAltBold';
import { LabelAltBoldDuotone } from './LabelAltBoldDuotone';
import { LabelAltFill } from './LabelAltFill';
import { LabelAltFillDuotone } from './LabelAltFillDuotone';

export interface LabelAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LabelAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LabelAltRegular } from 'stera-icons/icons/LabelAltRegular';
 */
const LabelAlt = memo(forwardRef<SVGSVGElement, LabelAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LabelAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LabelAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LabelAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LabelAltFill ref={ref} {...rest} />;
  if (duotone) return <LabelAltRegularDuotone ref={ref} {...rest} />;
  return <LabelAltRegular ref={ref} {...rest} />;
}));

LabelAlt.displayName = 'LabelAlt';

// Triple export pattern (lucide-react style)
export { LabelAlt, LabelAlt as LabelAltIcon, LabelAlt as SiLabelAlt };
export default LabelAlt;
