import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaintPaletteRegular } from './PaintPaletteRegular';
import { PaintPaletteRegularDuotone } from './PaintPaletteRegularDuotone';
import { PaintPaletteBold } from './PaintPaletteBold';
import { PaintPaletteBoldDuotone } from './PaintPaletteBoldDuotone';
import { PaintPaletteFill } from './PaintPaletteFill';
import { PaintPaletteFillDuotone } from './PaintPaletteFillDuotone';

export interface PaintPaletteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PaintPalette with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PaintPaletteRegular } from 'stera-icons/PaintPaletteRegular';
 */
const PaintPalette = memo(forwardRef<SVGSVGElement, PaintPaletteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PaintPaletteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PaintPaletteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PaintPaletteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PaintPaletteFill ref={ref} {...rest} />;
  if (duotone) return <PaintPaletteRegularDuotone ref={ref} {...rest} />;
  return <PaintPaletteRegular ref={ref} {...rest} />;
}));

PaintPalette.displayName = 'PaintPalette';

export { PaintPalette };
