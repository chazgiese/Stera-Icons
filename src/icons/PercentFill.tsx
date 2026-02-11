import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillProps = Omit<IconBaseProps, 'children'>;

const PercentFill = memo(
  forwardRef<SVGSVGElement, PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-fill" {...props}>
      <path d="M19.3 3.3a1 1 0 1 1 1.4 1.4l-16 16a1 1 0 1 1-1.4-1.4zM17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

PercentFill.displayName = 'PercentFill';

// Triple export pattern (lucide-react style)
export { PercentFill, PercentFill as PercentFillIcon, PercentFill as SiPercentFill };
export default PercentFill;
export type { PercentFillProps };
