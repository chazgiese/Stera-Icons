import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LabelAltIcon as LabelAltIconRegular } from './label-alt';
import { LabelAltIconBold } from './label-alt-bold';
import { LabelAltIconFilled } from './label-alt-filled';
import { LabelAltIconFilltone } from './label-alt-filltone';
import { LabelAltIconLinetone } from './label-alt-linetone';

export interface LabelAltIconProps extends IconProps {
  variant?: IconVariant;
}

const LabelAltIcon = memo(forwardRef<SVGSVGElement, LabelAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LabelAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LabelAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LabelAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LabelAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LabelAltIconRegular ref={ref} {...props} />;
  }
}));

LabelAltIcon.displayName = 'LabelAltIcon';

export { LabelAltIcon };
