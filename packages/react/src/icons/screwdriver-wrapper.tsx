import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScrewdriverIcon as RegularScrewdriverIcon } from './screwdriver';
import { ScrewdriverIconBold } from './screwdriver-bold';
import { ScrewdriverIconFilled } from './screwdriver-filled';
import { ScrewdriverIconFilltone } from './screwdriver-filltone';
import { ScrewdriverIconLinetone } from './screwdriver-linetone';

export interface ScrewdriverIconProps extends IconProps {
  variant?: IconVariant;
}

const ScrewdriverIcon = memo(forwardRef<SVGSVGElement, ScrewdriverIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScrewdriverIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScrewdriverIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScrewdriverIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScrewdriverIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularScrewdriverIcon ref={ref} {...props} />;
  }
}));

ScrewdriverIcon.displayName = 'ScrewdriverIcon';

export { ScrewdriverIcon };
