import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilLineIcon as RegularPencilLineIcon } from './pencil-line';
import { PencilLineIconDuotone as PencilLineIconDuotone } from './pencil-line-duotone';
import { PencilLineIconBold as PencilLineIconBold } from './pencil-line-bold';
import { PencilLineIconBoldDuotone as PencilLineIconBoldDuotone } from './pencil-line-bold-duotone';
import { PencilLineIconFill as PencilLineIconFill } from './pencil-line-fill';
import { PencilLineIconFillDuotone as PencilLineIconFillDuotone } from './pencil-line-fill-duotone';

export interface PencilLineIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PencilLineIcon = memo(forwardRef<SVGSVGElement, PencilLineIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilLineIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PencilLineIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PencilLineIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PencilLineIconFill ref={ref} {...props} />;
  if (duotone) return <PencilLineIconDuotone ref={ref} {...props} />;
  return <RegularPencilLineIcon ref={ref} {...props} />;
}));

PencilLineIcon.displayName = 'PencilLineIcon';

export { PencilLineIcon };
