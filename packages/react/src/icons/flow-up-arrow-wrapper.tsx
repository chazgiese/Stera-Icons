import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlowUpArrowIcon as FlowUpArrowIconRegular } from './flow-up-arrow';
import { FlowUpArrowIconBold } from './flow-up-arrow-bold';
import { FlowUpArrowIconFilled } from './flow-up-arrow-filled';
import { FlowUpArrowIconFilltone } from './flow-up-arrow-filltone';
import { FlowUpArrowIconLinetone } from './flow-up-arrow-linetone';

export interface FlowUpArrowIconProps extends IconProps {
  variant?: IconVariant;
}

const FlowUpArrowIcon = memo(forwardRef<SVGSVGElement, FlowUpArrowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlowUpArrowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlowUpArrowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlowUpArrowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlowUpArrowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlowUpArrowIconRegular ref={ref} {...props} />;
  }
}));

FlowUpArrowIcon.displayName = 'FlowUpArrowIcon';

export { FlowUpArrowIcon };
