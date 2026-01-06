import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LightbulbIcon as RegularLightbulbIcon } from './lightbulb';
import { LightbulbIconDuotone as LightbulbIconDuotone } from './lightbulb-duotone';
import { LightbulbIconBold as LightbulbIconBold } from './lightbulb-bold';
import { LightbulbIconBoldDuotone as LightbulbIconBoldDuotone } from './lightbulb-bold-duotone';
import { LightbulbIconFill as LightbulbIconFill } from './lightbulb-fill';
import { LightbulbIconFillDuotone as LightbulbIconFillDuotone } from './lightbulb-fill-duotone';

export interface LightbulbIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LightbulbIcon = memo(forwardRef<SVGSVGElement, LightbulbIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LightbulbIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LightbulbIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LightbulbIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LightbulbIconFill ref={ref} {...props} />;
  if (duotone) return <LightbulbIconDuotone ref={ref} {...props} />;
  return <RegularLightbulbIcon ref={ref} {...props} />;
}));

LightbulbIcon.displayName = 'LightbulbIcon';

export { LightbulbIcon };
