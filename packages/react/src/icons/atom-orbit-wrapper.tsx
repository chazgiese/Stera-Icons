import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomOrbitIcon as RegularAtomOrbitIcon } from './atom-orbit';
import { AtomOrbitIconDuotone as AtomOrbitIconDuotone } from './atom-orbit-duotone';
import { AtomOrbitIconBold as AtomOrbitIconBold } from './atom-orbit-bold';
import { AtomOrbitIconBoldDuotone as AtomOrbitIconBoldDuotone } from './atom-orbit-bold-duotone';
import { AtomOrbitIconFill as AtomOrbitIconFill } from './atom-orbit-fill';
import { AtomOrbitIconFillDuotone as AtomOrbitIconFillDuotone } from './atom-orbit-fill-duotone';

export interface AtomOrbitIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AtomOrbitIcon = memo(forwardRef<SVGSVGElement, AtomOrbitIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomOrbitIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AtomOrbitIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AtomOrbitIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AtomOrbitIconFill ref={ref} {...props} />;
  if (duotone) return <AtomOrbitIconDuotone ref={ref} {...props} />;
  return <RegularAtomOrbitIcon ref={ref} {...props} />;
}));

AtomOrbitIcon.displayName = 'AtomOrbitIcon';

export { AtomOrbitIcon };
