import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitSquareDownIcon as FlowSplitSquareDownIconRegular } from './flow-split-square-down';
import { FlowSplitSquareDownIconBold } from './flow-split-square-down-bold';
import { FlowSplitSquareDownIconFilled } from './flow-split-square-down-filled';
import { FlowSplitSquareDownIconFilltone } from './flow-split-square-down-filltone';
import { FlowSplitSquareDownIconLinetone } from './flow-split-square-down-linetone';

export interface FlowSplitSquareDownIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitSquareDownIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitSquareDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitSquareDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitSquareDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitSquareDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitSquareDownIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitSquareDownIcon.displayName = 'FlowSplitSquareDownIcon';

export { FlowSplitSquareDownIcon };
