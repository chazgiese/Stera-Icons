import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FortressIcon as RegularFortressIcon } from './fortress';
import { FortressIconDuotone as FortressIconDuotone } from './fortress-duotone';
import { FortressIconBold as FortressIconBold } from './fortress-bold';
import { FortressIconBoldDuotone as FortressIconBoldDuotone } from './fortress-bold-duotone';
import { FortressIconFill as FortressIconFill } from './fortress-fill';
import { FortressIconFillDuotone as FortressIconFillDuotone } from './fortress-fill-duotone';

export interface FortressIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FortressIcon = memo(forwardRef<SVGSVGElement, FortressIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FortressIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FortressIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FortressIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FortressIconFill ref={ref} {...props} />;
  if (duotone) return <FortressIconDuotone ref={ref} {...props} />;
  return <RegularFortressIcon ref={ref} {...props} />;
}));

FortressIcon.displayName = 'FortressIcon';

export { FortressIcon };
