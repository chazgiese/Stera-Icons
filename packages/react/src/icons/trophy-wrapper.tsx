import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrophyIcon as RegularTrophyIcon } from './trophy';
import { TrophyIconDuotone as TrophyIconDuotone } from './trophy-duotone';
import { TrophyIconBold as TrophyIconBold } from './trophy-bold';
import { TrophyIconBoldDuotone as TrophyIconBoldDuotone } from './trophy-bold-duotone';
import { TrophyIconFill as TrophyIconFill } from './trophy-fill';
import { TrophyIconFillDuotone as TrophyIconFillDuotone } from './trophy-fill-duotone';

export interface TrophyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TrophyIcon = memo(forwardRef<SVGSVGElement, TrophyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrophyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TrophyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TrophyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TrophyIconFill ref={ref} {...props} />;
  if (duotone) return <TrophyIconDuotone ref={ref} {...props} />;
  return <RegularTrophyIcon ref={ref} {...props} />;
}));

TrophyIcon.displayName = 'TrophyIcon';

export { TrophyIcon };
