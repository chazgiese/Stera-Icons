import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EditSquareIcon as RegularEditSquareIcon } from './edit-square';
import { EditSquareIconBold } from './edit-square-bold';
import { EditSquareIconFilled } from './edit-square-filled';
import { EditSquareIconFilltone } from './edit-square-filltone';
import { EditSquareIconLinetone } from './edit-square-linetone';

export interface EditSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const EditSquareIcon = memo(forwardRef<SVGSVGElement, EditSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EditSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EditSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EditSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EditSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEditSquareIcon ref={ref} {...props} />;
  }
}));

EditSquareIcon.displayName = 'EditSquareIcon';

export { EditSquareIcon };
