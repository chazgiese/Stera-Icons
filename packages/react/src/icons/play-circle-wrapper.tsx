import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayCircleIcon as RegularPlayCircleIcon } from './play-circle';
import { PlayCircleIconDuotone as PlayCircleIconDuotone } from './play-circle-duotone';
import { PlayCircleIconBold as PlayCircleIconBold } from './play-circle-bold';
import { PlayCircleIconBoldDuotone as PlayCircleIconBoldDuotone } from './play-circle-bold-duotone';
import { PlayCircleIconFill as PlayCircleIconFill } from './play-circle-fill';
import { PlayCircleIconFillDuotone as PlayCircleIconFillDuotone } from './play-circle-fill-duotone';

export interface PlayCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlayCircleIcon = memo(forwardRef<SVGSVGElement, PlayCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlayCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlayCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlayCircleIconFill ref={ref} {...props} />;
  if (duotone) return <PlayCircleIconDuotone ref={ref} {...props} />;
  return <RegularPlayCircleIcon ref={ref} {...props} />;
}));

PlayCircleIcon.displayName = 'PlayCircleIcon';

export { PlayCircleIcon };
