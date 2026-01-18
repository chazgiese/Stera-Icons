import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BottleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m14.28 2.75.06.35.36 4.73q.03.39.27.68l1.18 1.47q.6.77.6 1.72V20A2.75 2.75 0 0 1 14 22.75h-4A2.75 2.75 0 0 1 7.25 20v-8.3c0-.62.21-1.23.6-1.72l1.18-1.47q.24-.3.27-.68l.36-4.73.06-.35h1.93a.5.5 0 0 0-.5.46l-.36 4.73a2.8 2.8 0 0 1-.59 1.51l-1.18 1.47q-.26.34-.27.78V20c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-8.3q0-.43-.27-.78L13.8 9.45a2.8 2.8 0 0 1-.6-1.5l-.36-4.74a.5.5 0 0 0-.5-.46h1.94" opacity={.4} />
        <path fill="currentColor" d="M14.25 1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BottleRegularDuotone.displayName = 'BottleRegularDuotone';

export { BottleRegularDuotone };
export type { BottleRegularDuotoneProps };
