import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GridRegular } from './GridRegular';
import { GridRegularDuotone } from './GridRegularDuotone';
import { GridBold } from './GridBold';
import { GridBoldDuotone } from './GridBoldDuotone';
import { GridFill } from './GridFill';
import { GridFillDuotone } from './GridFillDuotone';

export interface GridProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Grid with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GridRegular } from 'stera-icons/GridRegular';
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

export { Grid };
