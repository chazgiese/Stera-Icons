import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BriefcaseIcon as BriefcaseIconRegular } from './briefcase';
import { BriefcaseIconBold } from './briefcase-bold';
import { BriefcaseIconFilled } from './briefcase-filled';
import { BriefcaseIconFilltone } from './briefcase-filltone';
import { BriefcaseIconLinetone } from './briefcase-linetone';

export interface BriefcaseIconProps extends IconProps {
  variant?: IconVariant;
}

const BriefcaseIcon = memo(forwardRef<SVGSVGElement, BriefcaseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BriefcaseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BriefcaseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BriefcaseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BriefcaseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <BriefcaseIconRegular ref={ref} {...props} />;
  }
}));

BriefcaseIcon.displayName = 'BriefcaseIcon';

export { BriefcaseIcon };
