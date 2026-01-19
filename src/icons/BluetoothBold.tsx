import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BluetoothBoldProps = Omit<IconBaseProps, 'children'>;

const BluetoothBold = memo(
  forwardRef<SVGSVGElement, BluetoothBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="bluetooth-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.54 1.11a1 1 0 0 1 1.04.08l7 5a1 1 0 0 1 0 1.62L13.72 12l5.86 4.19a1 1 0 0 1 0 1.62l-7 5A1 1 0 0 1 11 22v-8.06l-5.42 3.87a1 1 0 1 1-1.16-1.62L10.28 12 4.42 7.81A1 1 0 1 1 5.58 6.2L11 10.06V2a1 1 0 0 1 .54-.89M13 20.06 17.28 17 13 13.94zm0-10L17.28 7 13 3.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBold.displayName = 'BluetoothBold';

// Triple export pattern (lucide-react style)
export { BluetoothBold, BluetoothBold as BluetoothBoldIcon, BluetoothBold as SiBluetoothBold };
export default BluetoothBold;
export type { BluetoothBoldProps };
