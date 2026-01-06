import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchiveIcon as RegularArchiveIcon } from './archive';
import { ArchiveIconDuotone as ArchiveIconDuotone } from './archive-duotone';
import { ArchiveIconBold as ArchiveIconBold } from './archive-bold';
import { ArchiveIconBoldDuotone as ArchiveIconBoldDuotone } from './archive-bold-duotone';
import { ArchiveIconFill as ArchiveIconFill } from './archive-fill';
import { ArchiveIconFillDuotone as ArchiveIconFillDuotone } from './archive-fill-duotone';

export interface ArchiveIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArchiveIcon = memo(forwardRef<SVGSVGElement, ArchiveIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArchiveIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArchiveIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArchiveIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArchiveIconFill ref={ref} {...props} />;
  if (duotone) return <ArchiveIconDuotone ref={ref} {...props} />;
  return <RegularArchiveIcon ref={ref} {...props} />;
}));

ArchiveIcon.displayName = 'ArchiveIcon';

export { ArchiveIcon };
