import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChevronInwardIcon as RegularChevronInwardIcon } from './chevron-inward';
import { ChevronInwardIconBold } from './chevron-inward-bold';
import { ChevronInwardIconFilled } from './chevron-inward-filled';
import { ChevronInwardIconFilltone } from './chevron-inward-filltone';
import { ChevronInwardIconLinetone } from './chevron-inward-linetone';

export interface ChevronInwardIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronInwardIcon = memo(forwardRef<SVGSVGElement, ChevronInwardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronInwardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronInwardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChevronInwardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChevronInwardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChevronInwardIcon ref={ref} {...props} />;
  }
}));

ChevronInwardIcon.displayName = 'ChevronInwardIcon';

export { ChevronInwardIcon };
