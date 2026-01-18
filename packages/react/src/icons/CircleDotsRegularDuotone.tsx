import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleDotsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotsRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 19.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3M3 10.5A1.5 1.5 0 1 1 1.5 12v-.02c0-.82.67-1.5 1.5-1.5M21 10.5a1.5 1.5 0 1 1-1.5 1.5c0-.83.67-1.5 1.5-1.5M12 1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path d="M4.57 17.3a1.5 1.5 0 1 1 0 2.12 1.5 1.5 0 0 1 0-2.12M17.3 17.3a1.5 1.5 0 1 1 2.13 2.12 1.5 1.5 0 1 1-2.12-2.12M4.58 4.57A1.5 1.5 0 1 1 6.69 6.7a1.5 1.5 0 1 1-2.11-2.13M17.3 4.57a1.5 1.5 0 1 1 0 2.13 1.5 1.5 0 0 1 0-2.13" />
    </IconBase>
  ))
);

CircleDotsRegularDuotone.displayName = 'CircleDotsRegularDuotone';

export { CircleDotsRegularDuotone };
export type { CircleDotsRegularDuotoneProps };
