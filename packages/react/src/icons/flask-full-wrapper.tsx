import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskFullIcon as RegularFlaskFullIcon } from './flask-full';
import { FlaskFullIconDuotone as FlaskFullIconDuotone } from './flask-full-duotone';
import { FlaskFullIconBold as FlaskFullIconBold } from './flask-full-bold';
import { FlaskFullIconBoldDuotone as FlaskFullIconBoldDuotone } from './flask-full-bold-duotone';
import { FlaskFullIconFill as FlaskFullIconFill } from './flask-full-fill';
import { FlaskFullIconFillDuotone as FlaskFullIconFillDuotone } from './flask-full-fill-duotone';

export interface FlaskFullIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlaskFullIcon = memo(forwardRef<SVGSVGElement, FlaskFullIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlaskFullIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlaskFullIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlaskFullIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlaskFullIconFill ref={ref} {...props} />;
  if (duotone) return <FlaskFullIconDuotone ref={ref} {...props} />;
  return <RegularFlaskFullIcon ref={ref} {...props} />;
}));

FlaskFullIcon.displayName = 'FlaskFullIcon';

export { FlaskFullIcon };
