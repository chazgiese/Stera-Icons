import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AngleAcuteIcon as RegularAngleAcuteIcon } from './angle-acute';
import { AngleAcuteIconDuotone as AngleAcuteIconDuotone } from './angle-acute-duotone';
import { AngleAcuteIconBold as AngleAcuteIconBold } from './angle-acute-bold';
import { AngleAcuteIconBoldDuotone as AngleAcuteIconBoldDuotone } from './angle-acute-bold-duotone';
import { AngleAcuteIconFill as AngleAcuteIconFill } from './angle-acute-fill';
import { AngleAcuteIconFillDuotone as AngleAcuteIconFillDuotone } from './angle-acute-fill-duotone';

export interface AngleAcuteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AngleAcuteIcon = memo(forwardRef<SVGSVGElement, AngleAcuteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleAcuteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AngleAcuteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AngleAcuteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AngleAcuteIconFill ref={ref} {...props} />;
  if (duotone) return <AngleAcuteIconDuotone ref={ref} {...props} />;
  return <RegularAngleAcuteIcon ref={ref} {...props} />;
}));

AngleAcuteIcon.displayName = 'AngleAcuteIcon';

export { AngleAcuteIcon };
