import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilIcon as RegularPencilIcon } from './pencil';
import { PencilIconDuotone as PencilIconDuotone } from './pencil-duotone';
import { PencilIconBold as PencilIconBold } from './pencil-bold';
import { PencilIconBoldDuotone as PencilIconBoldDuotone } from './pencil-bold-duotone';
import { PencilIconFill as PencilIconFill } from './pencil-fill';
import { PencilIconFillDuotone as PencilIconFillDuotone } from './pencil-fill-duotone';

export interface PencilIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PencilIcon = memo(forwardRef<SVGSVGElement, PencilIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PencilIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PencilIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PencilIconFill ref={ref} {...props} />;
  if (duotone) return <PencilIconDuotone ref={ref} {...props} />;
  return <RegularPencilIcon ref={ref} {...props} />;
}));

PencilIcon.displayName = 'PencilIcon';

export { PencilIcon };
