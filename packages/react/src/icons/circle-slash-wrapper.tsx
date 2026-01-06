import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleSlashIcon as RegularCircleSlashIcon } from './circle-slash';
import { CircleSlashIconDuotone as CircleSlashIconDuotone } from './circle-slash-duotone';
import { CircleSlashIconBold as CircleSlashIconBold } from './circle-slash-bold';
import { CircleSlashIconBoldDuotone as CircleSlashIconBoldDuotone } from './circle-slash-bold-duotone';
import { CircleSlashIconFill as CircleSlashIconFill } from './circle-slash-fill';
import { CircleSlashIconFillDuotone as CircleSlashIconFillDuotone } from './circle-slash-fill-duotone';

export interface CircleSlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleSlashIcon = memo(forwardRef<SVGSVGElement, CircleSlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleSlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleSlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleSlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleSlashIconFill ref={ref} {...props} />;
  if (duotone) return <CircleSlashIconDuotone ref={ref} {...props} />;
  return <RegularCircleSlashIcon ref={ref} {...props} />;
}));

CircleSlashIcon.displayName = 'CircleSlashIcon';

export { CircleSlashIcon };
