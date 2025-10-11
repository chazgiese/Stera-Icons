import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayRectangleIcon as PlayRectangleIconRegular } from './play-rectangle';
import { PlayRectangleIconBold } from './play-rectangle-bold';
import { PlayRectangleIconFilled } from './play-rectangle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PlayRectangleIconRegular ref={ref} {...props} />;
  }
}));

PlayRectangleIcon.displayName = 'PlayRectangleIcon';

export { PlayRectangleIcon };
