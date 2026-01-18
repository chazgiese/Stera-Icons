import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreCircleVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </IconBase>
  ))
);

MoreCircleVRegularDuotone.displayName = 'MoreCircleVRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoreCircleVRegularDuotone, MoreCircleVRegularDuotone as MoreCircleVRegularDuotoneIcon, MoreCircleVRegularDuotone as SiMoreCircleVRegularDuotone };
export type { MoreCircleVRegularDuotoneProps };
