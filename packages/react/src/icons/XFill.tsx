import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XFillProps = Omit<IconBaseProps, 'children'>;

const XFill = memo(
  forwardRef<SVGSVGElement, XFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12L14.12 12l5.94 5.94a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-5.94 5.94a1.5 1.5 0 0 1-2.12-2.12L9.88 12 3.94 6.06a1.5 1.5 0 1 1 2.12-2.12L12 9.88z" />
    </IconBase>
  ))
);

XFill.displayName = 'XFill';

export { XFill };
export type { XFillProps };
