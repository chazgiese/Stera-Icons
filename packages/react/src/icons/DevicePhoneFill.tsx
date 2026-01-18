import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DevicePhoneFillProps = Omit<IconBaseProps, 'children'>;

const DevicePhoneFill = memo(
  forwardRef<SVGSVGElement, DevicePhoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 18.43 4 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 1 9.8 1zM11 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

DevicePhoneFill.displayName = 'DevicePhoneFill';

export { DevicePhoneFill };
export type { DevicePhoneFillProps };
