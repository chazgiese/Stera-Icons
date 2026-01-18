import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkRegularDuotone = memo(
  forwardRef<SVGSVGElement, LinkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.47 3.47a6.4 6.4 0 0 1 9.06 0l3 3a6.4 6.4 0 0 1-2.07 10.45.75.75 0 0 1-.57-1.39 4.9 4.9 0 0 0 1.58-8l-3-3a4.9 4.9 0 0 0-7.02 6.86.75.75 0 0 1-1.08 1.03 6.4 6.4 0 0 1 .1-8.95" />
        <path fill="currentColor" d="M10.53 7.08a.75.75 0 0 1 .58 1.39 4.9 4.9 0 0 0-1.58 8l3 3a4.9 4.9 0 0 0 7.02-6.85.75.75 0 0 1 1.09-1.04 6.4 6.4 0 0 1-9.17 8.95l-3-3a6.4 6.4 0 0 1 2.06-10.45" opacity={.4} />
    </IconBase>
  ))
);

LinkRegularDuotone.displayName = 'LinkRegularDuotone';

export { LinkRegularDuotone };
export type { LinkRegularDuotoneProps };
