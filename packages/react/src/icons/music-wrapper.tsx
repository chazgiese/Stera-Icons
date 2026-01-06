import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MusicIcon as RegularMusicIcon } from './music';
import { MusicIconDuotone as MusicIconDuotone } from './music-duotone';
import { MusicIconBold as MusicIconBold } from './music-bold';
import { MusicIconBoldDuotone as MusicIconBoldDuotone } from './music-bold-duotone';
import { MusicIconFill as MusicIconFill } from './music-fill';
import { MusicIconFillDuotone as MusicIconFillDuotone } from './music-fill-duotone';

export interface MusicIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MusicIcon = memo(forwardRef<SVGSVGElement, MusicIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MusicIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MusicIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MusicIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MusicIconFill ref={ref} {...props} />;
  if (duotone) return <MusicIconDuotone ref={ref} {...props} />;
  return <RegularMusicIcon ref={ref} {...props} />;
}));

MusicIcon.displayName = 'MusicIcon';

export { MusicIcon };
