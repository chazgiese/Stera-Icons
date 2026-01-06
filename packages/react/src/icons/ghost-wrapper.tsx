import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GhostIcon as RegularGhostIcon } from './ghost';
import { GhostIconDuotone as GhostIconDuotone } from './ghost-duotone';
import { GhostIconBold as GhostIconBold } from './ghost-bold';
import { GhostIconBoldDuotone as GhostIconBoldDuotone } from './ghost-bold-duotone';
import { GhostIconFill as GhostIconFill } from './ghost-fill';
import { GhostIconFillDuotone as GhostIconFillDuotone } from './ghost-fill-duotone';

export interface GhostIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GhostIcon = memo(forwardRef<SVGSVGElement, GhostIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GhostIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GhostIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GhostIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GhostIconFill ref={ref} {...props} />;
  if (duotone) return <GhostIconDuotone ref={ref} {...props} />;
  return <RegularGhostIcon ref={ref} {...props} />;
}));

GhostIcon.displayName = 'GhostIcon';

export { GhostIcon };
