import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LineSegmentVRegular } from './LineSegmentVRegular.js';
import { LineSegmentVRegularDuotone } from './LineSegmentVRegularDuotone.js';
import { LineSegmentVBold } from './LineSegmentVBold.js';
import { LineSegmentVBoldDuotone } from './LineSegmentVBoldDuotone.js';
import { LineSegmentVFill } from './LineSegmentVFill.js';
import { LineSegmentVFillDuotone } from './LineSegmentVFillDuotone.js';

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
export default LineSegmentV;
