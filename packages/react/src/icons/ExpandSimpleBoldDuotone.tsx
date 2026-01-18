import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ExpandSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 14.3a1 1 0 1 1 1.4 1.4L5.42 20H4v-1.41zM20 4v1.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L18.58 4z" />
        <path fill="currentColor" d="M3 14a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H2.9a1 1 0 0 1-.9-1v-6a1 1 0 0 1 1-1M21.1 2c.5.06.9.48.9 1v6a1 1 0 1 1-2 0V4h-5a1 1 0 1 1 0-2h6.1" />
    </IconBase>
  ))
);

ExpandSimpleBoldDuotone.displayName = 'ExpandSimpleBoldDuotone';

export { ExpandSimpleBoldDuotone };
export type { ExpandSimpleBoldDuotoneProps };
