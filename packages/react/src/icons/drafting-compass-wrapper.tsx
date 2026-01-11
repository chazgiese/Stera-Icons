import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DraftingCompassIcon as RegularDraftingCompassIcon } from './drafting-compass';
import { DraftingCompassIconDuotone as DraftingCompassIconDuotone } from './drafting-compass-duotone';
import { DraftingCompassIconBold as DraftingCompassIconBold } from './drafting-compass-bold';
import { DraftingCompassIconBoldDuotone as DraftingCompassIconBoldDuotone } from './drafting-compass-bold-duotone';
import { DraftingCompassIconFill as DraftingCompassIconFill } from './drafting-compass-fill';
import { DraftingCompassIconFillDuotone as DraftingCompassIconFillDuotone } from './drafting-compass-fill-duotone';

export interface DraftingCompassIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DraftingCompassIcon = memo(forwardRef<SVGSVGElement, DraftingCompassIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DraftingCompassIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DraftingCompassIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DraftingCompassIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DraftingCompassIconFill ref={ref} {...props} />;
  if (duotone) return <DraftingCompassIconDuotone ref={ref} {...props} />;
  return <RegularDraftingCompassIcon ref={ref} {...props} />;
}));

DraftingCompassIcon.displayName = 'DraftingCompassIcon';

export { DraftingCompassIcon };
