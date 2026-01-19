import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentVRegular } from './LineSegmentVRegular';
import { LineSegmentVRegularDuotone } from './LineSegmentVRegularDuotone';
import { LineSegmentVBold } from './LineSegmentVBold';
import { LineSegmentVBoldDuotone } from './LineSegmentVBoldDuotone';
import { LineSegmentVFill } from './LineSegmentVFill';
import { LineSegmentVFillDuotone } from './LineSegmentVFillDuotone';

export interface LineSegmentVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LineSegmentV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LineSegmentVRegular } from 'stera-icons/icons/LineSegmentVRegular';
 */
const LineSegmentV = memo(forwardRef<SVGSVGElement, LineSegmentVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LineSegmentVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LineSegmentVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LineSegmentVFill ref={ref} {...rest} />;
  if (duotone) return <LineSegmentVRegularDuotone ref={ref} {...rest} />;
  return <LineSegmentVRegular ref={ref} {...rest} />;
}));

LineSegmentV.displayName = 'LineSegmentV';

// Triple export pattern (lucide-react style)
export { LineSegmentV, LineSegmentV as LineSegmentVIcon, LineSegmentV as SiLineSegmentV };
