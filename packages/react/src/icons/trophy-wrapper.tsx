import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TrophyIcon as TrophyIconRegular } from './trophy';
import { TrophyIconBold } from './trophy-bold';
import { TrophyIconFilled } from './trophy-filled';
import { TrophyIconFilltone } from './trophy-filltone';
import { TrophyIconLinetone } from './trophy-linetone';

export interface TrophyIconProps extends IconProps {
  variant?: IconVariant;
}

const TrophyIcon = memo(forwardRef<SVGSVGElement, TrophyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TrophyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TrophyIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TrophyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TrophyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TrophyIconRegular ref={ref} {...props} />;
  }
}));

TrophyIcon.displayName = 'TrophyIcon';

export { TrophyIcon };
