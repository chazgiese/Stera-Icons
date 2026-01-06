import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SignatureXIcon as RegularSignatureXIcon } from './signature-x';
import { SignatureXIconDuotone as SignatureXIconDuotone } from './signature-x-duotone';
import { SignatureXIconBold as SignatureXIconBold } from './signature-x-bold';
import { SignatureXIconBoldDuotone as SignatureXIconBoldDuotone } from './signature-x-bold-duotone';
import { SignatureXIconFill as SignatureXIconFill } from './signature-x-fill';
import { SignatureXIconFillDuotone as SignatureXIconFillDuotone } from './signature-x-fill-duotone';

export interface SignatureXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SignatureXIcon = memo(forwardRef<SVGSVGElement, SignatureXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SignatureXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SignatureXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SignatureXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SignatureXIconFill ref={ref} {...props} />;
  if (duotone) return <SignatureXIconDuotone ref={ref} {...props} />;
  return <RegularSignatureXIcon ref={ref} {...props} />;
}));

SignatureXIcon.displayName = 'SignatureXIcon';

export { SignatureXIcon };
