import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { YinYangIcon as YinYangIconRegular } from './yin-yang';
import { YinYangIconBold } from './yin-yang-bold';
import { YinYangIconFilled } from './yin-yang-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <YinYangIconRegular ref={ref} {...props} />;
  }
}));

YinYangIcon.displayName = 'YinYangIcon';

export { YinYangIcon };
