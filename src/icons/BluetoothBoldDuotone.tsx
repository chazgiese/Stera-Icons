import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothBoldDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-bold-duotone" {...props}>
      <path fill="currentColor" d="M5.17 7.45a1 1 0 0 1 1.38-.28L11 10.13v3.74l-4.45 2.96a1 1 0 1 1-1.1-1.66L10.2 12 5.45 8.83a1 1 0 0 1-.28-1.38" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.55 2.1a1 1 0 0 1 1.05.1l6 4.5a1 1 0 0 1 0 1.6L13.67 12l4.93 3.7a1 1 0 0 1 0 1.6l-6 4.5A1 1 0 0 1 11 21V3a1 1 0 0 1 .55-.9M13 19l3.33-2.5L13 14zm0-9 3.33-2.5L13 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBoldDuotone.displayName = 'BluetoothBoldDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothBoldDuotone, BluetoothBoldDuotone as BluetoothBoldDuotoneIcon, BluetoothBoldDuotone as SiBluetoothBoldDuotone };
export default BluetoothBoldDuotone;
export type { BluetoothBoldDuotoneProps };
