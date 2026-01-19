import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpFillProps = Omit<IconBaseProps, 'children'>;

const TrendUpFill = memo(
  forwardRef<SVGSVGElement, TrendUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-fill" {...props}>
      <path fill="currentColor" d="M22.5 4a1 1 0 0 1 .43.1l.04.02a1 1 0 0 1 .53.88v6a1 1 0 0 1-1.7.7l-2.3-2.29-5.8 5.8a1 1 0 0 1-1.4 0l-2.8-2.8-7.3 7.3a1 1 0 1 1-1.4-1.42l8-8 .07-.06a1 1 0 0 1 1.34.06L13 13.1 18.09 8l-2.3-2.3A1 1 0 0 1 16.5 4z" />
    </IconBase>
  ))
);

TrendUpFill.displayName = 'TrendUpFill';

// Triple export pattern (lucide-react style)
export { TrendUpFill, TrendUpFill as TrendUpFillIcon, TrendUpFill as SiTrendUpFill };
export type { TrendUpFillProps };
