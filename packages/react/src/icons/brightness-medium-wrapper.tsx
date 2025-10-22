import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrightnessMediumIcon as BrightnessMediumIconRegular } from './brightness-medium';
import { BrightnessMediumIconBold } from './brightness-medium-bold';
import { BrightnessMediumIconFilled } from './brightness-medium-filled';
import { BrightnessMediumIconFilltone } from './brightness-medium-filltone';
import { BrightnessMediumIconLinetone } from './brightness-medium-linetone';

export interface BrightnessMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const BrightnessMediumIcon = memo(forwardRef<SVGSVGElement, BrightnessMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrightnessMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrightnessMediumIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrightnessMediumIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrightnessMediumIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BrightnessMediumIconRegular ref={ref} {...props} />;
  }
}));

BrightnessMediumIcon.displayName = 'BrightnessMediumIcon';

export { BrightnessMediumIcon };
