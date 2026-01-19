import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BluetoothBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothBoldDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-bold-duotone" {...props}>
      <path fill="currentColor" d="M4.19 6.42a1 1 0 0 1 1.4-.23L11 10.06v3.88l-5.42 3.87a1 1 0 0 1-1.16-1.62L10.28 12 4.42 7.81a1 1 0 0 1-.23-1.4" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.54 1.11a1 1 0 0 1 1.04.08l7 5a1 1 0 0 1 0 1.62L13.72 12l5.86 4.19a1 1 0 0 1 0 1.62l-7 5A1 1 0 0 1 11 22V2a1 1 0 0 1 .54-.89M13 20.06 17.28 17 13 13.94zm0-10L17.28 7 13 3.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBoldDuotone.displayName = 'BluetoothBoldDuotone';

// Triple export pattern (lucide-react style)
export { BluetoothBoldDuotone, BluetoothBoldDuotone as BluetoothBoldDuotoneIcon, BluetoothBoldDuotone as SiBluetoothBoldDuotone };
export type { BluetoothBoldDuotoneProps };
