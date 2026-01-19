import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BluetoothRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothRegularDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.66 1.33c.25-.13.55-.1.78.06l7 5a.75.75 0 0 1 0 1.22L13.29 12l6.15 4.39a.75.75 0 0 1 0 1.22l-7 5a.75.75 0 0 1-1.19-.61V2c0-.28.16-.54.4-.67m1.09 19.21L17.71 17l-4.96-3.54zm0-10L17.71 7l-4.96-3.54z" clipRule="evenodd" />
        <path fill="currentColor" d="M4.39 6.56a.75.75 0 0 1 1.05-.17l5.81 4.15v2.92L5.44 17.6a.75.75 0 0 1-.88-1.22L10.71 12 4.56 7.61a.75.75 0 0 1-.17-1.05" opacity={.4} />
    </IconBase>
  ))
);

BluetoothRegularDuotone.displayName = 'BluetoothRegularDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothRegularDuotone, BluetoothRegularDuotone as BluetoothRegularDuotoneIcon, BluetoothRegularDuotone as SiBluetoothRegularDuotone };
export type { BluetoothRegularDuotoneProps };
