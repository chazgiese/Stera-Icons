import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextBIcon as RegularTextBIcon } from './text-b';
import { TextBIconBold } from './text-b-bold';
import { TextBIconFilled } from './text-b-filled';
import { TextBIconFilltone } from './text-b-filltone';
import { TextBIconLinetone } from './text-b-linetone';

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
    case 'filltone':
      return <TextBIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextBIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextBIcon ref={ref} {...props} />;
  }
}));

TextBIcon.displayName = 'TextBIcon';

export { TextBIcon };
