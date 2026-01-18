import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownRegularProps = Omit<IconBaseProps, 'children'>;

const TrendDownRegular = memo(
  forwardRef<SVGSVGElement, TrendDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M.97 4.47c.3-.3.77-.3 1.06 0l7.47 7.47 2.97-2.97c.3-.3.77-.3 1.06 0l8.22 8.22V13a.75.75 0 1 1 1.5 0v6a1 1 0 0 1-.14.43 1 1 0 0 1-.32.26l-.1.03-.04.01h-.02l-.13.02h-6a.75.75 0 0 1 0-1.5h4.19L13 10.56l-2.97 2.97a.75.75 0 0 1-.95.1l-.11-.1-8-8a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

TrendDownRegular.displayName = 'TrendDownRegular';

// Triple export pattern (lucide-react style)
export { TrendDownRegular, TrendDownRegular as TrendDownRegularIcon, TrendDownRegular as SiTrendDownRegular };
export type { TrendDownRegularProps };
