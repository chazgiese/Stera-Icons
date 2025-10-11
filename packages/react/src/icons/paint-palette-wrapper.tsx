import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaintPaletteIcon as PaintPaletteIconRegular } from './paint-palette';
import { PaintPaletteIconBold } from './paint-palette-bold';
import { PaintPaletteIconFilled } from './paint-palette-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PaintPaletteIconRegular ref={ref} {...props} />;
  }
}));

PaintPaletteIcon.displayName = 'PaintPaletteIcon';

export { PaintPaletteIcon };
