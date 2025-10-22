import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignatureIcon as RegularSignatureIcon } from './signature';
import { SignatureIconBold } from './signature-bold';
import { SignatureIconFilled } from './signature-filled';
import { SignatureIconFilltone } from './signature-filltone';
import { SignatureIconLinetone } from './signature-linetone';

export interface SignatureIconProps extends IconProps {
  variant?: IconVariant;
}

const SignatureIcon = memo(forwardRef<SVGSVGElement, SignatureIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignatureIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignatureIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignatureIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignatureIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSignatureIcon ref={ref} {...props} />;
  }
}));

SignatureIcon.displayName = 'SignatureIcon';

export { SignatureIcon };
