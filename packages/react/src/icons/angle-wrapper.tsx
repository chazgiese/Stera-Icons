import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AngleIcon as RegularAngleIcon } from './angle';
import { AngleIconDuotone as AngleIconDuotone } from './angle-duotone';
import { AngleIconBold as AngleIconBold } from './angle-bold';
import { AngleIconBoldDuotone as AngleIconBoldDuotone } from './angle-bold-duotone';
import { AngleIconFill as AngleIconFill } from './angle-fill';
import { AngleIconFillDuotone as AngleIconFillDuotone } from './angle-fill-duotone';

export interface AngleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AngleIcon = memo(forwardRef<SVGSVGElement, AngleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AngleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AngleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AngleIconFill ref={ref} {...props} />;
  if (duotone) return <AngleIconDuotone ref={ref} {...props} />;
  return <RegularAngleIcon ref={ref} {...props} />;
}));

AngleIcon.displayName = 'AngleIcon';

export { AngleIcon };
