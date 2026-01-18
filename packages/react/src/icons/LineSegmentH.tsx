import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentHRegular } from './LineSegmentHRegular';
import { LineSegmentHRegularDuotone } from './LineSegmentHRegularDuotone';
import { LineSegmentHBold } from './LineSegmentHBold';
import { LineSegmentHBoldDuotone } from './LineSegmentHBoldDuotone';
import { LineSegmentHFill } from './LineSegmentHFill';
import { LineSegmentHFillDuotone } from './LineSegmentHFillDuotone';

export interface LineSegmentHProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LineSegmentH with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LineSegmentHRegular } from 'stera-icons/LineSegmentHRegular';
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

export { LineSegmentH };
