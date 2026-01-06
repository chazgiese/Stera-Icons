import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayRectangleIcon as RegularPlayRectangleIcon } from './play-rectangle';
import { PlayRectangleIconDuotone as PlayRectangleIconDuotone } from './play-rectangle-duotone';
import { PlayRectangleIconBold as PlayRectangleIconBold } from './play-rectangle-bold';
import { PlayRectangleIconBoldDuotone as PlayRectangleIconBoldDuotone } from './play-rectangle-bold-duotone';
import { PlayRectangleIconFill as PlayRectangleIconFill } from './play-rectangle-fill';
import { PlayRectangleIconFillDuotone as PlayRectangleIconFillDuotone } from './play-rectangle-fill-duotone';

export interface PlayRectangleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlayRectangleIcon = memo(forwardRef<SVGSVGElement, PlayRectangleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayRectangleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlayRectangleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlayRectangleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlayRectangleIconFill ref={ref} {...props} />;
  if (duotone) return <PlayRectangleIconDuotone ref={ref} {...props} />;
  return <RegularPlayRectangleIcon ref={ref} {...props} />;
}));

PlayRectangleIcon.displayName = 'PlayRectangleIcon';

export { PlayRectangleIcon };
