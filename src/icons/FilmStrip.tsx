import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FilmStripRegular } from './FilmStripRegular.js';
import { FilmStripRegularDuotone } from './FilmStripRegularDuotone.js';
import { FilmStripBold } from './FilmStripBold.js';
import { FilmStripBoldDuotone } from './FilmStripBoldDuotone.js';
import { FilmStripFill } from './FilmStripFill.js';
import { FilmStripFillDuotone } from './FilmStripFillDuotone.js';

export interface FilmStripProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FilmStrip - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FilmStripRegular } from 'stera-icons/icons/FilmStripRegular';
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

// Triple export pattern (lucide-react style)
export { FilmStrip, FilmStrip as FilmStripIcon, FilmStrip as SiFilmStrip };
export default FilmStrip;
