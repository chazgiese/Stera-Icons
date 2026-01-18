import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineDownFill = memo(
  forwardRef<SVGSVGElement, ArrowLineDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 2a1 1 0 0 1 1 1v6.25h4.91c1.07 0 1.6 1.3.85 2.05l-5.85 5.86c-.5.5-1.32.5-1.82 0L5.24 11.3a1.2 1.2 0 0 1 .85-2.05H11V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowLineDownFill.displayName = 'ArrowLineDownFill';

export { ArrowLineDownFill };
export type { ArrowLineDownFillProps };
