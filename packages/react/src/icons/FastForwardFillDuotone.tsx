import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FastForwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FastForwardFillDuotone = memo(
  forwardRef<SVGSVGElement, FastForwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.98 5.77c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83a2 2 0 0 1 0 1.6c-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58a2 2 0 0 1-1.12.25 2 2 0 0 1-1.42-.81 2 2 0 0 1-.36-1.08L12 15.8V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08a2 2 0 0 1 1.42-.8z" />
        <path fill="currentColor" d="M2.98 5.77c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83a2 2 0 0 1 0 1.6c-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58a2 2 0 0 1-1.12.25 2 2 0 0 1-1.42-.81 2 2 0 0 1-.36-1.08q-.04-.49-.03-1.17V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08a2 2 0 0 1 1.42-.8z" opacity={.4} />
    </IconBase>
  ))
);

FastForwardFillDuotone.displayName = 'FastForwardFillDuotone';

export { FastForwardFillDuotone };
export type { FastForwardFillDuotoneProps };
