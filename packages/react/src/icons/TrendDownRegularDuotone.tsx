import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M.97 4.47c.3-.3.77-.3 1.06 0l7.47 7.47 2.97-2.97c.3-.3.77-.3 1.06 0l8.22 8.22v1.06h-1.06L13 10.56l-2.97 2.97a.75.75 0 0 1-.95.1l-.11-.1-8-8a.75.75 0 0 1 0-1.06" opacity={.4} />
        <path fill="currentColor" d="M22.5 12.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-6a.75.75 0 0 1 0-1.5h5.25V13c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TrendDownRegularDuotone.displayName = 'TrendDownRegularDuotone';

export { TrendDownRegularDuotone };
export type { TrendDownRegularDuotoneProps };
