import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlaskFullIcon as RegularFlaskFullIcon } from './flask-full';
import { FlaskFullIconBold } from './flask-full-bold';
import { FlaskFullIconFilled } from './flask-full-filled';
import { FlaskFullIconFilltone } from './flask-full-filltone';
import { FlaskFullIconLinetone } from './flask-full-linetone';

export interface FlaskFullIconProps extends IconProps {
  variant?: IconVariant;
}

const FlaskFullIcon = memo(forwardRef<SVGSVGElement, FlaskFullIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlaskFullIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlaskFullIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FlaskFullIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlaskFullIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlaskFullIcon ref={ref} {...props} />;
  }
}));

FlaskFullIcon.displayName = 'FlaskFullIcon';

export { FlaskFullIcon };
