import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitUpSquareIcon as FlowSplitUpSquareIconRegular } from './flow-split-up-square';
import { FlowSplitUpSquareIconBold } from './flow-split-up-square-bold';
import { FlowSplitUpSquareIconFilled } from './flow-split-up-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitUpSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitUpSquareIcon = memo(forwardRef<SVGSVGElement, FlowSplitUpSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitUpSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitUpSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitUpSquareIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitUpSquareIcon.displayName = 'FlowSplitUpSquareIcon';

export { FlowSplitUpSquareIcon };
