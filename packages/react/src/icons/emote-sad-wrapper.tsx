import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EmoteSadIcon as EmoteSadIconRegular } from './emote-sad';
import { EmoteSadIconBold } from './emote-sad-bold';
import { EmoteSadIconFilled } from './emote-sad-filled';
import { EmoteSadIconFilltone } from './emote-sad-filltone';
import { EmoteSadIconLinetone } from './emote-sad-linetone';

export interface EmoteSadIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteSadIcon = memo(forwardRef<SVGSVGElement, EmoteSadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteSadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteSadIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EmoteSadIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EmoteSadIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <EmoteSadIconRegular ref={ref} {...props} />;
  }
}));

EmoteSadIcon.displayName = 'EmoteSadIcon';

export { EmoteSadIcon };
