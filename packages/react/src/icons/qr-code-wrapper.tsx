import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QrCodeIcon as RegularQrCodeIcon } from './qr-code';
import { QrCodeIconDuotone as QrCodeIconDuotone } from './qr-code-duotone';
import { QrCodeIconBold as QrCodeIconBold } from './qr-code-bold';
import { QrCodeIconBoldDuotone as QrCodeIconBoldDuotone } from './qr-code-bold-duotone';
import { QrCodeIconFill as QrCodeIconFill } from './qr-code-fill';
import { QrCodeIconFillDuotone as QrCodeIconFillDuotone } from './qr-code-fill-duotone';

export interface QrCodeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const QrCodeIcon = memo(forwardRef<SVGSVGElement, QrCodeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <QrCodeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <QrCodeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <QrCodeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <QrCodeIconFill ref={ref} {...props} />;
  if (duotone) return <QrCodeIconDuotone ref={ref} {...props} />;
  return <RegularQrCodeIcon ref={ref} {...props} />;
}));

QrCodeIcon.displayName = 'QrCodeIcon';

export { QrCodeIcon };
