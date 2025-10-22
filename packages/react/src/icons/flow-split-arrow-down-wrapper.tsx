import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitArrowDownIcon as RegularFlowSplitArrowDownIcon } from './flow-split-arrow-down';
import { FlowSplitArrowDownIconBold } from './flow-split-arrow-down-bold';
import { FlowSplitArrowDownIconFilled } from './flow-split-arrow-down-filled';
import { FlowSplitArrowDownIconFilltone } from './flow-split-arrow-down-filltone';
import { FlowSplitArrowDownIconLinetone } from './flow-split-arrow-down-linetone';

export interface FlowSplitArrowDownIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitArrowDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitArrowDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitArrowDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitArrowDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitArrowDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowSplitArrowDownIcon ref={ref} {...props} />;
  }
}));

FlowSplitArrowDownIcon.displayName = 'FlowSplitArrowDownIcon';

export { FlowSplitArrowDownIcon };
