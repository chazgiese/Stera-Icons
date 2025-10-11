import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudArrowDownIcon as CloudArrowDownIconRegular } from './cloud-arrow-down';
import { CloudArrowDownIconBold } from './cloud-arrow-down-bold';
import { CloudArrowDownIconFilled } from './cloud-arrow-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CloudArrowDownIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudArrowDownIcon = memo(forwardRef<SVGSVGElement, CloudArrowDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudArrowDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudArrowDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudArrowDownIconRegular ref={ref} {...props} />;
  }
}));

CloudArrowDownIcon.displayName = 'CloudArrowDownIcon';

export { CloudArrowDownIcon };
