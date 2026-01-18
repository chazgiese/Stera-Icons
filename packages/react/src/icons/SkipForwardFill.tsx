import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SkipForwardFillProps = Omit<IconBaseProps, 'children'>;

const SkipForwardFill = memo(
  forwardRef<SVGSVGElement, SkipForwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.86 2.84c.45-.04.84.13 1.12.28q.45.24 1.03.62l9.44 6.07q.51.32.87.6c.23.18.51.43.67.81a2 2 0 0 1 0 1.56c-.16.38-.44.63-.67.81q-.36.28-.87.6L7 20.26q-.59.38-1.03.62c-.28.15-.67.32-1.12.28a2 2 0 0 1-1.46-.8 2 2 0 0 1-.37-1.1q-.04-.49-.03-1.2V5.94q0-.7.03-1.2c.03-.32.1-.74.37-1.1a2 2 0 0 1 1.46-.8M20 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SkipForwardFill.displayName = 'SkipForwardFill';

export { SkipForwardFill };
export type { SkipForwardFillProps };
