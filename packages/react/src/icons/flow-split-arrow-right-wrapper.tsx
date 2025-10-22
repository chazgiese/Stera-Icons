import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitArrowRightIcon as RegularFlowSplitArrowRightIcon } from './flow-split-arrow-right';
import { FlowSplitArrowRightIconBold } from './flow-split-arrow-right-bold';
import { FlowSplitArrowRightIconFilled } from './flow-split-arrow-right-filled';
import { FlowSplitArrowRightIconFilltone } from './flow-split-arrow-right-filltone';
import { FlowSplitArrowRightIconLinetone } from './flow-split-arrow-right-linetone';

export interface FlowSplitArrowRightIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitArrowRightIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitArrowRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitArrowRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitArrowRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitArrowRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlowSplitArrowRightIcon ref={ref} {...props} />;
  }
}));

FlowSplitArrowRightIcon.displayName = 'FlowSplitArrowRightIcon';

export { FlowSplitArrowRightIcon };
