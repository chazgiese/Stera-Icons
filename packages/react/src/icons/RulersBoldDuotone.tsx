import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RulersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulersBoldDuotone = memo(
  forwardRef<SVGSVGElement, RulersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.75 2C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H10v9.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V10h2v9.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V10h2V8h9.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H10V2z" opacity={.4} />
        <path fill="currentColor" d="M8 18H7a1 1 0 1 1 0-2h1zM8 14H7a1 1 0 1 1 0-2h1z" />
        <path fill="currentColor" fillRule="evenodd" d="M10 10H2V4c0-1.1.9-2 2-2h6zM4 8h4V4H4z" clipRule="evenodd" />
        <path fill="currentColor" d="M13 6a1 1 0 0 1 1 1v1h-2V7a1 1 0 0 1 1-1M17 6a1 1 0 0 1 1 1v1h-2V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

RulersBoldDuotone.displayName = 'RulersBoldDuotone';

// Triple export pattern (lucide-react style)
export { RulersBoldDuotone, RulersBoldDuotone as RulersBoldDuotoneIcon, RulersBoldDuotone as SiRulersBoldDuotone };
export type { RulersBoldDuotoneProps };
