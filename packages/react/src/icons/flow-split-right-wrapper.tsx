import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitRightIcon as RegularFlowSplitRightIcon } from './flow-split-right';
import { FlowSplitRightIconBold } from './flow-split-right-bold';
import { FlowSplitRightIconFilled } from './flow-split-right-filled';
import { FlowSplitRightIconFilltone } from './flow-split-right-filltone';
import { FlowSplitRightIconLinetone } from './flow-split-right-linetone';

export interface FlowSplitRightIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowSplitRightIcon ref={ref} {...props} />;
  }
}));

FlowSplitRightIcon.displayName = 'FlowSplitRightIcon';

export { FlowSplitRightIcon };
