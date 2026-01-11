import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ForkKnifeIcon as RegularForkKnifeIcon } from './fork-knife';
import { ForkKnifeIconDuotone as ForkKnifeIconDuotone } from './fork-knife-duotone';
import { ForkKnifeIconBold as ForkKnifeIconBold } from './fork-knife-bold';
import { ForkKnifeIconBoldDuotone as ForkKnifeIconBoldDuotone } from './fork-knife-bold-duotone';
import { ForkKnifeIconFill as ForkKnifeIconFill } from './fork-knife-fill';
import { ForkKnifeIconFillDuotone as ForkKnifeIconFillDuotone } from './fork-knife-fill-duotone';

export interface ForkKnifeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ForkKnifeIcon = memo(forwardRef<SVGSVGElement, ForkKnifeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForkKnifeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ForkKnifeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ForkKnifeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ForkKnifeIconFill ref={ref} {...props} />;
  if (duotone) return <ForkKnifeIconDuotone ref={ref} {...props} />;
  return <RegularForkKnifeIcon ref={ref} {...props} />;
}));

ForkKnifeIcon.displayName = 'ForkKnifeIcon';

export { ForkKnifeIcon };
