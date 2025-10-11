import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchiveIcon as ArchiveIconRegular } from './archive';
import { ArchiveIconBold } from './archive-bold';
import { ArchiveIconFilled } from './archive-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArchiveIconProps extends IconProps {
  variant?: IconVariant;
}

const ArchiveIcon = memo(forwardRef<SVGSVGElement, ArchiveIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArchiveIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArchiveIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArchiveIconRegular ref={ref} {...props} />;
  }
}));

ArchiveIcon.displayName = 'ArchiveIcon';

export { ArchiveIcon };
