import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillProps = Omit<IconBaseProps, 'children'>;

const TrendUpFill = memo(
  forwardRef<SVGSVGElement, TrendUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-fill" {...props}>
      <path d="M1.79 18.95a1 1 0 0 0 1.41.01l6.54-6.45 2.46 2.43a1 1 0 0 0 1.4 0l5.38-5.3 1.81 1.82a1 1 0 0 0 1.71-.71v-5a1 1 0 0 0-.04-.29l-.02-.04q0-.02-.02-.05l-.06-.12q0-.03-.03-.05l-.02-.03a1 1 0 0 0-.23-.24l-.2-.1-.02-.01a1 1 0 0 0-.36-.07h-5a1 1 0 0 0-.7 1.7l1.76 1.78-4.66 4.6-2.46-2.43a1 1 0 0 0-1.33-.07l-.07.07-7.24 7.14a1 1 0 0 0-.01 1.41" />
    </IconBase>
  ))
);

TrendUpFill.displayName = 'TrendUpFill';

// Triple export pattern (lucide-react style)
export { TrendUpFill, TrendUpFill as TrendUpFillIcon, TrendUpFill as SiTrendUpFill };
export default TrendUpFill;
export type { TrendUpFillProps };
