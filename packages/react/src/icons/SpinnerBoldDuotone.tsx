import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpinnerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.34 16.25a1 1 0 0 1 1.41 1.41l-2.12 2.12a1 1 0 0 1-1.41-1.41zM16.24 16.25a1 1 0 0 1 1.41 0l2.12 2.12a1 1 0 0 1-1.4 1.41l-2.13-2.12a1 1 0 0 1 0-1.41M4.22 4.22a1 1 0 0 1 1.41 0l2.12 2.12a1 1 0 1 1-1.41 1.42L4.22 5.64a1 1 0 0 1 0-1.42M18.36 4.22a1 1 0 0 1 1.41 1.42l-2.12 2.12a1 1 0 0 1-1.41-1.42z" />
        <path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SpinnerBoldDuotone.displayName = 'SpinnerBoldDuotone';

export { SpinnerBoldDuotone };
export type { SpinnerBoldDuotoneProps };
