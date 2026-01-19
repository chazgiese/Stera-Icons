import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ContrastRegular } from './ContrastRegular';
import { ContrastRegularDuotone } from './ContrastRegularDuotone';
import { ContrastBold } from './ContrastBold';
import { ContrastBoldDuotone } from './ContrastBoldDuotone';
import { ContrastFill } from './ContrastFill';
import { ContrastFillDuotone } from './ContrastFillDuotone';

export interface ContrastProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Contrast - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ContrastRegular } from 'stera-icons/icons/ContrastRegular';
 */
const Contrast = memo(forwardRef<SVGSVGElement, ContrastProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ContrastBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ContrastBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ContrastFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ContrastFill ref={ref} {...rest} />;
  if (duotone) return <ContrastRegularDuotone ref={ref} {...rest} />;
  return <ContrastRegular ref={ref} {...rest} />;
}));

Contrast.displayName = 'Contrast';

// Triple export pattern (lucide-react style)
export { Contrast, Contrast as ContrastIcon, Contrast as SiContrast };
