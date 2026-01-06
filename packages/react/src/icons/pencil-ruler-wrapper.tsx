import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilRulerIcon as RegularPencilRulerIcon } from './pencil-ruler';
import { PencilRulerIconDuotone as PencilRulerIconDuotone } from './pencil-ruler-duotone';
import { PencilRulerIconBold as PencilRulerIconBold } from './pencil-ruler-bold';
import { PencilRulerIconBoldDuotone as PencilRulerIconBoldDuotone } from './pencil-ruler-bold-duotone';
import { PencilRulerIconFill as PencilRulerIconFill } from './pencil-ruler-fill';
import { PencilRulerIconFillDuotone as PencilRulerIconFillDuotone } from './pencil-ruler-fill-duotone';

export interface PencilRulerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PencilRulerIcon = memo(forwardRef<SVGSVGElement, PencilRulerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilRulerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PencilRulerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PencilRulerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PencilRulerIconFill ref={ref} {...props} />;
  if (duotone) return <PencilRulerIconDuotone ref={ref} {...props} />;
  return <RegularPencilRulerIcon ref={ref} {...props} />;
}));

PencilRulerIcon.displayName = 'PencilRulerIcon';

export { PencilRulerIcon };
