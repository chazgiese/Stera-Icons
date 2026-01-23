import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusFillProps = Omit<IconBaseProps, 'children'>;

const PlusFill = memo(
  forwardRef<SVGSVGElement, PlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-fill" {...props}>
      <path fill="currentColor" d="M12 2.5c.83 0 1.5.67 1.5 1.5v6.5H20a1.5 1.5 0 0 1 0 3h-6.5V20a1.5 1.5 0 0 1-3 0v-6.5H4a1.5 1.5 0 0 1 0-3h6.5V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PlusFill.displayName = 'PlusFill';

// Triple export pattern (lucide-react style)
export { PlusFill, PlusFill as PlusFillIcon, PlusFill as SiPlusFill };
export default PlusFill;
export type { PlusFillProps };
