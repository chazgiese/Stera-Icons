import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BackslashRegularProps = Omit<IconBaseProps, 'children'>;

const BackslashRegular = memo(
  forwardRef<SVGSVGElement, BackslashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.56 2.5a.75.75 0 0 0-1.12 1l16 18a.75.75 0 0 0 1.12-1z" />
    </IconBase>
  ))
);

BackslashRegular.displayName = 'BackslashRegular';

export { BackslashRegular };
export type { BackslashRegularProps };
