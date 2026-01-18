import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForkKnifeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeFillDuotone = memo(
  forwardRef<SVGSVGElement, ForkKnifeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.25 19.5a2.25 2.25 0 0 1-4.5 0v-6.98q.22.22.54.23H8.7q.32-.01.54-.23zM19.83 2.27a.75.75 0 0 1 .92.73v12.75H14a.75.75 0 0 1-.75-.75c0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56" />
        <path fill="currentColor" d="M9.75 2a1 1 0 0 1 1 1v6q0 .15-.06.3l-1.29 3a.8.8 0 0 1-.69.45H5.3a.8.8 0 0 1-.7-.45l-1.28-3a1 1 0 0 1-.06-.3V3a1 1 0 0 1 2 0v5.25H6V3.5a1 1 0 0 1 2 0v4.75h.75V3a1 1 0 0 1 1-1M20.75 19.5a2.25 2.25 0 0 1-4.5 0v-3.75h4.5z" />
    </IconBase>
  ))
);

ForkKnifeFillDuotone.displayName = 'ForkKnifeFillDuotone';

export { ForkKnifeFillDuotone };
export type { ForkKnifeFillDuotoneProps };
