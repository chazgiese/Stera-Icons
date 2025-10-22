import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DragHandleIcon as DragHandleIconRegular } from './drag-handle';
import { DragHandleIconBold } from './drag-handle-bold';
import { DragHandleIconFilled } from './drag-handle-filled';
import { DragHandleIconFilltone } from './drag-handle-filltone';
import { DragHandleIconLinetone } from './drag-handle-linetone';

export interface DragHandleIconProps extends IconProps {
  variant?: IconVariant;
}

const DragHandleIcon = memo(forwardRef<SVGSVGElement, DragHandleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DragHandleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DragHandleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DragHandleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DragHandleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DragHandleIconRegular ref={ref} {...props} />;
  }
}));

DragHandleIcon.displayName = 'DragHandleIcon';

export { DragHandleIcon };
