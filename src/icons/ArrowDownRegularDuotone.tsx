import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-duotone" {...props}>
      <path fill="currentColor" d="M12 4.25c.41 0 .75.34.75.75v12.19l-.75.75-.75-.75V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M18.47 11.47a.75.75 0 1 1 1.06 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 17.94z" />
    </IconBase>
  ))
);

ArrowDownRegularDuotone.displayName = 'ArrowDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownRegularDuotone, ArrowDownRegularDuotone as ArrowDownRegularDuotoneIcon, ArrowDownRegularDuotone as SiArrowDownRegularDuotone };
export default ArrowDownRegularDuotone;
export type { ArrowDownRegularDuotoneProps };
