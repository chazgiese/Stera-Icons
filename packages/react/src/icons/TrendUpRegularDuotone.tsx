import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21.75 5.75v1.06l-8.22 8.22c-.3.3-.77.3-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8 .11-.1a.75.75 0 0 1 .95.1L13 13.44l7.69-7.69z" opacity={.4} />
        <path fill="currentColor" d="M22.5 4.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V5.75H16.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TrendUpRegularDuotone.displayName = 'TrendUpRegularDuotone';

export { TrendUpRegularDuotone };
export type { TrendUpRegularDuotoneProps };
