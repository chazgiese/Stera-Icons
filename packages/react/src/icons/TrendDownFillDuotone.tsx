import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrendDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M.8 4.3a1 1 0 0 1 1.4 0l7.3 7.29 2.8-2.8a1 1 0 0 1 1.4 0l5.8 5.8L18.09 16 13 10.91l-2.8 2.8a1 1 0 0 1-1.33.06l-.08-.06-8-8a1 1 0 0 1 0-1.42" opacity={.4} />
        <path fill="currentColor" d="M21.8 12.3a1 1 0 0 1 1.7.7v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

TrendDownFillDuotone.displayName = 'TrendDownFillDuotone';

export { TrendDownFillDuotone };
export type { TrendDownFillDuotoneProps };
