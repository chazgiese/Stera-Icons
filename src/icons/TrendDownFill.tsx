import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownFillProps = Omit<IconBaseProps, 'children'>;

const TrendDownFill = memo(
  forwardRef<SVGSVGElement, TrendDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-fill" {...props}>
      <path fill="currentColor" d="M.8 4.3a1 1 0 0 1 1.4 0l7.3 7.29 2.8-2.8a1 1 0 0 1 1.4 0l5.8 5.8 2.3-2.3a1 1 0 0 1 1.7.71v6l-.03.24-.01.05a1 1 0 0 1-.53.61l-.14.06h-.05l-.05.02h-.02l-.17.02h-6a1 1 0 0 1-.7-1.7l2.29-2.3L13 10.91l-2.8 2.8a1 1 0 0 1-1.33.06l-.08-.06-8-8a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

TrendDownFill.displayName = 'TrendDownFill';

// Triple export pattern (lucide-react style)
export { TrendDownFill, TrendDownFill as TrendDownFillIcon, TrendDownFill as SiTrendDownFill };
export type { TrendDownFillProps };
