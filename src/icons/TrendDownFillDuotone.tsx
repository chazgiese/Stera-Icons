import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-fill-duotone" {...props}>
      <path fill="currentColor" d="M1.79 5.05a1 1 0 0 1 1.41-.01l6.54 6.45 2.46-2.43a1 1 0 0 1 1.4 0l5.38 5.3-1.42 1.41-4.66-4.6-2.46 2.43a1 1 0 0 1-1.33.07l-.07-.07L1.8 6.46a1 1 0 0 1-.01-1.41" opacity={.4} />
        <path fill="currentColor" d="M20.8 12.54a1 1 0 0 1 1.7.71v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

TrendDownFillDuotone.displayName = 'TrendDownFillDuotone';

// Triple export pattern (lucide-react style)
export { TrendDownFillDuotone, TrendDownFillDuotone as TrendDownFillDuotoneIcon, TrendDownFillDuotone as SiTrendDownFillDuotone };
export default TrendDownFillDuotone;
export type { TrendDownFillDuotoneProps };
