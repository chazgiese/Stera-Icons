import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowLeftArrowIcon as FlowLeftArrowIconRegular } from './flow-left-arrow';
import { FlowLeftArrowIconBold } from './flow-left-arrow-bold';
import { FlowLeftArrowIconFilled } from './flow-left-arrow-filled';
import { FlowLeftArrowIconFilltone } from './flow-left-arrow-filltone';
import { FlowLeftArrowIconLinetone } from './flow-left-arrow-linetone';

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
    case 'filltone':
      return <FlowLeftArrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowLeftArrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowLeftArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowLeftArrowIcon.displayName = 'FlowLeftArrowIcon';

export { FlowLeftArrowIcon };
