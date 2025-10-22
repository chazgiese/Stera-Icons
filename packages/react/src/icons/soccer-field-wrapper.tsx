import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SoccerFieldIcon as RegularSoccerFieldIcon } from './soccer-field';
import { SoccerFieldIconBold } from './soccer-field-bold';
import { SoccerFieldIconFilled } from './soccer-field-filled';
import { SoccerFieldIconFilltone } from './soccer-field-filltone';
import { SoccerFieldIconLinetone } from './soccer-field-linetone';

export interface SoccerFieldIconProps extends IconProps {
  variant?: IconVariant;
}

const SoccerFieldIcon = memo(forwardRef<SVGSVGElement, SoccerFieldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SoccerFieldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SoccerFieldIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SoccerFieldIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SoccerFieldIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSoccerFieldIcon ref={ref} {...props} />;
  }
}));

SoccerFieldIcon.displayName = 'SoccerFieldIcon';

export { SoccerFieldIcon };
