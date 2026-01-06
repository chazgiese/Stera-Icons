import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LightbulbOnIcon as RegularLightbulbOnIcon } from './lightbulb-on';
import { LightbulbOnIconDuotone as LightbulbOnIconDuotone } from './lightbulb-on-duotone';
import { LightbulbOnIconBold as LightbulbOnIconBold } from './lightbulb-on-bold';
import { LightbulbOnIconBoldDuotone as LightbulbOnIconBoldDuotone } from './lightbulb-on-bold-duotone';
import { LightbulbOnIconFill as LightbulbOnIconFill } from './lightbulb-on-fill';
import { LightbulbOnIconFillDuotone as LightbulbOnIconFillDuotone } from './lightbulb-on-fill-duotone';

export interface LightbulbOnIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LightbulbOnIcon = memo(forwardRef<SVGSVGElement, LightbulbOnIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LightbulbOnIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LightbulbOnIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LightbulbOnIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LightbulbOnIconFill ref={ref} {...props} />;
  if (duotone) return <LightbulbOnIconDuotone ref={ref} {...props} />;
  return <RegularLightbulbOnIcon ref={ref} {...props} />;
}));

LightbulbOnIcon.displayName = 'LightbulbOnIcon';

export { LightbulbOnIcon };
