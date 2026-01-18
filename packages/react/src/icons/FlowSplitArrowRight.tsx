import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowRightRegular } from './FlowSplitArrowRightRegular';
import { FlowSplitArrowRightRegularDuotone } from './FlowSplitArrowRightRegularDuotone';
import { FlowSplitArrowRightBold } from './FlowSplitArrowRightBold';
import { FlowSplitArrowRightBoldDuotone } from './FlowSplitArrowRightBoldDuotone';
import { FlowSplitArrowRightFill } from './FlowSplitArrowRightFill';
import { FlowSplitArrowRightFillDuotone } from './FlowSplitArrowRightFillDuotone';

export interface FlowSplitArrowRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FlowSplitArrowRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlowSplitArrowRightRegular } from 'stera-icons/FlowSplitArrowRightRegular';
 */
const FlowSplitArrowRight = memo(forwardRef<SVGSVGElement, FlowSplitArrowRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowSplitArrowRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowSplitArrowRightFill ref={ref} {...rest} />;
  if (duotone) return <FlowSplitArrowRightRegularDuotone ref={ref} {...rest} />;
  return <FlowSplitArrowRightRegular ref={ref} {...rest} />;
}));

FlowSplitArrowRight.displayName = 'FlowSplitArrowRight';

export { FlowSplitArrowRight };
