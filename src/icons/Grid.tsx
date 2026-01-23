import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GridRegular } from './GridRegular.js';
import { GridRegularDuotone } from './GridRegularDuotone.js';
import { GridBold } from './GridBold.js';
import { GridBoldDuotone } from './GridBoldDuotone.js';
import { GridFill } from './GridFill.js';
import { GridFillDuotone } from './GridFillDuotone.js';

export interface GridProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Grid - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GridRegular } from 'stera-icons/icons/GridRegular';
 */
const Grid = memo(forwardRef<SVGSVGElement, GridProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GridBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GridBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GridFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GridFill ref={ref} {...rest} />;
  if (duotone) return <GridRegularDuotone ref={ref} {...rest} />;
  return <GridRegular ref={ref} {...rest} />;
}));

Grid.displayName = 'Grid';

// Triple export pattern (lucide-react style)
export { Grid, Grid as GridIcon, Grid as SiGrid };
export default Grid;
