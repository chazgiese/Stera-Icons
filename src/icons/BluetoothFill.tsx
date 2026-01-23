import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillProps = Omit<IconBaseProps, 'children'>;

const BluetoothFill = memo(
  forwardRef<SVGSVGElement, BluetoothFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.31.67a1.5 1.5 0 0 1 1.56.1l7 5a1.5 1.5 0 0 1 0 2.45L14.58 12l5.3 3.78a1.5 1.5 0 0 1 0 2.44l-7 5A1.5 1.5 0 0 1 10.5 22v-7.09l-4.63 3.31a1.5 1.5 0 0 1-1.74-2.44L9.42 12l-5.3-3.78a1.5 1.5 0 0 1 1.75-2.44l4.63 3.3V2c0-.56.31-1.08.81-1.33m2.19 18.41L16.42 17l-2.92-2.09zm0-10L16.42 7 13.5 4.91z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothFill.displayName = 'BluetoothFill';

// Triple export pattern (lucide-react style)
export { BluetoothFill, BluetoothFill as BluetoothFillIcon, BluetoothFill as SiBluetoothFill };
export default BluetoothFill;
export type { BluetoothFillProps };
