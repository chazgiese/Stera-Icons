import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitSquareUpIcon as FlowSplitSquareUpIconRegular } from './flow-split-square-up';
import { FlowSplitSquareUpIconBold } from './flow-split-square-up-bold';
import { FlowSplitSquareUpIconFilled } from './flow-split-square-up-filled';
import { FlowSplitSquareUpIconFilltone } from './flow-split-square-up-filltone';
import { FlowSplitSquareUpIconLinetone } from './flow-split-square-up-linetone';

export interface FlowSplitSquareUpIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitSquareUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitSquareUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitSquareUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitSquareUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitSquareUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitSquareUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitSquareUpIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitSquareUpIcon.displayName = 'FlowSplitSquareUpIcon';

export { FlowSplitSquareUpIcon };
