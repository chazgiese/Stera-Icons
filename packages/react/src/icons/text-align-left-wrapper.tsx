import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignLeftIcon as TextAlignLeftIconRegular } from './text-align-left';
import { TextAlignLeftIconBold } from './text-align-left-bold';
import { TextAlignLeftIconFilled } from './text-align-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TextAlignLeftIconRegular ref={ref} {...props} />;
  }
}));

TextAlignLeftIcon.displayName = 'TextAlignLeftIcon';

export { TextAlignLeftIcon };
