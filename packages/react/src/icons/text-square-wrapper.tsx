import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSquareIcon as TextSquareIconRegular } from './text-square';
import { TextSquareIconBold } from './text-square-bold';
import { TextSquareIconFilled } from './text-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TextSquareIconRegular ref={ref} {...props} />;
  }
}));

TextSquareIcon.displayName = 'TextSquareIcon';

export { TextSquareIcon };
