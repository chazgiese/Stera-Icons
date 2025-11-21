import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { QrCodeIcon as RegularQrCodeIcon } from './qr-code';
import { QrCodeIconBold } from './qr-code-bold';
import { QrCodeIconFilled } from './qr-code-filled';
import { QrCodeIconFilltone } from './qr-code-filltone';
import { QrCodeIconLinetone } from './qr-code-linetone';

export interface QrCodeIconProps extends IconProps {
  variant?: IconVariant;
}

const QrCodeIcon = memo(forwardRef<SVGSVGElement, QrCodeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <QrCodeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <QrCodeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <QrCodeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <QrCodeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularQrCodeIcon ref={ref} {...props} />;
  }
}));

QrCodeIcon.displayName = 'QrCodeIcon';

export { QrCodeIcon };
