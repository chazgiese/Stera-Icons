import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarRowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.75 2C19.99 2 21 3 21 4.25v3.5C21 8.99 20 10 18.75 10h-5.76l.01.25v3.5l-.01.25h1.76c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25H5v-2h9.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5v-2h5.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H5V8h13.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H5V2z" opacity={.4} />
        <path fill="currentColor" d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ChartBarRowBoldDuotone.displayName = 'ChartBarRowBoldDuotone';

export { ChartBarRowBoldDuotone };
export type { ChartBarRowBoldDuotoneProps };
