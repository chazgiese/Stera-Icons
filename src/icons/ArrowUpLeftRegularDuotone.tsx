import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-duotone" {...props}>
      <path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L6.75 7.81V6.75h1.06z" opacity={.4} />
        <path fill="currentColor" d="M16 5.25a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftRegularDuotone.displayName = 'ArrowUpLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftRegularDuotone, ArrowUpLeftRegularDuotone as ArrowUpLeftRegularDuotoneIcon, ArrowUpLeftRegularDuotone as SiArrowUpLeftRegularDuotone };
export default ArrowUpLeftRegularDuotone;
export type { ArrowUpLeftRegularDuotoneProps };
