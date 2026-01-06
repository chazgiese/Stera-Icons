import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitSquareRightIcon as RegularFlowSplitSquareRightIcon } from './flow-split-square-right';
import { FlowSplitSquareRightIconDuotone as FlowSplitSquareRightIconDuotone } from './flow-split-square-right-duotone';
import { FlowSplitSquareRightIconBold as FlowSplitSquareRightIconBold } from './flow-split-square-right-bold';
import { FlowSplitSquareRightIconBoldDuotone as FlowSplitSquareRightIconBoldDuotone } from './flow-split-square-right-bold-duotone';
import { FlowSplitSquareRightIconFill as FlowSplitSquareRightIconFill } from './flow-split-square-right-fill';
import { FlowSplitSquareRightIconFillDuotone as FlowSplitSquareRightIconFillDuotone } from './flow-split-square-right-fill-duotone';

export interface FlowSplitSquareRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitSquareRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitSquareRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitSquareRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitSquareRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitSquareRightIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitSquareRightIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitSquareRightIcon ref={ref} {...props} />;
}));

FlowSplitSquareRightIcon.displayName = 'FlowSplitSquareRightIcon';

export { FlowSplitSquareRightIcon };
