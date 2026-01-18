import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignatureRegular } from './SignatureRegular';
import { SignatureRegularDuotone } from './SignatureRegularDuotone';
import { SignatureBold } from './SignatureBold';
import { SignatureBoldDuotone } from './SignatureBoldDuotone';
import { SignatureFill } from './SignatureFill';
import { SignatureFillDuotone } from './SignatureFillDuotone';

export interface SignatureProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Signature with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SignatureRegular } from 'stera-icons/SignatureRegular';
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

export { Signature };
