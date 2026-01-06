import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowRightArrowIcon as RegularFlowRightArrowIcon } from './flow-right-arrow';
import { FlowRightArrowIconDuotone as FlowRightArrowIconDuotone } from './flow-right-arrow-duotone';
import { FlowRightArrowIconBold as FlowRightArrowIconBold } from './flow-right-arrow-bold';
import { FlowRightArrowIconBoldDuotone as FlowRightArrowIconBoldDuotone } from './flow-right-arrow-bold-duotone';
import { FlowRightArrowIconFill as FlowRightArrowIconFill } from './flow-right-arrow-fill';
import { FlowRightArrowIconFillDuotone as FlowRightArrowIconFillDuotone } from './flow-right-arrow-fill-duotone';

export interface FlowRightArrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowRightArrowIcon = memo(forwardRef<SVGSVGElement, FlowRightArrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowRightArrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowRightArrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowRightArrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowRightArrowIconFill ref={ref} {...props} />;
  if (duotone) return <FlowRightArrowIconDuotone ref={ref} {...props} />;
  return <RegularFlowRightArrowIcon ref={ref} {...props} />;
}));

FlowRightArrowIcon.displayName = 'FlowRightArrowIcon';

export { FlowRightArrowIcon };
