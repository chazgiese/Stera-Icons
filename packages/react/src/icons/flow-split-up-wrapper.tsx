import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitUpIcon as FlowSplitUpIconRegular } from './flow-split-up';
import { FlowSplitUpIconBold } from './flow-split-up-bold';
import { FlowSplitUpIconFilled } from './flow-split-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlowSplitUpIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitUpIcon.displayName = 'FlowSplitUpIcon';

export { FlowSplitUpIcon };
