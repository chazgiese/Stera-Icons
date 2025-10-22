import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MedalIcon as MedalIconRegular } from './medal';
import { MedalIconBold } from './medal-bold';
import { MedalIconFilled } from './medal-filled';
import { MedalIconFilltone } from './medal-filltone';
import { MedalIconLinetone } from './medal-linetone';

export interface MedalIconProps extends IconProps {
  variant?: IconVariant;
}

const MedalIcon = memo(forwardRef<SVGSVGElement, MedalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MedalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MedalIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MedalIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MedalIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MedalIconRegular ref={ref} {...props} />;
  }
}));

MedalIcon.displayName = 'MedalIcon';

export { MedalIcon };
