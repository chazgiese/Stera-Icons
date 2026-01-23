import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-left-duotone" {...props}>
      <path fill="currentColor" d="M17.47 5.47a.75.75 0 1 1 1.06 1.06L7.81 17.25H6.75v-1.06z" opacity={.4} />
        <path fill="currentColor" d="M6 7.25c.41 0 .75.34.75.75v9.25H16a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownLeftRegularDuotone.displayName = 'ArrowDownLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftRegularDuotone, ArrowDownLeftRegularDuotone as ArrowDownLeftRegularDuotoneIcon, ArrowDownLeftRegularDuotone as SiArrowDownLeftRegularDuotone };
export default ArrowDownLeftRegularDuotone;
export type { ArrowDownLeftRegularDuotoneProps };
