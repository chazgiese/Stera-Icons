import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { KeyIcon as KeyIconRegular } from './key';
import { KeyIconBold } from './key-bold';
import { KeyIconFilled } from './key-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface KeyIconProps extends IconProps {
  variant?: IconVariant;
}

const KeyIcon = memo(forwardRef<SVGSVGElement, KeyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <KeyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <KeyIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <KeyIconRegular ref={ref} {...props} />;
  }
}));

KeyIcon.displayName = 'KeyIcon';

export { KeyIcon };
