import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowRightIcon as RegularFlowSplitArrowRightIcon } from './flow-split-arrow-right';
import { FlowSplitArrowRightIconDuotone as FlowSplitArrowRightIconDuotone } from './flow-split-arrow-right-duotone';
import { FlowSplitArrowRightIconBold as FlowSplitArrowRightIconBold } from './flow-split-arrow-right-bold';
import { FlowSplitArrowRightIconBoldDuotone as FlowSplitArrowRightIconBoldDuotone } from './flow-split-arrow-right-bold-duotone';
import { FlowSplitArrowRightIconFill as FlowSplitArrowRightIconFill } from './flow-split-arrow-right-fill';
import { FlowSplitArrowRightIconFillDuotone as FlowSplitArrowRightIconFillDuotone } from './flow-split-arrow-right-fill-duotone';

export interface FlowSplitArrowRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitArrowRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitArrowRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitArrowRightIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitArrowRightIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitArrowRightIcon ref={ref} {...props} />;
}));

FlowSplitArrowRightIcon.displayName = 'FlowSplitArrowRightIcon';

export { FlowSplitArrowRightIcon };
