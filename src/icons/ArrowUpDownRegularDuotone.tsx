import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-down-duotone" {...props}>
      <path fill="currentColor" d="M12.75 3.81V20.2l-.75.75-.75-.75V3.81l.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M15.97 16.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5c-.3.3-.77.3-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06L12 20.94zM12 1.25q.31 0 .53.22l4.5 4.5a.75.75 0 1 1-1.06 1.06L12 3.06 8.03 7.03a.75.75 0 1 1-1.06-1.06l4.5-4.5.11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

ArrowUpDownRegularDuotone.displayName = 'ArrowUpDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpDownRegularDuotone, ArrowUpDownRegularDuotone as ArrowUpDownRegularDuotoneIcon, ArrowUpDownRegularDuotone as SiArrowUpDownRegularDuotone };
export default ArrowUpDownRegularDuotone;
export type { ArrowUpDownRegularDuotoneProps };
