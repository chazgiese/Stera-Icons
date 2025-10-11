import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EditSquareIcon as EditSquareIconRegular } from './edit-square';
import { EditSquareIconBold } from './edit-square-bold';
import { EditSquareIconFilled } from './edit-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <EditSquareIconRegular ref={ref} {...props} />;
  }
}));

EditSquareIcon.displayName = 'EditSquareIcon';

export { EditSquareIcon };
