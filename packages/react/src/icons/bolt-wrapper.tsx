import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BoltIcon as BoltIconRegular } from './bolt';
import { BoltIconBold } from './bolt-bold';
import { BoltIconFilled } from './bolt-filled';
import { BoltIconFilltone } from './bolt-filltone';
import { BoltIconLinetone } from './bolt-linetone';

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
    case 'filltone':
      return <BoltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BoltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BoltIconRegular ref={ref} {...props} />;
  }
}));

BoltIcon.displayName = 'BoltIcon';

export { BoltIcon };
