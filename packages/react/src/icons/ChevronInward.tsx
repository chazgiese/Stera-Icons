import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronInwardRegular } from './ChevronInwardRegular';
import { ChevronInwardRegularDuotone } from './ChevronInwardRegularDuotone';
import { ChevronInwardBold } from './ChevronInwardBold';
import { ChevronInwardBoldDuotone } from './ChevronInwardBoldDuotone';
import { ChevronInwardFill } from './ChevronInwardFill';
import { ChevronInwardFillDuotone } from './ChevronInwardFillDuotone';

export interface ChevronInwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronInward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronInwardRegular } from 'stera-icons/ChevronInwardRegular';
 */
const ChevronInward = memo(forwardRef<SVGSVGElement, ChevronInwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronInwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronInwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronInwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronInwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronInwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronInwardRegular ref={ref} {...rest} />;
}));

ChevronInward.displayName = 'ChevronInward';

export { ChevronInward };
