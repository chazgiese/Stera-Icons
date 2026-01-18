import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

MoreRegularDuotone.displayName = 'MoreRegularDuotone';

export { MoreRegularDuotone };
export type { MoreRegularDuotoneProps };
