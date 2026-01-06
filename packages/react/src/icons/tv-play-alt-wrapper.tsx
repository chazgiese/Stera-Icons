import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvPlayAltIcon as RegularTvPlayAltIcon } from './tv-play-alt';
import { TvPlayAltIconDuotone as TvPlayAltIconDuotone } from './tv-play-alt-duotone';
import { TvPlayAltIconBold as TvPlayAltIconBold } from './tv-play-alt-bold';
import { TvPlayAltIconBoldDuotone as TvPlayAltIconBoldDuotone } from './tv-play-alt-bold-duotone';
import { TvPlayAltIconFill as TvPlayAltIconFill } from './tv-play-alt-fill';
import { TvPlayAltIconFillDuotone as TvPlayAltIconFillDuotone } from './tv-play-alt-fill-duotone';

export interface TvPlayAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TvPlayAltIcon = memo(forwardRef<SVGSVGElement, TvPlayAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TvPlayAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TvPlayAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TvPlayAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TvPlayAltIconFill ref={ref} {...props} />;
  if (duotone) return <TvPlayAltIconDuotone ref={ref} {...props} />;
  return <RegularTvPlayAltIcon ref={ref} {...props} />;
}));

TvPlayAltIcon.displayName = 'TvPlayAltIcon';

export { TvPlayAltIcon };
