import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyAltIcon as KeyAltIconRegular } from './key-alt';
import { KeyAltIconBold } from './key-alt-bold';
import { KeyAltIconFilled } from './key-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface KeyAltIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyAltIcon = memo(forwardRef<SVGSVGElement, KeyAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <KeyAltIconRegular ref={ref} {...props} />;
  }
}));

KeyAltIcon.displayName = 'KeyAltIcon';

export { KeyAltIcon };
