import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothFillProps = Omit<IconBaseProps, 'children'>;

const BluetoothFill = memo(
  forwardRef<SVGSVGElement, BluetoothFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.33 1.66a1.5 1.5 0 0 1 1.57.14l6 4.5a1.5 1.5 0 0 1 0 2.4L14.5 12l4.4 3.3a1.5 1.5 0 0 1 0 2.4l-6 4.5a1.5 1.5 0 0 1-2.4-1.2v-6l-3.6 2.7a1.5 1.5 0 0 1-1.8-2.4L9.5 12 5.1 8.7a1.5 1.5 0 0 1 1.8-2.4L10.5 9V3c0-.57.32-1.09.83-1.34M13.5 18l2-1.5-2-1.5zm0-9 2-1.5-2-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothFill.displayName = 'BluetoothFill';

// Triple export pattern (lucide-react style)
export { BluetoothFill, BluetoothFill as BluetoothFillIcon, BluetoothFill as SiBluetoothFill };
export default BluetoothFill;
export type { BluetoothFillProps };
