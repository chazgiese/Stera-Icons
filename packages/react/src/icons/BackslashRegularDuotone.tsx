import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BackslashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashRegularDuotone = memo(
  forwardRef<SVGSVGElement, BackslashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20.56 20.5a.75.75 0 1 1-1.12 1l-8-9 1.12-1z" opacity={.4} />
        <path fill="currentColor" d="M3.5 2.44a.75.75 0 0 1 1.06.06l8 9-1.12 1-8-9a.75.75 0 0 1 .06-1.06" />
    </IconBase>
  ))
);

BackslashRegularDuotone.displayName = 'BackslashRegularDuotone';

export { BackslashRegularDuotone };
export type { BackslashRegularDuotoneProps };
