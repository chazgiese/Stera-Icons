import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowLeftArrowIcon as RegularFlowLeftArrowIcon } from './flow-left-arrow';
import { FlowLeftArrowIconDuotone as FlowLeftArrowIconDuotone } from './flow-left-arrow-duotone';
import { FlowLeftArrowIconBold as FlowLeftArrowIconBold } from './flow-left-arrow-bold';
import { FlowLeftArrowIconBoldDuotone as FlowLeftArrowIconBoldDuotone } from './flow-left-arrow-bold-duotone';
import { FlowLeftArrowIconFill as FlowLeftArrowIconFill } from './flow-left-arrow-fill';
import { FlowLeftArrowIconFillDuotone as FlowLeftArrowIconFillDuotone } from './flow-left-arrow-fill-duotone';

export interface FlowLeftArrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlowLeftArrowIcon = memo(forwardRef<SVGSVGElement, FlowLeftArrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowLeftArrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlowLeftArrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlowLeftArrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlowLeftArrowIconFill ref={ref} {...props} />;
  if (duotone) return <FlowLeftArrowIconDuotone ref={ref} {...props} />;
  return <RegularFlowLeftArrowIcon ref={ref} {...props} />;
}));

FlowLeftArrowIcon.displayName = 'FlowLeftArrowIcon';

export { FlowLeftArrowIcon };
