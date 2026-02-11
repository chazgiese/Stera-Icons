import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothFillDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-fill-duotone" {...props}>
      <path d="M4.8 7.1a1.5 1.5 0 0 1 2.1-.3l3.6 2.7v6l-3.6 2.7a1.5 1.5 0 0 1-1.8-2.4l4.4-3.3-4.4-3.3a1.5 1.5 0 0 1-.3-2.1" opacity={.4} />
        <path fillRule="evenodd" d="M11.33 1.66a1.5 1.5 0 0 1 1.57.14l6 4.5a1.5 1.5 0 0 1 0 2.4L14.5 12l4.4 3.3a1.5 1.5 0 0 1 0 2.4l-6 4.5a1.5 1.5 0 0 1-2.4-1.2V3c0-.57.32-1.09.83-1.34M13.5 18l2-1.5-2-1.5zm0-9 2-1.5-2-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothFillDuotone.displayName = 'BluetoothFillDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothFillDuotone, BluetoothFillDuotone as BluetoothFillDuotoneIcon, BluetoothFillDuotone as SiBluetoothFillDuotone };
export default BluetoothFillDuotone;
export type { BluetoothFillDuotoneProps };
