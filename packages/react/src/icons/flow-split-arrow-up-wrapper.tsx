import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitArrowUpIcon as FlowSplitArrowUpIconRegular } from './flow-split-arrow-up';
import { FlowSplitArrowUpIconBold } from './flow-split-arrow-up-bold';
import { FlowSplitArrowUpIconFilled } from './flow-split-arrow-up-filled';
import { FlowSplitArrowUpIconFilltone } from './flow-split-arrow-up-filltone';
import { FlowSplitArrowUpIconLinetone } from './flow-split-arrow-up-linetone';

export interface FlowSplitArrowUpIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowSplitArrowUpIcon = memo(forwardRef<SVGSVGElement, FlowSplitArrowUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowSplitArrowUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowSplitArrowUpIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowSplitArrowUpIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitArrowUpIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitArrowUpIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitArrowUpIcon.displayName = 'FlowSplitArrowUpIcon';

export { FlowSplitArrowUpIcon };
