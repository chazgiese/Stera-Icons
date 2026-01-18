import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronDownRegular } from './ChevronDownRegular';
import { ChevronDownRegularDuotone } from './ChevronDownRegularDuotone';
import { ChevronDownBold } from './ChevronDownBold';
import { ChevronDownBoldDuotone } from './ChevronDownBoldDuotone';
import { ChevronDownFill } from './ChevronDownFill';
import { ChevronDownFillDuotone } from './ChevronDownFillDuotone';

export interface ChevronDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronDownRegular } from 'stera-icons/ChevronDownRegular';
 */
const ChevronDown = memo(forwardRef<SVGSVGElement, ChevronDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronDownRegular ref={ref} {...rest} />;
}));

ChevronDown.displayName = 'ChevronDown';

export { ChevronDown };
