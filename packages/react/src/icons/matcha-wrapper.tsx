import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MatchaIcon as MatchaIconRegular } from './matcha';
import { MatchaIconBold } from './matcha-bold';
import { MatchaIconFilled } from './matcha-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MatchaIconProps extends IconProps {
  variant?: IconVariant;
}

const MatchaIcon = memo(forwardRef<SVGSVGElement, MatchaIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MatchaIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MatchaIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MatchaIconRegular ref={ref} {...props} />;
  }
}));

MatchaIcon.displayName = 'MatchaIcon';

export { MatchaIcon };
