import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignRightIcon as TextAlignRightIconRegular } from './text-align-right';
import { TextAlignRightIconBold } from './text-align-right-bold';
import { TextAlignRightIconFilled } from './text-align-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextAlignRightIconProps extends IconProps {
  variant?: IconVariant;
}

const TextAlignRightIcon = memo(forwardRef<SVGSVGElement, TextAlignRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextAlignRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextAlignRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextAlignRightIconRegular ref={ref} {...props} />;
  }
}));

TextAlignRightIcon.displayName = 'TextAlignRightIcon';

export { TextAlignRightIcon };
