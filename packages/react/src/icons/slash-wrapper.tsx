import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SlashIcon as RegularSlashIcon } from './slash';
import { SlashIconBold } from './slash-bold';
import { SlashIconFilled } from './slash-filled';
import { SlashIconFilltone } from './slash-filltone';
import { SlashIconLinetone } from './slash-linetone';

export interface SlashIconProps extends IconProps {
  variant?: IconVariant;
}

const SlashIcon = memo(forwardRef<SVGSVGElement, SlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SlashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSlashIcon ref={ref} {...props} />;
  }
}));

SlashIcon.displayName = 'SlashIcon';

export { SlashIcon };
