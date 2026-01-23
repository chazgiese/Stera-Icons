import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetRegularDuotone = memo(
  forwardRef<SVGSVGElement, TargetRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-duotone" {...props}>
      <path d="M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetRegularDuotone.displayName = 'TargetRegularDuotone';

// Triple export pattern (lucide-react style)
export { TargetRegularDuotone, TargetRegularDuotone as TargetRegularDuotoneIcon, TargetRegularDuotone as SiTargetRegularDuotone };
export default TargetRegularDuotone;
export type { TargetRegularDuotoneProps };
