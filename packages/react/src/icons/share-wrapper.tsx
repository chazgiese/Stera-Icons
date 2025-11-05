import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ShareIcon as RegularShareIcon } from './share';
import { ShareIconBold } from './share-bold';
import { ShareIconFilled } from './share-filled';
import { ShareIconFilltone } from './share-filltone';
import { ShareIconLinetone } from './share-linetone';

export interface ShareIconProps extends IconProps {
  variant?: IconVariant;
}

const ShareIcon = memo(forwardRef<SVGSVGElement, ShareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ShareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ShareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ShareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ShareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularShareIcon ref={ref} {...props} />;
  }
}));

ShareIcon.displayName = 'ShareIcon';

export { ShareIcon };
