import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextAlignLeftIcon as TextAlignLeftIconRegular } from './text-align-left';
import { TextAlignLeftIconBold } from './text-align-left-bold';
import { TextAlignLeftIconFilled } from './text-align-left-filled';
import { TextAlignLeftIconFilltone } from './text-align-left-filltone';
import { TextAlignLeftIconLinetone } from './text-align-left-linetone';

export interface TextAlignLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const TextAlignLeftIcon = memo(forwardRef<SVGSVGElement, TextAlignLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextAlignLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextAlignLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextAlignLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextAlignLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextAlignLeftIconRegular ref={ref} {...props} />;
  }
}));

TextAlignLeftIcon.displayName = 'TextAlignLeftIcon';

export { TextAlignLeftIcon };
