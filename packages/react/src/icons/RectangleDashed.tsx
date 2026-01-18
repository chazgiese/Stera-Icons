import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RectangleDashedRegular } from './RectangleDashedRegular';
import { RectangleDashedRegularDuotone } from './RectangleDashedRegularDuotone';
import { RectangleDashedBold } from './RectangleDashedBold';
import { RectangleDashedBoldDuotone } from './RectangleDashedBoldDuotone';
import { RectangleDashedFill } from './RectangleDashedFill';
import { RectangleDashedFillDuotone } from './RectangleDashedFillDuotone';

export interface RectangleDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RectangleDashed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RectangleDashedRegular } from 'stera-icons/RectangleDashedRegular';
 */
const RectangleDashed = memo(forwardRef<SVGSVGElement, RectangleDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RectangleDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RectangleDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RectangleDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RectangleDashedFill ref={ref} {...rest} />;
  if (duotone) return <RectangleDashedRegularDuotone ref={ref} {...rest} />;
  return <RectangleDashedRegular ref={ref} {...rest} />;
}));

RectangleDashed.displayName = 'RectangleDashed';

// Triple export pattern (lucide-react style)
export { RectangleDashed, RectangleDashed as RectangleDashedIcon, RectangleDashed as SiRectangleDashed };
