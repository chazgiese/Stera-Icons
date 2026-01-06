import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignatureIcon as RegularSignatureIcon } from './signature';
import { SignatureIconDuotone as SignatureIconDuotone } from './signature-duotone';
import { SignatureIconBold as SignatureIconBold } from './signature-bold';
import { SignatureIconBoldDuotone as SignatureIconBoldDuotone } from './signature-bold-duotone';
import { SignatureIconFill as SignatureIconFill } from './signature-fill';
import { SignatureIconFillDuotone as SignatureIconFillDuotone } from './signature-fill-duotone';

export interface SignatureIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignatureIcon = memo(forwardRef<SVGSVGElement, SignatureIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignatureIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignatureIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignatureIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignatureIconFill ref={ref} {...props} />;
  if (duotone) return <SignatureIconDuotone ref={ref} {...props} />;
  return <RegularSignatureIcon ref={ref} {...props} />;
}));

SignatureIcon.displayName = 'SignatureIcon';

export { SignatureIcon };
