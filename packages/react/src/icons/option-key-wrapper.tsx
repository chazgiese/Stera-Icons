import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { OptionKeyIcon as OptionKeyIconRegular } from './option-key';
import { OptionKeyIconBold } from './option-key-bold';
import { OptionKeyIconFilled } from './option-key-filled';
import { OptionKeyIconFilltone } from './option-key-filltone';
import { OptionKeyIconLinetone } from './option-key-linetone';

export interface OptionKeyIconProps extends IconProps {
  variant?: IconVariant;
}

const OptionKeyIcon = memo(forwardRef<SVGSVGElement, OptionKeyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <OptionKeyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <OptionKeyIconBold ref={ref} {...props} />;
    case 'filltone':
      return <OptionKeyIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <OptionKeyIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <OptionKeyIconRegular ref={ref} {...props} />;
  }
}));

OptionKeyIcon.displayName = 'OptionKeyIcon';

export { OptionKeyIcon };
