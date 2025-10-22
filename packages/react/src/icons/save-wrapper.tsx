import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SaveIcon as RegularSaveIcon } from './save';
import { SaveIconBold } from './save-bold';
import { SaveIconFilled } from './save-filled';
import { SaveIconFilltone } from './save-filltone';
import { SaveIconLinetone } from './save-linetone';

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
    case 'filltone':
      return <SaveIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SaveIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSaveIcon ref={ref} {...props} />;
  }
}));

SaveIcon.displayName = 'SaveIcon';

export { SaveIcon };
