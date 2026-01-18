import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AngleObtuseIcon as RegularAngleObtuseIcon } from './angle-obtuse';
import { AngleObtuseIconDuotone as AngleObtuseIconDuotone } from './angle-obtuse-duotone';
import { AngleObtuseIconBold as AngleObtuseIconBold } from './angle-obtuse-bold';
import { AngleObtuseIconBoldDuotone as AngleObtuseIconBoldDuotone } from './angle-obtuse-bold-duotone';
import { AngleObtuseIconFill as AngleObtuseIconFill } from './angle-obtuse-fill';
import { AngleObtuseIconFillDuotone as AngleObtuseIconFillDuotone } from './angle-obtuse-fill-duotone';

export interface AngleObtuseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AngleObtuseIcon = memo(forwardRef<SVGSVGElement, AngleObtuseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleObtuseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AngleObtuseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AngleObtuseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AngleObtuseIconFill ref={ref} {...props} />;
  if (duotone) return <AngleObtuseIconDuotone ref={ref} {...props} />;
  return <RegularAngleObtuseIcon ref={ref} {...props} />;
}));

AngleObtuseIcon.displayName = 'AngleObtuseIcon';

export { AngleObtuseIcon };
