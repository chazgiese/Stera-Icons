import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseBoldProps = Omit<IconBaseProps, 'children'>;

const PauseBold = memo(
  forwardRef<SVGSVGElement, PauseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75C4 3.51 5 2.5 6.25 2.5zm-2.5 2a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25h2.5q.23-.02.25-.25V4.75a.25.25 0 0 0-.25-.25zM17.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75c0-1.24 1-2.25 2.25-2.25zm-2.5 2a.25.25 0 0 0-.25.25v14.5q.02.23.25.25h2.5q.23-.02.25-.25V4.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseBold.displayName = 'PauseBold';

// Triple export pattern (lucide-react style)
export { PauseBold, PauseBold as PauseBoldIcon, PauseBold as SiPauseBold };
export default PauseBold;
export type { PauseBoldProps };
