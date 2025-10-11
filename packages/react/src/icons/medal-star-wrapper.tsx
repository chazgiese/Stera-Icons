import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalStarIcon as MedalStarIconRegular } from './medal-star';
import { MedalStarIconBold } from './medal-star-bold';
import { MedalStarIconFilled } from './medal-star-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MedalStarIconProps extends IconProps {
  variant?: IconVariant;
}

const MedalStarIcon = memo(forwardRef<SVGSVGElement, MedalStarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MedalStarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MedalStarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MedalStarIconRegular ref={ref} {...props} />;
  }
}));

MedalStarIcon.displayName = 'MedalStarIcon';

export { MedalStarIcon };
