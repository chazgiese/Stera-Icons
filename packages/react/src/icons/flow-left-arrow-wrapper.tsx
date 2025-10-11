import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowLeftArrowIcon as FlowLeftArrowIconRegular } from './flow-left-arrow';
import { FlowLeftArrowIconBold } from './flow-left-arrow-bold';
import { FlowLeftArrowIconFilled } from './flow-left-arrow-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlowLeftArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowLeftArrowIcon = memo(forwardRef<SVGSVGElement, FlowLeftArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowLeftArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowLeftArrowIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowLeftArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowLeftArrowIcon.displayName = 'FlowLeftArrowIcon';

export { FlowLeftArrowIcon };
