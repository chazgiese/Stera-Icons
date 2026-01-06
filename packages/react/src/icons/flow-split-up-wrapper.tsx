import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitUpIcon as RegularFlowSplitUpIcon } from './flow-split-up';
import { FlowSplitUpIconDuotone as FlowSplitUpIconDuotone } from './flow-split-up-duotone';
import { FlowSplitUpIconBold as FlowSplitUpIconBold } from './flow-split-up-bold';
import { FlowSplitUpIconBoldDuotone as FlowSplitUpIconBoldDuotone } from './flow-split-up-bold-duotone';
import { FlowSplitUpIconFill as FlowSplitUpIconFill } from './flow-split-up-fill';
import { FlowSplitUpIconFillDuotone as FlowSplitUpIconFillDuotone } from './flow-split-up-fill-duotone';

export interface FlowSplitUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowSplitUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowSplitUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowSplitUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowSplitUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowSplitUpIconFill ref={ref} {...props} />;
  if (duotone) return <FlowSplitUpIconDuotone ref={ref} {...props} />;
  return <RegularFlowSplitUpIcon ref={ref} {...props} />;
}));

FlowSplitUpIcon.displayName = 'FlowSplitUpIcon';

export { FlowSplitUpIcon };
