import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SwatchBookIcon as RegularSwatchBookIcon } from './swatch-book';
import { SwatchBookIconDuotone as SwatchBookIconDuotone } from './swatch-book-duotone';
import { SwatchBookIconBold as SwatchBookIconBold } from './swatch-book-bold';
import { SwatchBookIconBoldDuotone as SwatchBookIconBoldDuotone } from './swatch-book-bold-duotone';
import { SwatchBookIconFill as SwatchBookIconFill } from './swatch-book-fill';
import { SwatchBookIconFillDuotone as SwatchBookIconFillDuotone } from './swatch-book-fill-duotone';

export interface SwatchBookIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SwatchBookIcon = memo(forwardRef<SVGSVGElement, SwatchBookIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SwatchBookIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SwatchBookIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SwatchBookIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SwatchBookIconFill ref={ref} {...props} />;
  if (duotone) return <SwatchBookIconDuotone ref={ref} {...props} />;
  return <RegularSwatchBookIcon ref={ref} {...props} />;
}));

SwatchBookIcon.displayName = 'SwatchBookIcon';

export { SwatchBookIcon };
