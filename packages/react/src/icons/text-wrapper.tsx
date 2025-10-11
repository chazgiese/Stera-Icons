import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextIcon as TextIconRegular } from './text';
import { TextIconBold } from './text-bold';
import { TextIconFilled } from './text-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextIconProps extends IconProps {
  variant?: IconVariant;
}

const TextIcon = memo(forwardRef<SVGSVGElement, TextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextIconRegular ref={ref} {...props} />;
  }
}));

TextIcon.displayName = 'TextIcon';

export { TextIcon };
