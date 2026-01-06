import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowUpArrowIcon as RegularFlowUpArrowIcon } from './flow-up-arrow';
import { FlowUpArrowIconDuotone as FlowUpArrowIconDuotone } from './flow-up-arrow-duotone';
import { FlowUpArrowIconBold as FlowUpArrowIconBold } from './flow-up-arrow-bold';
import { FlowUpArrowIconBoldDuotone as FlowUpArrowIconBoldDuotone } from './flow-up-arrow-bold-duotone';
import { FlowUpArrowIconFill as FlowUpArrowIconFill } from './flow-up-arrow-fill';
import { FlowUpArrowIconFillDuotone as FlowUpArrowIconFillDuotone } from './flow-up-arrow-fill-duotone';

export interface FlowUpArrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowUpArrowIcon = memo(forwardRef<SVGSVGElement, FlowUpArrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowUpArrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowUpArrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowUpArrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowUpArrowIconFill ref={ref} {...props} />;
  if (duotone) return <FlowUpArrowIconDuotone ref={ref} {...props} />;
  return <RegularFlowUpArrowIcon ref={ref} {...props} />;
}));

FlowUpArrowIcon.displayName = 'FlowUpArrowIcon';

export { FlowUpArrowIcon };
