import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PencilRulerIcon as RegularPencilRulerIcon } from './pencil-ruler';
import { PencilRulerIconBold } from './pencil-ruler-bold';
import { PencilRulerIconFilled } from './pencil-ruler-filled';
import { PencilRulerIconFilltone } from './pencil-ruler-filltone';
import { PencilRulerIconLinetone } from './pencil-ruler-linetone';

export interface PencilRulerIconProps extends IconProps {
  variant?: IconVariant;
}

const PencilRulerIcon = memo(forwardRef<SVGSVGElement, PencilRulerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PencilRulerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PencilRulerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PencilRulerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PencilRulerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPencilRulerIcon ref={ref} {...props} />;
  }
}));

PencilRulerIcon.displayName = 'PencilRulerIcon';

export { PencilRulerIcon };
