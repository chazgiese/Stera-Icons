import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-duotone" {...props}>
      <path d="M15.25 17.75h-6.5v-1.5h6.5zM15.25 13.75h-6.5v-1.5h6.5zM14.25 2.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
        <path d="m14.3 3.75.05.32.34 3.76q.04.38.27.67l1.19 1.48q.6.77.6 1.72V19A2.75 2.75 0 0 1 14 21.75h-4A2.75 2.75 0 0 1 7.25 19v-7.3c0-.62.21-1.23.6-1.72L9.04 8.5q.23-.29.27-.67l.34-3.76.06-.32h1.94a.5.5 0 0 0-.5.46l-.35 3.76a2.8 2.8 0 0 1-.59 1.47l-1.19 1.48q-.26.34-.27.78V19c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-7.3q0-.43-.27-.78l-1.19-1.48a2.8 2.8 0 0 1-.6-1.47l-.33-3.76a.5.5 0 0 0-.5-.46h1.93" opacity={.4} />
    </IconBase>
  ))
);

BottleLabelRegularDuotone.displayName = 'BottleLabelRegularDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelRegularDuotone, BottleLabelRegularDuotone as BottleLabelRegularDuotoneIcon, BottleLabelRegularDuotone as SiBottleLabelRegularDuotone };
export default BottleLabelRegularDuotone;
export type { BottleLabelRegularDuotoneProps };
