import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrashIcon as RegularTrashIcon } from './trash';
import { TrashIconDuotone as TrashIconDuotone } from './trash-duotone';
import { TrashIconBold as TrashIconBold } from './trash-bold';
import { TrashIconBoldDuotone as TrashIconBoldDuotone } from './trash-bold-duotone';
import { TrashIconFill as TrashIconFill } from './trash-fill';
import { TrashIconFillDuotone as TrashIconFillDuotone } from './trash-fill-duotone';

export interface TrashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TrashIcon = memo(forwardRef<SVGSVGElement, TrashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TrashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TrashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TrashIconFill ref={ref} {...props} />;
  if (duotone) return <TrashIconDuotone ref={ref} {...props} />;
  return <RegularTrashIcon ref={ref} {...props} />;
}));

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
