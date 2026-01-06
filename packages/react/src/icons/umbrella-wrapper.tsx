import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UmbrellaIcon as RegularUmbrellaIcon } from './umbrella';
import { UmbrellaIconDuotone as UmbrellaIconDuotone } from './umbrella-duotone';
import { UmbrellaIconBold as UmbrellaIconBold } from './umbrella-bold';
import { UmbrellaIconBoldDuotone as UmbrellaIconBoldDuotone } from './umbrella-bold-duotone';
import { UmbrellaIconFill as UmbrellaIconFill } from './umbrella-fill';
import { UmbrellaIconFillDuotone as UmbrellaIconFillDuotone } from './umbrella-fill-duotone';

export interface UmbrellaIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UmbrellaIcon = memo(forwardRef<SVGSVGElement, UmbrellaIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UmbrellaIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UmbrellaIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UmbrellaIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UmbrellaIconFill ref={ref} {...props} />;
  if (duotone) return <UmbrellaIconDuotone ref={ref} {...props} />;
  return <RegularUmbrellaIcon ref={ref} {...props} />;
}));

UmbrellaIcon.displayName = 'UmbrellaIcon';

export { UmbrellaIcon };
