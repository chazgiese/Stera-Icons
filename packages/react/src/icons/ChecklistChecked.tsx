import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistCheckedRegular } from './ChecklistCheckedRegular';
import { ChecklistCheckedRegularDuotone } from './ChecklistCheckedRegularDuotone';
import { ChecklistCheckedBold } from './ChecklistCheckedBold';
import { ChecklistCheckedBoldDuotone } from './ChecklistCheckedBoldDuotone';
import { ChecklistCheckedFill } from './ChecklistCheckedFill';
import { ChecklistCheckedFillDuotone } from './ChecklistCheckedFillDuotone';

export interface ChecklistCheckedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChecklistChecked with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChecklistCheckedRegular } from 'stera-icons/ChecklistCheckedRegular';
 */
const ChecklistChecked = memo(forwardRef<SVGSVGElement, ChecklistCheckedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistCheckedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChecklistCheckedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChecklistCheckedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChecklistCheckedFill ref={ref} {...rest} />;
  if (duotone) return <ChecklistCheckedRegularDuotone ref={ref} {...rest} />;
  return <ChecklistCheckedRegular ref={ref} {...rest} />;
}));

ChecklistChecked.displayName = 'ChecklistChecked';

export { ChecklistChecked };
