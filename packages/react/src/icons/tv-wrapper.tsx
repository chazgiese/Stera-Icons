import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TvIcon as RegularTvIcon } from './tv';
import { TvIconBold } from './tv-bold';
import { TvIconFilled } from './tv-filled';
import { TvIconFilltone } from './tv-filltone';
import { TvIconLinetone } from './tv-linetone';

export interface TvIconProps extends IconProps {
  variant?: IconVariant;
}

const TvIcon = memo(forwardRef<SVGSVGElement, TvIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TvIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TvIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TvIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TvIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTvIcon ref={ref} {...props} />;
  }
}));

TvIcon.displayName = 'TvIcon';

export { TvIcon };
