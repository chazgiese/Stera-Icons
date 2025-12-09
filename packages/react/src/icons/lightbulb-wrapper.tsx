import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LightbulbIcon as RegularLightbulbIcon } from './lightbulb';
import { LightbulbIconBold } from './lightbulb-bold';
import { LightbulbIconFilled } from './lightbulb-filled';
import { LightbulbIconFilltone } from './lightbulb-filltone';
import { LightbulbIconLinetone } from './lightbulb-linetone';

export interface LightbulbIconProps extends IconProps {
  variant?: IconVariant;
}

const LightbulbIcon = memo(forwardRef<SVGSVGElement, LightbulbIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LightbulbIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LightbulbIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LightbulbIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LightbulbIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLightbulbIcon ref={ref} {...props} />;
  }
}));

LightbulbIcon.displayName = 'LightbulbIcon';

export { LightbulbIcon };
