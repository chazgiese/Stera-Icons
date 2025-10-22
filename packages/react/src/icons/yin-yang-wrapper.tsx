import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { YinYangIcon as RegularYinYangIcon } from './yin-yang';
import { YinYangIconBold } from './yin-yang-bold';
import { YinYangIconFilled } from './yin-yang-filled';
import { YinYangIconFilltone } from './yin-yang-filltone';
import { YinYangIconLinetone } from './yin-yang-linetone';

export interface YinYangIconProps extends IconProps {
  variant?: IconVariant;
}

const YinYangIcon = memo(forwardRef<SVGSVGElement, YinYangIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <YinYangIconFilled ref={ref} {...props} />;
    case 'bold':
      return <YinYangIconBold ref={ref} {...props} />;
    case 'filltone':
      return <YinYangIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <YinYangIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularYinYangIcon ref={ref} {...props} />;
  }
}));

YinYangIcon.displayName = 'YinYangIcon';

export { YinYangIcon };
