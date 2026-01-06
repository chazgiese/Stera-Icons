import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlienIcon as RegularAlienIcon } from './alien';
import { AlienIconDuotone as AlienIconDuotone } from './alien-duotone';
import { AlienIconBold as AlienIconBold } from './alien-bold';
import { AlienIconBoldDuotone as AlienIconBoldDuotone } from './alien-bold-duotone';
import { AlienIconFill as AlienIconFill } from './alien-fill';
import { AlienIconFillDuotone as AlienIconFillDuotone } from './alien-fill-duotone';

export interface AlienIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlienIcon = memo(forwardRef<SVGSVGElement, AlienIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlienIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlienIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlienIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlienIconFill ref={ref} {...props} />;
  if (duotone) return <AlienIconDuotone ref={ref} {...props} />;
  return <RegularAlienIcon ref={ref} {...props} />;
}));

AlienIcon.displayName = 'AlienIcon';

export { AlienIcon };
