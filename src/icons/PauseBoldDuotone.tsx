import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseBoldDuotone = memo(
  forwardRef<SVGSVGElement, PauseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M17.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75c0-1.24 1-2.25 2.25-2.25zm-2.5 2a.25.25 0 0 0-.25.25v14.5q.02.23.25.25h2.5q.23-.02.25-.25V4.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M8.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75C4 3.51 5 2.5 6.25 2.5zm-2.5 2a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25h2.5q.23-.02.25-.25V4.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseBoldDuotone.displayName = 'PauseBoldDuotone';

// Triple export pattern (lucide-react style)
export { PauseBoldDuotone, PauseBoldDuotone as PauseBoldDuotoneIcon, PauseBoldDuotone as SiPauseBoldDuotone };
export default PauseBoldDuotone;
export type { PauseBoldDuotoneProps };
