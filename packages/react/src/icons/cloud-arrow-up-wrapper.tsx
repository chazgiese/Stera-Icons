import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudArrowUpIcon as CloudArrowUpIconRegular } from './cloud-arrow-up';
import { CloudArrowUpIconBold } from './cloud-arrow-up-bold';
import { CloudArrowUpIconFilled } from './cloud-arrow-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CloudArrowUpIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudArrowUpIcon = memo(forwardRef<SVGSVGElement, CloudArrowUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudArrowUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudArrowUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudArrowUpIconRegular ref={ref} {...props} />;
  }
}));

CloudArrowUpIcon.displayName = 'CloudArrowUpIcon';

export { CloudArrowUpIcon };
