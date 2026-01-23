import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LabelRegular } from './LabelRegular.js';
import { LabelRegularDuotone } from './LabelRegularDuotone.js';
import { LabelBold } from './LabelBold.js';
import { LabelBoldDuotone } from './LabelBoldDuotone.js';
import { LabelFill } from './LabelFill.js';
import { LabelFillDuotone } from './LabelFillDuotone.js';

export interface LabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Label - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LabelRegular } from 'stera-icons/icons/LabelRegular';
 */
const Label = memo(forwardRef<SVGSVGElement, LabelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LabelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LabelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LabelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LabelFill ref={ref} {...rest} />;
  if (duotone) return <LabelRegularDuotone ref={ref} {...rest} />;
  return <LabelRegular ref={ref} {...rest} />;
}));

Label.displayName = 'Label';

// Triple export pattern (lucide-react style)
export { Label, Label as LabelIcon, Label as SiLabel };
export default Label;
