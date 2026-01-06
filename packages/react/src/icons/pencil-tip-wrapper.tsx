import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilTipIcon as RegularPencilTipIcon } from './pencil-tip';
import { PencilTipIconDuotone as PencilTipIconDuotone } from './pencil-tip-duotone';
import { PencilTipIconBold as PencilTipIconBold } from './pencil-tip-bold';
import { PencilTipIconBoldDuotone as PencilTipIconBoldDuotone } from './pencil-tip-bold-duotone';
import { PencilTipIconFill as PencilTipIconFill } from './pencil-tip-fill';
import { PencilTipIconFillDuotone as PencilTipIconFillDuotone } from './pencil-tip-fill-duotone';

export interface PencilTipIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PencilTipIcon = memo(forwardRef<SVGSVGElement, PencilTipIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilTipIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PencilTipIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PencilTipIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PencilTipIconFill ref={ref} {...props} />;
  if (duotone) return <PencilTipIconDuotone ref={ref} {...props} />;
  return <RegularPencilTipIcon ref={ref} {...props} />;
}));

PencilTipIcon.displayName = 'PencilTipIcon';

export { PencilTipIcon };
