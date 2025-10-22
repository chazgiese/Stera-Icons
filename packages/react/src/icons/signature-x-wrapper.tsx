import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SignatureXIcon as SignatureXIconRegular } from './signature-x';
import { SignatureXIconBold } from './signature-x-bold';
import { SignatureXIconFilled } from './signature-x-filled';
import { SignatureXIconFilltone } from './signature-x-filltone';
import { SignatureXIconLinetone } from './signature-x-linetone';

export interface SignatureXIconProps extends IconProps {
  variant?: IconVariant;
}

const SignatureXIcon = memo(forwardRef<SVGSVGElement, SignatureXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SignatureXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SignatureXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SignatureXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SignatureXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SignatureXIconRegular ref={ref} {...props} />;
  }
}));

SignatureXIcon.displayName = 'SignatureXIcon';

export { SignatureXIcon };
