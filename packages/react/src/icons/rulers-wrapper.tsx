import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RulersIcon as RulersIconRegular } from './rulers';
import { RulersIconBold } from './rulers-bold';
import { RulersIconFilled } from './rulers-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <RulersIconRegular ref={ref} {...props} />;
  }
}));

RulersIcon.displayName = 'RulersIcon';

export { RulersIcon };
