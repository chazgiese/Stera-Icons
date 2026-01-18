import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilTipRegular } from './PencilTipRegular';
import { PencilTipRegularDuotone } from './PencilTipRegularDuotone';
import { PencilTipBold } from './PencilTipBold';
import { PencilTipBoldDuotone } from './PencilTipBoldDuotone';
import { PencilTipFill } from './PencilTipFill';
import { PencilTipFillDuotone } from './PencilTipFillDuotone';

export interface PencilTipProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PencilTip with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PencilTipRegular } from 'stera-icons/PencilTipRegular';
 */
const PencilTip = memo(forwardRef<SVGSVGElement, PencilTipProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilTipBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PencilTipBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PencilTipFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PencilTipFill ref={ref} {...rest} />;
  if (duotone) return <PencilTipRegularDuotone ref={ref} {...rest} />;
  return <PencilTipRegular ref={ref} {...rest} />;
}));

PencilTip.displayName = 'PencilTip';

export { PencilTip };
