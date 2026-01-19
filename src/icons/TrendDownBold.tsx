import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownBoldProps = Omit<IconBaseProps, 'children'>;

const TrendDownBold = memo(
  forwardRef<SVGSVGElement, TrendDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-bold" {...props}>
      <path fill="currentColor" d="M.8 4.3a1 1 0 0 1 1.4 0l7.3 7.29 2.8-2.8a1 1 0 0 1 1.4 0l7.8 7.8V13a1 1 0 0 1 2 0v6l-.03.24-.01.05-.02.04a1 1 0 0 1-.53.58l-.03.01-.05.02-.04.02h-.05l-.05.02h-.02l-.17.02h-6a1 1 0 0 1 0-2h3.59L13 10.91l-2.8 2.8a1 1 0 0 1-1.33.06l-.08-.06-8-8a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

TrendDownBold.displayName = 'TrendDownBold';

// Triple export pattern (lucide-react style)
export { TrendDownBold, TrendDownBold as TrendDownBoldIcon, TrendDownBold as SiTrendDownBold };
export type { TrendDownBoldProps };
