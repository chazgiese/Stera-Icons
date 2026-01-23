import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LineSegmentHRegular } from './LineSegmentHRegular.js';
import { LineSegmentHRegularDuotone } from './LineSegmentHRegularDuotone.js';
import { LineSegmentHBold } from './LineSegmentHBold.js';
import { LineSegmentHBoldDuotone } from './LineSegmentHBoldDuotone.js';
import { LineSegmentHFill } from './LineSegmentHFill.js';
import { LineSegmentHFillDuotone } from './LineSegmentHFillDuotone.js';

export interface LineSegmentHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LineSegmentH - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LineSegmentHRegular } from 'stera-icons/icons/LineSegmentHRegular';
 */
const LineSegmentH = memo(forwardRef<SVGSVGElement, LineSegmentHProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentHBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LineSegmentHBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LineSegmentHFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LineSegmentHFill ref={ref} {...rest} />;
  if (duotone) return <LineSegmentHRegularDuotone ref={ref} {...rest} />;
  return <LineSegmentHRegular ref={ref} {...rest} />;
}));

LineSegmentH.displayName = 'LineSegmentH';

// Triple export pattern (lucide-react style)
export { LineSegmentH, LineSegmentH as LineSegmentHIcon, LineSegmentH as SiLineSegmentH };
export default LineSegmentH;
