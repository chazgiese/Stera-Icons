import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LinkOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.95 10.86a1.5 1.5 0 1 1 2.12 2.12l-.75.76a2.8 2.8 0 0 0 3.94 3.94l.76-.75a1.5 1.5 0 0 1 2.12 2.12l-.75.75a5.8 5.8 0 0 1-8.2-8.19zM11.61 4.2a5.8 5.8 0 0 1 8.2 8.19l-.76.75a1.5 1.5 0 1 1-2.12-2.12l.75-.76a2.8 2.8 0 0 0-3.94-3.94l-.76.75a1.5 1.5 0 0 1-2.12-2.12z" />
        <path fill="currentColor" d="M3.83 3.83a1.5 1.5 0 0 1 2.12 0l14.22 14.22a1.5 1.5 0 0 1-2.12 2.12L3.83 5.95a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

LinkOffFillDuotone.displayName = 'LinkOffFillDuotone';

export { LinkOffFillDuotone };
export type { LinkOffFillDuotoneProps };
