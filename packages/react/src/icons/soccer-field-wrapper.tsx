import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SoccerFieldIcon as SoccerFieldIconRegular } from './soccer-field';
import { SoccerFieldIconBold } from './soccer-field-bold';
import { SoccerFieldIconFilled } from './soccer-field-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SoccerFieldIconRegular ref={ref} {...props} />;
  }
}));

SoccerFieldIcon.displayName = 'SoccerFieldIcon';

export { SoccerFieldIcon };
