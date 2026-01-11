import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FilmStripIcon as RegularFilmStripIcon } from './film-strip';
import { FilmStripIconDuotone as FilmStripIconDuotone } from './film-strip-duotone';
import { FilmStripIconBold as FilmStripIconBold } from './film-strip-bold';
import { FilmStripIconBoldDuotone as FilmStripIconBoldDuotone } from './film-strip-bold-duotone';
import { FilmStripIconFill as FilmStripIconFill } from './film-strip-fill';
import { FilmStripIconFillDuotone as FilmStripIconFillDuotone } from './film-strip-fill-duotone';

export interface FilmStripIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FilmStripIcon = memo(forwardRef<SVGSVGElement, FilmStripIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FilmStripIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FilmStripIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FilmStripIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FilmStripIconFill ref={ref} {...props} />;
  if (duotone) return <FilmStripIconDuotone ref={ref} {...props} />;
  return <RegularFilmStripIcon ref={ref} {...props} />;
}));

FilmStripIcon.displayName = 'FilmStripIcon';

export { FilmStripIcon };
