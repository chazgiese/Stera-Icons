import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothBoldProps = Omit<IconBaseProps, 'children'>;

const BluetoothBold = memo(
  forwardRef<SVGSVGElement, BluetoothBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-bold" {...props}>
      <path fillRule="evenodd" d="M11.55 2.1a1 1 0 0 1 1.05.1l6 4.5a1 1 0 0 1 0 1.6L13.67 12l4.93 3.7a1 1 0 0 1 0 1.6l-6 4.5A1 1 0 0 1 11 21v-7l-4.4 3.3a1 1 0 0 1-1.2-1.6l4.93-3.7L5.4 8.3a1 1 0 1 1 1.2-1.6L11 10V3a1 1 0 0 1 .55-.9M13 19l3.33-2.5L13 14zm0-9 3.33-2.5L13 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBold.displayName = 'BluetoothBold';

// Triple export pattern (lucide-react style)
export { BluetoothBold, BluetoothBold as BluetoothBoldIcon, BluetoothBold as SiBluetoothBold };
export default BluetoothBold;
export type { BluetoothBoldProps };
