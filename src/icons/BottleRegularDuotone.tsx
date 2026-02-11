import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BottleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-duotone" {...props}>
      <path d="m14.3 3.75.05.32.34 3.76q.04.38.27.67l1.19 1.48q.6.77.6 1.72V19A2.75 2.75 0 0 1 14 21.75h-4A2.75 2.75 0 0 1 7.25 19v-7.3c0-.62.21-1.23.6-1.72L9.04 8.5q.23-.29.27-.67l.34-3.76.06-.32h1.94a.5.5 0 0 0-.5.46l-.35 3.76a2.8 2.8 0 0 1-.59 1.47l-1.19 1.48q-.26.34-.27.78V19c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-7.3q0-.43-.27-.78l-1.19-1.48a2.8 2.8 0 0 1-.6-1.47l-.33-3.76a.5.5 0 0 0-.5-.46h1.93" opacity={.4} />
        <path d="M14.25 2.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BottleRegularDuotone.displayName = 'BottleRegularDuotone';

// Triple export pattern (lucide-react style)
export { BottleRegularDuotone, BottleRegularDuotone as BottleRegularDuotoneIcon, BottleRegularDuotone as SiBottleRegularDuotone };
export default BottleRegularDuotone;
export type { BottleRegularDuotoneProps };
