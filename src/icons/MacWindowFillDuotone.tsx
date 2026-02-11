import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowFillDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM6.75 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path d="M8 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11.5 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
    </IconBase>
  ))
);

MacWindowFillDuotone.displayName = 'MacWindowFillDuotone';

// Triple export pattern (lucide-react style)
export { MacWindowFillDuotone, MacWindowFillDuotone as MacWindowFillDuotoneIcon, MacWindowFillDuotone as SiMacWindowFillDuotone };
export default MacWindowFillDuotone;
export type { MacWindowFillDuotoneProps };
