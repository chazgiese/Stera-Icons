import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusFillProps = Omit<IconBaseProps, 'children'>;

const PlusFill = memo(
  forwardRef<SVGSVGElement, PlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.5c.83 0 1.5.67 1.5 1.5v6.5H20a1.5 1.5 0 0 1 0 3h-6.5V20a1.5 1.5 0 0 1-3 0v-6.5H4a1.5 1.5 0 0 1 0-3h6.5V4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PlusFill.displayName = 'PlusFill';

export { PlusFill };
export type { PlusFillProps };
