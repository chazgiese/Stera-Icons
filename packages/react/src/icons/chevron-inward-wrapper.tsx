import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronInwardIcon as ChevronInwardIconRegular } from './chevron-inward';
import { ChevronInwardIconBold } from './chevron-inward-bold';
import { ChevronInwardIconFilled } from './chevron-inward-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChevronInwardIconRegular ref={ref} {...props} />;
  }
}));

ChevronInwardIcon.displayName = 'ChevronInwardIcon';

export { ChevronInwardIcon };
