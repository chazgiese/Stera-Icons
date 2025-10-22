import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RulersIcon as RegularRulersIcon } from './rulers';
import { RulersIconBold } from './rulers-bold';
import { RulersIconFilled } from './rulers-filled';
import { RulersIconFilltone } from './rulers-filltone';
import { RulersIconLinetone } from './rulers-linetone';

export interface RulersIconProps extends IconProps {
  variant?: IconVariant;
}

const RulersIcon = memo(forwardRef<SVGSVGElement, RulersIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RulersIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RulersIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RulersIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RulersIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRulersIcon ref={ref} {...props} />;
  }
}));

RulersIcon.displayName = 'RulersIcon';

export { RulersIcon };
