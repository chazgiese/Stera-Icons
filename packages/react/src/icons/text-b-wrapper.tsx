import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextBIcon as TextBIconRegular } from './text-b';
import { TextBIconBold } from './text-b-bold';
import { TextBIconFilled } from './text-b-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextBIconProps extends IconProps {
  variant?: IconVariant;
}

const TextBIcon = memo(forwardRef<SVGSVGElement, TextBIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextBIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextBIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextBIconRegular ref={ref} {...props} />;
  }
}));

TextBIcon.displayName = 'TextBIcon';

export { TextBIcon };
