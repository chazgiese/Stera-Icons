import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskFullIcon as FlaskFullIconRegular } from './flask-full';
import { FlaskFullIconBold } from './flask-full-bold';
import { FlaskFullIconFilled } from './flask-full-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <FlaskFullIconRegular ref={ref} {...props} />;
  }
}));

FlaskFullIcon.displayName = 'FlaskFullIcon';

export { FlaskFullIcon };
