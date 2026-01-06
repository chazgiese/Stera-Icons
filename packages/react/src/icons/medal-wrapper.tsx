import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalIcon as RegularMedalIcon } from './medal';
import { MedalIconDuotone as MedalIconDuotone } from './medal-duotone';
import { MedalIconBold as MedalIconBold } from './medal-bold';
import { MedalIconBoldDuotone as MedalIconBoldDuotone } from './medal-bold-duotone';
import { MedalIconFill as MedalIconFill } from './medal-fill';
import { MedalIconFillDuotone as MedalIconFillDuotone } from './medal-fill-duotone';

export interface MedalIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MedalIcon = memo(forwardRef<SVGSVGElement, MedalIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedalIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MedalIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MedalIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MedalIconFill ref={ref} {...props} />;
  if (duotone) return <MedalIconDuotone ref={ref} {...props} />;
  return <RegularMedalIcon ref={ref} {...props} />;
}));

MedalIcon.displayName = 'MedalIcon';

export { MedalIcon };
