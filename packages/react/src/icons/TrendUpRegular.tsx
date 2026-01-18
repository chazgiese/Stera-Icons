import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpRegularProps = Omit<IconBaseProps, 'children'>;

const TrendUpRegular = memo(
  forwardRef<SVGSVGElement, TrendUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m22.5 4.25.13.01h.02l.04.02.1.03a.8.8 0 0 1 .36.32l.04.08a1 1 0 0 1 .06.29v6a.75.75 0 0 1-1.5 0V6.81l-8.22 8.22c-.3.3-.77.3-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8 .11-.1a.75.75 0 0 1 .95.1L13 13.44l7.69-7.69H16.5a.75.75 0 1 1 0-1.5z" />
    </IconBase>
  ))
);

TrendUpRegular.displayName = 'TrendUpRegular';

export { TrendUpRegular };
export type { TrendUpRegularProps };
