import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HeartIcon as RegularHeartIcon } from './heart';
import { HeartIconDuotone as HeartIconDuotone } from './heart-duotone';
import { HeartIconBold as HeartIconBold } from './heart-bold';
import { HeartIconBoldDuotone as HeartIconBoldDuotone } from './heart-bold-duotone';
import { HeartIconFill as HeartIconFill } from './heart-fill';
import { HeartIconFillDuotone as HeartIconFillDuotone } from './heart-fill-duotone';

export interface HeartIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HeartIcon = memo(forwardRef<SVGSVGElement, HeartIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HeartIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HeartIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HeartIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HeartIconFill ref={ref} {...props} />;
  if (duotone) return <HeartIconDuotone ref={ref} {...props} />;
  return <RegularHeartIcon ref={ref} {...props} />;
}));

HeartIcon.displayName = 'HeartIcon';

export { HeartIcon };
