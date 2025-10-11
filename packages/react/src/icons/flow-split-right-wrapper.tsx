import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitRightIcon as FlowSplitRightIconRegular } from './flow-split-right';
import { FlowSplitRightIconBold } from './flow-split-right-bold';
import { FlowSplitRightIconFilled } from './flow-split-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowSplitRightIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitRightIcon.displayName = 'FlowSplitRightIcon';

export { FlowSplitRightIcon };
