import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitArrowLeftIcon as RegularFlowSplitArrowLeftIcon } from './flow-split-arrow-left';
import { FlowSplitArrowLeftIconDuotone as FlowSplitArrowLeftIconDuotone } from './flow-split-arrow-left-duotone';
import { FlowSplitArrowLeftIconBold as FlowSplitArrowLeftIconBold } from './flow-split-arrow-left-bold';
import { FlowSplitArrowLeftIconBoldDuotone as FlowSplitArrowLeftIconBoldDuotone } from './flow-split-arrow-left-bold-duotone';
import { FlowSplitArrowLeftIconFill as FlowSplitArrowLeftIconFill } from './flow-split-arrow-left-fill';
import { FlowSplitArrowLeftIconFillDuotone as FlowSplitArrowLeftIconFillDuotone } from './flow-split-arrow-left-fill-duotone';

export interface FlowSplitArrowLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitArrowLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitArrowLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitArrowLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitArrowLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitArrowLeftIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitArrowLeftIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitArrowLeftIcon ref={ref} {...props} />;
}));

FlowSplitArrowLeftIcon.displayName = 'FlowSplitArrowLeftIcon';

export { FlowSplitArrowLeftIcon };
