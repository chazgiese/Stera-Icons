import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowSplitDownIcon as FlowSplitDownIconRegular } from './flow-split-down';
import { FlowSplitDownIconBold } from './flow-split-down-bold';
import { FlowSplitDownIconFilled } from './flow-split-down-filled';
import { FlowSplitDownIconFilltone } from './flow-split-down-filltone';
import { FlowSplitDownIconLinetone } from './flow-split-down-linetone';

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
    case 'filltone':
      return <FlowSplitDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowSplitDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowSplitDownIconRegular ref={ref} {...props} />;
  }
}));

FlowSplitDownIcon.displayName = 'FlowSplitDownIcon';

export { FlowSplitDownIcon };
