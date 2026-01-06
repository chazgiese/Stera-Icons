import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayIcon as RegularPlayIcon } from './play';
import { PlayIconDuotone as PlayIconDuotone } from './play-duotone';
import { PlayIconBold as PlayIconBold } from './play-bold';
import { PlayIconBoldDuotone as PlayIconBoldDuotone } from './play-bold-duotone';
import { PlayIconFill as PlayIconFill } from './play-fill';
import { PlayIconFillDuotone as PlayIconFillDuotone } from './play-fill-duotone';

export interface PlayIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlayIcon = memo(forwardRef<SVGSVGElement, PlayIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlayIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlayIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlayIconFill ref={ref} {...props} />;
  if (duotone) return <PlayIconDuotone ref={ref} {...props} />;
  return <RegularPlayIcon ref={ref} {...props} />;
}));

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
