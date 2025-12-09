import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LightbulbOnIcon as RegularLightbulbOnIcon } from './lightbulb-on';
import { LightbulbOnIconBold } from './lightbulb-on-bold';
import { LightbulbOnIconFilled } from './lightbulb-on-filled';
import { LightbulbOnIconFilltone } from './lightbulb-on-filltone';
import { LightbulbOnIconLinetone } from './lightbulb-on-linetone';

export interface LightbulbOnIconProps extends IconProps {
  variant?: IconVariant;
}

const LightbulbOnIcon = memo(forwardRef<SVGSVGElement, LightbulbOnIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LightbulbOnIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LightbulbOnIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LightbulbOnIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LightbulbOnIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLightbulbOnIcon ref={ref} {...props} />;
  }
}));

LightbulbOnIcon.displayName = 'LightbulbOnIcon';

export { LightbulbOnIcon };
