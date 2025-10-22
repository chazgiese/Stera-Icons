import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlaskIcon as RegularFlaskIcon } from './flask';
import { FlaskIconBold } from './flask-bold';
import { FlaskIconFilled } from './flask-filled';
import { FlaskIconFilltone } from './flask-filltone';
import { FlaskIconLinetone } from './flask-linetone';

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
    case 'filltone':
      return <FlaskIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlaskIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlaskIcon ref={ref} {...props} />;
  }
}));

FlaskIcon.displayName = 'FlaskIcon';

export { FlaskIcon };
