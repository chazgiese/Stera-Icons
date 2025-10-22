import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlayRectangleIcon as PlayRectangleIconRegular } from './play-rectangle';
import { PlayRectangleIconBold } from './play-rectangle-bold';
import { PlayRectangleIconFilled } from './play-rectangle-filled';
import { PlayRectangleIconFilltone } from './play-rectangle-filltone';
import { PlayRectangleIconLinetone } from './play-rectangle-linetone';

export interface PlayRectangleIconProps extends IconProps {
  variant?: IconVariant;
}

const PlayRectangleIcon = memo(forwardRef<SVGSVGElement, PlayRectangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlayRectangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlayRectangleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PlayRectangleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlayRectangleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlayRectangleIconRegular ref={ref} {...props} />;
  }
}));

PlayRectangleIcon.displayName = 'PlayRectangleIcon';

export { PlayRectangleIcon };
