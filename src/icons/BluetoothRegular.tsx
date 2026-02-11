import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothRegularProps = Omit<IconBaseProps, 'children'>;

const BluetoothRegular = memo(
  forwardRef<SVGSVGElement, BluetoothRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth" {...props}>
      <path fillRule="evenodd" d="M11.67 2.33c.25-.13.55-.1.78.07l6 4.5a.75.75 0 0 1 0 1.2l-5.2 3.9 5.2 3.9a.75.75 0 0 1 0 1.2l-6 4.5a.75.75 0 0 1-1.2-.6v-7.5l-4.8 3.6a.75.75 0 0 1-.9-1.2l5.2-3.9-5.2-3.9a.75.75 0 0 1 .9-1.2l4.8 3.6V3c0-.28.16-.54.42-.67m1.08 17.17 4-3-4-3zm0-9 4-3-4-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothRegular.displayName = 'BluetoothRegular';

// Triple export pattern (lucide-react style)
export { BluetoothRegular, BluetoothRegular as BluetoothRegularIcon, BluetoothRegular as SiBluetoothRegular };
export default BluetoothRegular;
export type { BluetoothRegularProps };
