import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-fill-duotone" {...props}>
      <path d="M1.79 18.95a1 1 0 0 0 1.41.01l6.54-6.45 2.46 2.43a1 1 0 0 0 1.4 0l5.38-5.3-1.42-1.41-4.66 4.6-2.46-2.43a1 1 0 0 0-1.33-.07l-.07.07-7.24 7.14a1 1 0 0 0-.01 1.41" opacity={.4} />
        <path d="M20.8 11.46a1 1 0 0 0 1.7-.71v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-.7 1.7z" />
    </IconBase>
  ))
);

TrendUpFillDuotone.displayName = 'TrendUpFillDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpFillDuotone, TrendUpFillDuotone as TrendUpFillDuotoneIcon, TrendUpFillDuotone as SiTrendUpFillDuotone };
export default TrendUpFillDuotone;
export type { TrendUpFillDuotoneProps };
