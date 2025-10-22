import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AtomIcon as RegularAtomIcon } from './atom';
import { AtomIconBold } from './atom-bold';
import { AtomIconFilled } from './atom-filled';
import { AtomIconFilltone } from './atom-filltone';
import { AtomIconLinetone } from './atom-linetone';

export interface AtomIconProps extends IconProps {
  variant?: IconVariant;
}

const AtomIcon = memo(forwardRef<SVGSVGElement, AtomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AtomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AtomIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AtomIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AtomIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAtomIcon ref={ref} {...props} />;
  }
}));

AtomIcon.displayName = 'AtomIcon';

export { AtomIcon };
