import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RulersIcon as RegularRulersIcon } from './rulers';
import { RulersIconDuotone as RulersIconDuotone } from './rulers-duotone';
import { RulersIconBold as RulersIconBold } from './rulers-bold';
import { RulersIconBoldDuotone as RulersIconBoldDuotone } from './rulers-bold-duotone';
import { RulersIconFill as RulersIconFill } from './rulers-fill';
import { RulersIconFillDuotone as RulersIconFillDuotone } from './rulers-fill-duotone';

export interface RulersIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RulersIcon = memo(forwardRef<SVGSVGElement, RulersIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RulersIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RulersIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RulersIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RulersIconFill ref={ref} {...props} />;
  if (duotone) return <RulersIconDuotone ref={ref} {...props} />;
  return <RegularRulersIcon ref={ref} {...props} />;
}));

RulersIcon.displayName = 'RulersIcon';

export { RulersIcon };
