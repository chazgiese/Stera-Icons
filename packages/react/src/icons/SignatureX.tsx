import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignatureXRegular } from './SignatureXRegular';
import { SignatureXRegularDuotone } from './SignatureXRegularDuotone';
import { SignatureXBold } from './SignatureXBold';
import { SignatureXBoldDuotone } from './SignatureXBoldDuotone';
import { SignatureXFill } from './SignatureXFill';
import { SignatureXFillDuotone } from './SignatureXFillDuotone';

export interface SignatureXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SignatureX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignatureXRegular } from 'stera-icons/SignatureXRegular';
 */
const SignatureX = memo(forwardRef<SVGSVGElement, SignatureXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignatureXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignatureXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignatureXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignatureXFill ref={ref} {...rest} />;
  if (duotone) return <SignatureXRegularDuotone ref={ref} {...rest} />;
  return <SignatureXRegular ref={ref} {...rest} />;
}));

SignatureX.displayName = 'SignatureX';

// Triple export pattern (lucide-react style)
export { SignatureX, SignatureX as SignatureXIcon, SignatureX as SiSignatureX };
