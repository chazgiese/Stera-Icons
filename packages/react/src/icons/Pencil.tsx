import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilRegular } from './PencilRegular';
import { PencilRegularDuotone } from './PencilRegularDuotone';
import { PencilBold } from './PencilBold';
import { PencilBoldDuotone } from './PencilBoldDuotone';
import { PencilFill } from './PencilFill';
import { PencilFillDuotone } from './PencilFillDuotone';

export interface PencilProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pencil - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PencilRegular } from 'stera-icons/PencilRegular';
 */
const Pencil = memo(forwardRef<SVGSVGElement, PencilProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PencilBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PencilFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PencilFill ref={ref} {...rest} />;
  if (duotone) return <PencilRegularDuotone ref={ref} {...rest} />;
  return <PencilRegular ref={ref} {...rest} />;
}));

Pencil.displayName = 'Pencil';

// Triple export pattern (lucide-react style)
export { Pencil, Pencil as PencilIcon, Pencil as SiPencil };
