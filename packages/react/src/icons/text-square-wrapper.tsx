import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextSquareIcon as TextSquareIconRegular } from './text-square';
import { TextSquareIconBold } from './text-square-bold';
import { TextSquareIconFilled } from './text-square-filled';
import { TextSquareIconFilltone } from './text-square-filltone';
import { TextSquareIconLinetone } from './text-square-linetone';

export interface TextSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const TextSquareIcon = memo(forwardRef<SVGSVGElement, TextSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextSquareIconRegular ref={ref} {...props} />;
  }
}));

TextSquareIcon.displayName = 'TextSquareIcon';

export { TextSquareIcon };
