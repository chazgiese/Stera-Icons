import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlaskIcon as RegularFlaskIcon } from './flask';
import { FlaskIconDuotone as FlaskIconDuotone } from './flask-duotone';
import { FlaskIconBold as FlaskIconBold } from './flask-bold';
import { FlaskIconBoldDuotone as FlaskIconBoldDuotone } from './flask-bold-duotone';
import { FlaskIconFill as FlaskIconFill } from './flask-fill';
import { FlaskIconFillDuotone as FlaskIconFillDuotone } from './flask-fill-duotone';

export interface FlaskIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FlaskIcon = memo(forwardRef<SVGSVGElement, FlaskIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlaskIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FlaskIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FlaskIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FlaskIconFill ref={ref} {...props} />;
  if (duotone) return <FlaskIconDuotone ref={ref} {...props} />;
  return <RegularFlaskIcon ref={ref} {...props} />;
}));

FlaskIcon.displayName = 'FlaskIcon';

export { FlaskIcon };
