import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareLeftIcon as RegularFlowSplitSquareLeftIcon } from './flow-split-square-left';
import { FlowSplitSquareLeftIconDuotone as FlowSplitSquareLeftIconDuotone } from './flow-split-square-left-duotone';
import { FlowSplitSquareLeftIconBold as FlowSplitSquareLeftIconBold } from './flow-split-square-left-bold';
import { FlowSplitSquareLeftIconBoldDuotone as FlowSplitSquareLeftIconBoldDuotone } from './flow-split-square-left-bold-duotone';
import { FlowSplitSquareLeftIconFill as FlowSplitSquareLeftIconFill } from './flow-split-square-left-fill';
import { FlowSplitSquareLeftIconFillDuotone as FlowSplitSquareLeftIconFillDuotone } from './flow-split-square-left-fill-duotone';

export interface FlowSplitSquareLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitSquareLeftIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitSquareLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitSquareLeftIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitSquareLeftIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitSquareLeftIcon ref={ref} {...props} />;
}));

FlowSplitSquareLeftIcon.displayName = 'FlowSplitSquareLeftIcon';

export { FlowSplitSquareLeftIcon };
