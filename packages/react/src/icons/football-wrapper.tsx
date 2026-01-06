import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FootballIcon as RegularFootballIcon } from './football';
import { FootballIconDuotone as FootballIconDuotone } from './football-duotone';
import { FootballIconBold as FootballIconBold } from './football-bold';
import { FootballIconBoldDuotone as FootballIconBoldDuotone } from './football-bold-duotone';
import { FootballIconFill as FootballIconFill } from './football-fill';
import { FootballIconFillDuotone as FootballIconFillDuotone } from './football-fill-duotone';

export interface FootballIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FootballIcon = memo(forwardRef<SVGSVGElement, FootballIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FootballIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FootballIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FootballIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FootballIconFill ref={ref} {...props} />;
  if (duotone) return <FootballIconDuotone ref={ref} {...props} />;
  return <RegularFootballIcon ref={ref} {...props} />;
}));

FootballIcon.displayName = 'FootballIcon';

export { FootballIcon };
