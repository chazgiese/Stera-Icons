import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillProps = Omit<IconBaseProps, 'children'>;

const TrendDownFill = memo(
  forwardRef<SVGSVGElement, TrendDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-fill" {...props}>
      <path fill="currentColor" d="M1.79 5.05a1 1 0 0 1 1.41-.01l6.54 6.45 2.46-2.43a1 1 0 0 1 1.4 0l5.38 5.3 1.81-1.82a1 1 0 0 1 1.71.71v5a1 1 0 0 1-.04.29l-.02.04q0 .03-.02.05l-.06.12q0 .03-.03.05l-.02.03a1 1 0 0 1-.23.24l-.2.1-.02.01a1 1 0 0 1-.36.07h-5a1 1 0 0 1-.7-1.7l1.76-1.78-4.66-4.6-2.46 2.43a1 1 0 0 1-1.33.07l-.07-.07L1.8 6.46a1 1 0 0 1-.01-1.41" />
    </IconBase>
  ))
);

TrendDownFill.displayName = 'TrendDownFill';

// Triple export pattern (lucide-react style)
export { TrendDownFill, TrendDownFill as TrendDownFillIcon, TrendDownFill as SiTrendDownFill };
export default TrendDownFill;
export type { TrendDownFillProps };
