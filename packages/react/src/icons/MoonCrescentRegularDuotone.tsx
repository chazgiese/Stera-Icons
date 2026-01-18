import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonCrescentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.44 2.08a.75.75 0 0 1 1.34.69 9.25 9.25 0 0 0 10.9 13.09.75.75 0 0 1 .43 1.43A10.75 10.75 0 0 1 8.44 2.1" opacity={.4} />
        <path fill="currentColor" d="M8.87 1.71a.8.8 0 0 0-.43.37q-.42.83-.7 1.71A9.25 9.25 0 1 0 19.3 17.67q.94-.11 1.8-.38a.8.8 0 0 0 .46-.37A10.75 10.75 0 1 1 8.87 1.72M8.89 1.7l.08-.01z" />
    </IconBase>
  ))
);

MoonCrescentRegularDuotone.displayName = 'MoonCrescentRegularDuotone';

export { MoonCrescentRegularDuotone };
export type { MoonCrescentRegularDuotoneProps };
