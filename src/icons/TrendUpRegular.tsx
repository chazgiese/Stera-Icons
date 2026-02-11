import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpRegularProps = Omit<IconBaseProps, 'children'>;

const TrendUpRegular = memo(
  forwardRef<SVGSVGElement, TrendUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up" {...props}>
      <path d="M1.97 18.78c.29.3.76.3 1.06 0l6.7-6.62 2.65 2.6c.29.3.76.3 1.05 0l7.32-7.22v3.21a.75.75 0 0 0 1.5 0v-5l-.01-.13v-.01l-.02-.07-.03-.07q0-.05-.04-.08 0-.03-.03-.05v-.02a1 1 0 0 0-.2-.19l-.13-.07-.05-.02A1 1 0 0 0 21.5 5h-5a.75.75 0 0 0 0 1.5h3.17l-6.77 6.68-2.64-2.6a.75.75 0 0 0-1.05 0l-7.24 7.14c-.3.29-.3.76 0 1.06" />
    </IconBase>
  ))
);

TrendUpRegular.displayName = 'TrendUpRegular';

// Triple export pattern (lucide-react style)
export { TrendUpRegular, TrendUpRegular as TrendUpRegularIcon, TrendUpRegular as SiTrendUpRegular };
export default TrendUpRegular;
export type { TrendUpRegularProps };
