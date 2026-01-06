import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvIcon as RegularTvIcon } from './tv';
import { TvIconDuotone as TvIconDuotone } from './tv-duotone';
import { TvIconBold as TvIconBold } from './tv-bold';
import { TvIconBoldDuotone as TvIconBoldDuotone } from './tv-bold-duotone';
import { TvIconFill as TvIconFill } from './tv-fill';
import { TvIconFillDuotone as TvIconFillDuotone } from './tv-fill-duotone';

export interface TvIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TvIcon = memo(forwardRef<SVGSVGElement, TvIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TvIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TvIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TvIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TvIconFill ref={ref} {...props} />;
  if (duotone) return <TvIconDuotone ref={ref} {...props} />;
  return <RegularTvIcon ref={ref} {...props} />;
}));

TvIcon.displayName = 'TvIcon';

export { TvIcon };
