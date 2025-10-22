import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScribbleIcon as ScribbleIconRegular } from './scribble';
import { ScribbleIconBold } from './scribble-bold';
import { ScribbleIconFilled } from './scribble-filled';
import { ScribbleIconFilltone } from './scribble-filltone';
import { ScribbleIconLinetone } from './scribble-linetone';

export interface ScribbleIconProps extends IconProps {
  variant?: IconVariant;
}

const ScribbleIcon = memo(forwardRef<SVGSVGElement, ScribbleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScribbleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScribbleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScribbleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScribbleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScribbleIconRegular ref={ref} {...props} />;
  }
}));

ScribbleIcon.displayName = 'ScribbleIcon';

export { ScribbleIcon };
