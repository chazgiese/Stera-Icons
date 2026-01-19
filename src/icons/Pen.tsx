import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenRegular } from './PenRegular';
import { PenRegularDuotone } from './PenRegularDuotone';
import { PenBold } from './PenBold';
import { PenBoldDuotone } from './PenBoldDuotone';
import { PenFill } from './PenFill';
import { PenFillDuotone } from './PenFillDuotone';

export interface PenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PenRegular } from 'stera-icons/icons/PenRegular';
 */
const Pen = memo(forwardRef<SVGSVGElement, PenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PenFill ref={ref} {...rest} />;
  if (duotone) return <PenRegularDuotone ref={ref} {...rest} />;
  return <PenRegular ref={ref} {...rest} />;
}));

Pen.displayName = 'Pen';

// Triple export pattern (lucide-react style)
export { Pen, Pen as PenIcon, Pen as SiPen };
export default Pen;
