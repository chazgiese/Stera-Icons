import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitDownIcon as FlowSplitDownIconRegular } from './flow-split-down';
import { FlowSplitDownIconBold } from './flow-split-down-bold';
import { FlowSplitDownIconFilled } from './flow-split-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitDownIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitDownIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitDownIcon.displayName = 'FlowSplitDownIcon';

export { FlowSplitDownIcon };
