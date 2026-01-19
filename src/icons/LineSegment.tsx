import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentRegular } from './LineSegmentRegular';
import { LineSegmentRegularDuotone } from './LineSegmentRegularDuotone';
import { LineSegmentBold } from './LineSegmentBold';
import { LineSegmentBoldDuotone } from './LineSegmentBoldDuotone';
import { LineSegmentFill } from './LineSegmentFill';
import { LineSegmentFillDuotone } from './LineSegmentFillDuotone';

export interface LineSegmentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LineSegment - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LineSegmentRegular } from 'stera-icons/icons/LineSegmentRegular';
 */
const LineSegment = memo(forwardRef<SVGSVGElement, LineSegmentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LineSegmentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LineSegmentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LineSegmentFill ref={ref} {...rest} />;
  if (duotone) return <LineSegmentRegularDuotone ref={ref} {...rest} />;
  return <LineSegmentRegular ref={ref} {...rest} />;
}));

LineSegment.displayName = 'LineSegment';

// Triple export pattern (lucide-react style)
export { LineSegment, LineSegment as LineSegmentIcon, LineSegment as SiLineSegment };
