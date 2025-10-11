import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SaveIcon as SaveIconRegular } from './save';
import { SaveIconBold } from './save-bold';
import { SaveIconFilled } from './save-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SaveIconProps extends IconProps {
  variant?: IconVariant;
}

const SaveIcon = memo(forwardRef<SVGSVGElement, SaveIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SaveIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SaveIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SaveIconRegular ref={ref} {...props} />;
  }
}));

SaveIcon.displayName = 'SaveIcon';

export { SaveIcon };
