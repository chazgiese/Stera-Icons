import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M21.5 6v1.41l-7.8 7.8a1 1 0 0 1-1.4 0l-2.8-2.8-7.3 7.3a1 1 0 0 1-1.4-1.42l8-8 .07-.06a1 1 0 0 1 1.34.06L13 13.1 20.09 6z" opacity={.4} />
        <path fill="currentColor" d="M22.5 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6h-5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

TrendUpBoldDuotone.displayName = 'TrendUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpBoldDuotone, TrendUpBoldDuotone as TrendUpBoldDuotoneIcon, TrendUpBoldDuotone as SiTrendUpBoldDuotone };
export default TrendUpBoldDuotone;
export type { TrendUpBoldDuotoneProps };
