import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothRegularDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-duotone" {...props}>
      <path d="M5.4 7.55a.75.75 0 0 1 1.05-.15l4.8 3.6v3l-4.8 3.6a.75.75 0 0 1-.9-1.2l5.2-3.9-5.2-3.9a.75.75 0 0 1-.15-1.05" opacity={.4} />
        <path fillRule="evenodd" d="M11.67 2.33c.25-.13.55-.1.78.07l6 4.5a.75.75 0 0 1 0 1.2l-5.2 3.9 5.2 3.9a.75.75 0 0 1 0 1.2l-6 4.5a.75.75 0 0 1-1.2-.6V3c0-.28.16-.54.41-.67m1.08 17.17 4-3-4-3zm0-9 4-3-4-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothRegularDuotone.displayName = 'BluetoothRegularDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothRegularDuotone, BluetoothRegularDuotone as BluetoothRegularDuotoneIcon, BluetoothRegularDuotone as SiBluetoothRegularDuotone };
export default BluetoothRegularDuotone;
export type { BluetoothRegularDuotoneProps };
