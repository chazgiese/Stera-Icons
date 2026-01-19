import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-bold-duotone" {...props}>
      <path fill="currentColor" d="M.8 4.3a1 1 0 0 1 1.4 0l7.3 7.29 2.8-2.8a1 1 0 0 1 1.4 0l7.8 7.8V18h-1.41L13 10.91l-2.8 2.8a1 1 0 0 1-1.33.06l-.08-.06-8-8a1 1 0 0 1 0-1.42" opacity={.4} />
        <path fill="currentColor" d="M22.5 12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TrendDownBoldDuotone.displayName = 'TrendDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { TrendDownBoldDuotone, TrendDownBoldDuotone as TrendDownBoldDuotoneIcon, TrendDownBoldDuotone as SiTrendDownBoldDuotone };
export default TrendDownBoldDuotone;
export type { TrendDownBoldDuotoneProps };
