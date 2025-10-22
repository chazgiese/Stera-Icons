import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitUpIcon as RegularFlowSplitUpIcon } from './flow-split-up';
import { FlowSplitUpIconBold } from './flow-split-up-bold';
import { FlowSplitUpIconFilled } from './flow-split-up-filled';
import { FlowSplitUpIconFilltone } from './flow-split-up-filltone';
import { FlowSplitUpIconLinetone } from './flow-split-up-linetone';

export interface FlowSplitUpIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowSplitUpIcon ref={ref} {...props} />;
  }
}));

FlowSplitUpIcon.displayName = 'FlowSplitUpIcon';

export { FlowSplitUpIcon };
