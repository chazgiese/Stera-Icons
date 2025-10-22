import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LabelIcon as RegularLabelIcon } from './label';
import { LabelIconBold } from './label-bold';
import { LabelIconFilled } from './label-filled';
import { LabelIconFilltone } from './label-filltone';
import { LabelIconLinetone } from './label-linetone';

export interface LabelIconProps extends IconProps {
  variant?: IconVariant;
}

const LabelIcon = memo(forwardRef<SVGSVGElement, LabelIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LabelIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LabelIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LabelIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LabelIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLabelIcon ref={ref} {...props} />;
  }
}));

LabelIcon.displayName = 'LabelIcon';

export { LabelIcon };
