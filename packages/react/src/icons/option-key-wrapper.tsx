import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OptionKeyIcon as OptionKeyIconRegular } from './option-key';
import { OptionKeyIconBold } from './option-key-bold';
import { OptionKeyIconFilled } from './option-key-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <OptionKeyIconRegular ref={ref} {...props} />;
  }
}));

OptionKeyIcon.displayName = 'OptionKeyIcon';

export { OptionKeyIcon };
