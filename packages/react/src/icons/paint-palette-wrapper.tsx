import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaintPaletteIcon as RegularPaintPaletteIcon } from './paint-palette';
import { PaintPaletteIconDuotone as PaintPaletteIconDuotone } from './paint-palette-duotone';
import { PaintPaletteIconBold as PaintPaletteIconBold } from './paint-palette-bold';
import { PaintPaletteIconBoldDuotone as PaintPaletteIconBoldDuotone } from './paint-palette-bold-duotone';
import { PaintPaletteIconFill as PaintPaletteIconFill } from './paint-palette-fill';
import { PaintPaletteIconFillDuotone as PaintPaletteIconFillDuotone } from './paint-palette-fill-duotone';

export interface PaintPaletteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PaintPaletteIcon = memo(forwardRef<SVGSVGElement, PaintPaletteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PaintPaletteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PaintPaletteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PaintPaletteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PaintPaletteIconFill ref={ref} {...props} />;
  if (duotone) return <PaintPaletteIconDuotone ref={ref} {...props} />;
  return <RegularPaintPaletteIcon ref={ref} {...props} />;
}));

PaintPaletteIcon.displayName = 'PaintPaletteIcon';

export { PaintPaletteIcon };
