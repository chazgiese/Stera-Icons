import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskIcon as FlaskIconRegular } from './flask';
import { FlaskIconBold } from './flask-bold';
import { FlaskIconFilled } from './flask-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlaskIconProps extends IconProps {
  variant?: IconVariant;
}

const FlaskIcon = memo(forwardRef<SVGSVGElement, FlaskIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlaskIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlaskIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlaskIconRegular ref={ref} {...props} />;
  }
}));

FlaskIcon.displayName = 'FlaskIcon';

export { FlaskIcon };
