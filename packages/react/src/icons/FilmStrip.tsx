import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FilmStripRegular } from './FilmStripRegular';
import { FilmStripRegularDuotone } from './FilmStripRegularDuotone';
import { FilmStripBold } from './FilmStripBold';
import { FilmStripBoldDuotone } from './FilmStripBoldDuotone';
import { FilmStripFill } from './FilmStripFill';
import { FilmStripFillDuotone } from './FilmStripFillDuotone';

export interface FilmStripProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FilmStrip with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FilmStripRegular } from 'stera-icons/FilmStripRegular';
 */
const FilmStrip = memo(forwardRef<SVGSVGElement, FilmStripProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FilmStripBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FilmStripBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FilmStripFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FilmStripFill ref={ref} {...rest} />;
  if (duotone) return <FilmStripRegularDuotone ref={ref} {...rest} />;
  return <FilmStripRegular ref={ref} {...rest} />;
}));

FilmStrip.displayName = 'FilmStrip';

export { FilmStrip };
