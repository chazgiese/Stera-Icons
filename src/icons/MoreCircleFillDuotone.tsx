import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-5 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

MoreCircleFillDuotone.displayName = 'MoreCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleFillDuotone, MoreCircleFillDuotone as MoreCircleFillDuotoneIcon, MoreCircleFillDuotone as SiMoreCircleFillDuotone };
export default MoreCircleFillDuotone;
export type { MoreCircleFillDuotoneProps };
