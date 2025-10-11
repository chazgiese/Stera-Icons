import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignJustifyIcon as TextAlignJustifyIconRegular } from './text-align-justify';
import { TextAlignJustifyIconBold } from './text-align-justify-bold';
import { TextAlignJustifyIconFilled } from './text-align-justify-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TextAlignJustifyIconRegular ref={ref} {...props} />;
  }
}));

TextAlignJustifyIcon.displayName = 'TextAlignJustifyIcon';

export { TextAlignJustifyIcon };
