import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowSplitLeftSquareIcon as FlowSplitLeftSquareIconRegular } from './flow-split-left-square';
import { FlowSplitLeftSquareIconBold } from './flow-split-left-square-bold';
import { FlowSplitLeftSquareIconFilled } from './flow-split-left-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowSplitLeftSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitLeftSquareIcon = memo(forwardRef<SVGSVGElement, FlowSplitLeftSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitLeftSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitLeftSquareIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitLeftSquareIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitLeftSquareIcon.displayName = 'FlowSplitLeftSquareIcon';

export { FlowSplitLeftSquareIcon };
