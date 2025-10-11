import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleSlashIcon as CircleSlashIconRegular } from './circle-slash';
import { CircleSlashIconBold } from './circle-slash-bold';
import { CircleSlashIconFilled } from './circle-slash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleSlashIcon = memo(forwardRef<SVGSVGElement, CircleSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleSlashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleSlashIconRegular ref={ref} {...props} />;
  }
}));

CircleSlashIcon.displayName = 'CircleSlashIcon';

export { CircleSlashIcon };
