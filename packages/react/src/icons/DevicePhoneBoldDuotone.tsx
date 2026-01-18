import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DevicePhoneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DevicePhoneBoldDuotone = memo(
  forwardRef<SVGSVGElement, DevicePhoneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.6 1q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v7.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-1.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q3.99 17.25 4 15.6V8.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q9.75.98 11.4 1zm-1.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C6 6.47 6 7.26 6 8.4v7.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h1.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V8.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C14.53 3 13.74 3 12.6 3z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DevicePhoneBoldDuotone.displayName = 'DevicePhoneBoldDuotone';

// Triple export pattern (lucide-react style)
export { DevicePhoneBoldDuotone, DevicePhoneBoldDuotone as DevicePhoneBoldDuotoneIcon, DevicePhoneBoldDuotone as SiDevicePhoneBoldDuotone };
export type { DevicePhoneBoldDuotoneProps };
