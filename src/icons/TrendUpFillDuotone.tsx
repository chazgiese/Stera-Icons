import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-fill-duotone" {...props}>
      <path fill="currentColor" d="m19.5 9.41-5.8 5.8a1 1 0 0 1-1.4 0l-2.8-2.8-7.3 7.3a1 1 0 0 1-1.4-1.42l8-8 .07-.06a1 1 0 0 1 1.34.06L13 13.1 18.09 8z" opacity={.4} />
        <path fill="currentColor" d="M22.5 4a1 1 0 0 1 1 1v6a1 1 0 0 1-1.7.7l-6-6a1 1 0 0 1 .7-1.7z" />
    </IconBase>
  ))
);

TrendUpFillDuotone.displayName = 'TrendUpFillDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpFillDuotone, TrendUpFillDuotone as TrendUpFillDuotoneIcon, TrendUpFillDuotone as SiTrendUpFillDuotone };
export type { TrendUpFillDuotoneProps };
