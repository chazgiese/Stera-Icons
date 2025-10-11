import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoltIcon as BoltIconRegular } from './bolt';
import { BoltIconBold } from './bolt-bold';
import { BoltIconFilled } from './bolt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BoltIconProps extends IconProps {
  variant?: IconVariant;
}

const BoltIcon = memo(forwardRef<SVGSVGElement, BoltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BoltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BoltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BoltIconRegular ref={ref} {...props} />;
  }
}));

BoltIcon.displayName = 'BoltIcon';

export { BoltIcon };
