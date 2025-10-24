import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextBoldIcon as RegularTextBoldIcon } from './text-bold';
import { TextBoldIconBold } from './text-bold-bold';
import { TextBoldIconFilled } from './text-bold-filled';
import { TextBoldIconFilltone } from './text-bold-filltone';
import { TextBoldIconLinetone } from './text-bold-linetone';

export interface TextBoldIconProps extends IconProps {
  variant?: IconVariant;
}

const TextBoldIcon = memo(forwardRef<SVGSVGElement, TextBoldIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextBoldIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextBoldIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextBoldIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextBoldIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextBoldIcon ref={ref} {...props} />;
  }
}));

TextBoldIcon.displayName = 'TextBoldIcon';

export { TextBoldIcon };
