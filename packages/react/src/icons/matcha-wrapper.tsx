import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MatchaIcon as RegularMatchaIcon } from './matcha';
import { MatchaIconBold } from './matcha-bold';
import { MatchaIconFilled } from './matcha-filled';
import { MatchaIconFilltone } from './matcha-filltone';
import { MatchaIconLinetone } from './matcha-linetone';

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
    case 'filltone':
      return <MatchaIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MatchaIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMatchaIcon ref={ref} {...props} />;
  }
}));

MatchaIcon.displayName = 'MatchaIcon';

export { MatchaIcon };
