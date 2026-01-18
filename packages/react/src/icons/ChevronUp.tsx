import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronUpRegular } from './ChevronUpRegular';
import { ChevronUpRegularDuotone } from './ChevronUpRegularDuotone';
import { ChevronUpBold } from './ChevronUpBold';
import { ChevronUpBoldDuotone } from './ChevronUpBoldDuotone';
import { ChevronUpFill } from './ChevronUpFill';
import { ChevronUpFillDuotone } from './ChevronUpFillDuotone';

export interface ChevronUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronUpRegular } from 'stera-icons/ChevronUpRegular';
 */
const ChevronUp = memo(forwardRef<SVGSVGElement, ChevronUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronUpRegular ref={ref} {...rest} />;
}));

ChevronUp.displayName = 'ChevronUp';

export { ChevronUp };
