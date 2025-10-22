import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextAlignRightIcon as RegularTextAlignRightIcon } from './text-align-right';
import { TextAlignRightIconBold } from './text-align-right-bold';
import { TextAlignRightIconFilled } from './text-align-right-filled';
import { TextAlignRightIconFilltone } from './text-align-right-filltone';
import { TextAlignRightIconLinetone } from './text-align-right-linetone';

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
    case 'filltone':
      return <TextAlignRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextAlignRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextAlignRightIcon ref={ref} {...props} />;
  }
}));

TextAlignRightIcon.displayName = 'TextAlignRightIcon';

export { TextAlignRightIcon };
