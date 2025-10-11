import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashIcon as HashIconRegular } from './hash';
import { HashIconBold } from './hash-bold';
import { HashIconFilled } from './hash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HashIconProps extends IconProps {
  variant?: IconVariant;
}

const HashIcon = memo(forwardRef<SVGSVGElement, HashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HashIconRegular ref={ref} {...props} />;
  }
}));

HashIcon.displayName = 'HashIcon';

export { HashIcon };
