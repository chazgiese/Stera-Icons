import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { QrCodeRegular } from './QrCodeRegular';
import { QrCodeRegularDuotone } from './QrCodeRegularDuotone';
import { QrCodeBold } from './QrCodeBold';
import { QrCodeBoldDuotone } from './QrCodeBoldDuotone';
import { QrCodeFill } from './QrCodeFill';
import { QrCodeFillDuotone } from './QrCodeFillDuotone';

export interface QrCodeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * QrCode - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { QrCodeRegular } from 'stera-icons/icons/QrCodeRegular';
 */
const QrCode = memo(forwardRef<SVGSVGElement, QrCodeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <QrCodeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <QrCodeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <QrCodeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <QrCodeFill ref={ref} {...rest} />;
  if (duotone) return <QrCodeRegularDuotone ref={ref} {...rest} />;
  return <QrCodeRegular ref={ref} {...rest} />;
}));

QrCode.displayName = 'QrCode';

// Triple export pattern (lucide-react style)
export { QrCode, QrCode as QrCodeIcon, QrCode as SiQrCode };
export default QrCode;
