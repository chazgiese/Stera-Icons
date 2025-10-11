import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrophyIcon as TrophyIconRegular } from './trophy';
import { TrophyIconBold } from './trophy-bold';
import { TrophyIconFilled } from './trophy-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TrophyIconRegular ref={ref} {...props} />;
  }
}));

TrophyIcon.displayName = 'TrophyIcon';

export { TrophyIcon };
