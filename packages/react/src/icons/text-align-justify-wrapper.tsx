import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextAlignJustifyIcon as TextAlignJustifyIconRegular } from './text-align-justify';
import { TextAlignJustifyIconBold } from './text-align-justify-bold';
import { TextAlignJustifyIconFilled } from './text-align-justify-filled';
import { TextAlignJustifyIconFilltone } from './text-align-justify-filltone';
import { TextAlignJustifyIconLinetone } from './text-align-justify-linetone';

export interface TextAlignJustifyIconProps extends IconProps {
  variant?: IconVariant;
}

const TextAlignJustifyIcon = memo(forwardRef<SVGSVGElement, TextAlignJustifyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextAlignJustifyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextAlignJustifyIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextAlignJustifyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextAlignJustifyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextAlignJustifyIconRegular ref={ref} {...props} />;
  }
}));

TextAlignJustifyIcon.displayName = 'TextAlignJustifyIcon';

export { TextAlignJustifyIcon };
