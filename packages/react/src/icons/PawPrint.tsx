import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PawPrintRegular } from './PawPrintRegular';
import { PawPrintRegularDuotone } from './PawPrintRegularDuotone';
import { PawPrintBold } from './PawPrintBold';
import { PawPrintBoldDuotone } from './PawPrintBoldDuotone';
import { PawPrintFill } from './PawPrintFill';
import { PawPrintFillDuotone } from './PawPrintFillDuotone';

export interface PawPrintProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PawPrint with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PawPrintRegular } from 'stera-icons/PawPrintRegular';
 */
const PawPrint = memo(forwardRef<SVGSVGElement, PawPrintProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PawPrintBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PawPrintBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PawPrintFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PawPrintFill ref={ref} {...rest} />;
  if (duotone) return <PawPrintRegularDuotone ref={ref} {...rest} />;
  return <PawPrintRegular ref={ref} {...rest} />;
}));

PawPrint.displayName = 'PawPrint';

export { PawPrint };
