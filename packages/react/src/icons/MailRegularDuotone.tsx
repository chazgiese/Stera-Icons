import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path stroke="currentColor" strokeWidth="1.5" d="M9.5 13 2.01 7 2 7A3 3 0 0 1 4.99 4H19A3 3 0 0 1 22 7l-7.5 6a4 4 0 0 1-4.99 0Z" />
        <path fill="currentColor" d="M1.25 6.99c0 .23.1.46.3.6l1.2.97V17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V8.56l1.2-.97c.2-.14.3-.37.3-.6V17A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17z" opacity={.4} />
    </IconBase>
  ))
);

MailRegularDuotone.displayName = 'MailRegularDuotone';

export { MailRegularDuotone };
export type { MailRegularDuotoneProps };
