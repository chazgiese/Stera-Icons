import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-bold-duotone" {...props}>
      <path d="M1.79 5.05a1 1 0 0 1 1.41-.01l6.54 6.45 2.46-2.43a1 1 0 0 1 1.4 0l6.9 6.8v1.39h-1.44l-6.16-6.08-2.46 2.43a1 1 0 0 1-1.33.07l-.07-.07L1.8 6.46a1 1 0 0 1-.01-1.41" opacity={.4} />
        <path d="M21.5 12.25a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TrendDownBoldDuotone.displayName = 'TrendDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { TrendDownBoldDuotone, TrendDownBoldDuotone as TrendDownBoldDuotoneIcon, TrendDownBoldDuotone as SiTrendDownBoldDuotone };
export default TrendDownBoldDuotone;
export type { TrendDownBoldDuotoneProps };
