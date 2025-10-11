import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalIcon as MedalIconRegular } from './medal';
import { MedalIconBold } from './medal-bold';
import { MedalIconFilled } from './medal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <MedalIconRegular ref={ref} {...props} />;
  }
}));

MedalIcon.displayName = 'MedalIcon';

export { MedalIcon };
