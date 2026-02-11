import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-duotone" {...props}>
      <path d="M12.75 6.81V19a.75.75 0 0 1-1.5 0V6.81l.75-.75z" opacity={.4} />
        <path d="M11.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 1 1-1.06 1.06L12 6.06l-6.47 6.47a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

ArrowUpRegularDuotone.displayName = 'ArrowUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRegularDuotone, ArrowUpRegularDuotone as ArrowUpRegularDuotoneIcon, ArrowUpRegularDuotone as SiArrowUpRegularDuotone };
export default ArrowUpRegularDuotone;
export type { ArrowUpRegularDuotoneProps };
