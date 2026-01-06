import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HeadphonesIcon as RegularHeadphonesIcon } from './headphones';
import { HeadphonesIconDuotone as HeadphonesIconDuotone } from './headphones-duotone';
import { HeadphonesIconBold as HeadphonesIconBold } from './headphones-bold';
import { HeadphonesIconBoldDuotone as HeadphonesIconBoldDuotone } from './headphones-bold-duotone';
import { HeadphonesIconFill as HeadphonesIconFill } from './headphones-fill';
import { HeadphonesIconFillDuotone as HeadphonesIconFillDuotone } from './headphones-fill-duotone';

export interface HeadphonesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HeadphonesIcon = memo(forwardRef<SVGSVGElement, HeadphonesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HeadphonesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HeadphonesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HeadphonesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HeadphonesIconFill ref={ref} {...props} />;
  if (duotone) return <HeadphonesIconDuotone ref={ref} {...props} />;
  return <RegularHeadphonesIcon ref={ref} {...props} />;
}));

HeadphonesIcon.displayName = 'HeadphonesIcon';

export { HeadphonesIcon };
