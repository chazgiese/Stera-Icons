import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TvPlayAltIcon as TvPlayAltIconRegular } from './tv-play-alt';
import { TvPlayAltIconBold } from './tv-play-alt-bold';
import { TvPlayAltIconFilled } from './tv-play-alt-filled';
import { TvPlayAltIconFilltone } from './tv-play-alt-filltone';
import { TvPlayAltIconLinetone } from './tv-play-alt-linetone';

export interface TvPlayAltIconProps extends IconProps {
  variant?: IconVariant;
}

const TvPlayAltIcon = memo(forwardRef<SVGSVGElement, TvPlayAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TvPlayAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TvPlayAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TvPlayAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TvPlayAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TvPlayAltIconRegular ref={ref} {...props} />;
  }
}));

TvPlayAltIcon.displayName = 'TvPlayAltIcon';

export { TvPlayAltIcon };
