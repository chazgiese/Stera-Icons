import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SignatureRegular } from './SignatureRegular.js';
import { SignatureRegularDuotone } from './SignatureRegularDuotone.js';
import { SignatureBold } from './SignatureBold.js';
import { SignatureBoldDuotone } from './SignatureBoldDuotone.js';
import { SignatureFill } from './SignatureFill.js';
import { SignatureFillDuotone } from './SignatureFillDuotone.js';

export interface SignatureProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Signature - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SignatureRegular } from 'stera-icons/icons/SignatureRegular';
 */
const Signature = memo(forwardRef<SVGSVGElement, SignatureProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignatureBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SignatureBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SignatureFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SignatureFill ref={ref} {...rest} />;
  if (duotone) return <SignatureRegularDuotone ref={ref} {...rest} />;
  return <SignatureRegular ref={ref} {...rest} />;
}));

Signature.displayName = 'Signature';

// Triple export pattern (lucide-react style)
export { Signature, Signature as SignatureIcon, Signature as SiSignature };
export default Signature;
