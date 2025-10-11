import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExclamationPointIcon as ExclamationPointIconRegular } from './exclamation-point';
import { ExclamationPointIconBold } from './exclamation-point-bold';
import { ExclamationPointIconFilled } from './exclamation-point-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ExclamationPointIconProps extends IconProps {
  variant?: IconVariant;
}

const ExclamationPointIcon = memo(forwardRef<SVGSVGElement, ExclamationPointIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ExclamationPointIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ExclamationPointIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ExclamationPointIconRegular ref={ref} {...props} />;
  }
}));

ExclamationPointIcon.displayName = 'ExclamationPointIcon';

export { ExclamationPointIcon };
