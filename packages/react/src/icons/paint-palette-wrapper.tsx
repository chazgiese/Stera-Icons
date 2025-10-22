import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PaintPaletteIcon as RegularPaintPaletteIcon } from './paint-palette';
import { PaintPaletteIconBold } from './paint-palette-bold';
import { PaintPaletteIconFilled } from './paint-palette-filled';
import { PaintPaletteIconFilltone } from './paint-palette-filltone';
import { PaintPaletteIconLinetone } from './paint-palette-linetone';

export interface PaintPaletteIconProps extends IconProps {
  variant?: IconVariant;
}

const PaintPaletteIcon = memo(forwardRef<SVGSVGElement, PaintPaletteIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PaintPaletteIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PaintPaletteIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PaintPaletteIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PaintPaletteIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPaintPaletteIcon ref={ref} {...props} />;
  }
}));

PaintPaletteIcon.displayName = 'PaintPaletteIcon';

export { PaintPaletteIcon };
