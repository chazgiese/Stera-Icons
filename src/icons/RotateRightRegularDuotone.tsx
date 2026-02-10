import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-duotone" {...props}>
      <path fill="currentColor" d="m15.19 5.25.75.75-.75.75H12a6.75 6.75 0 1 0 6.75 6.75.75.75 0 0 1 1.5 0A8.25 8.25 0 1 1 12 5.25z" opacity={.4} />
        <path fill="currentColor" d="M12.97 1.97c.3-.3.77-.3 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L15.94 6l-2.97-2.97a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotateRightRegularDuotone.displayName = 'RotateRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightRegularDuotone, RotateRightRegularDuotone as RotateRightRegularDuotoneIcon, RotateRightRegularDuotone as SiRotateRightRegularDuotone };
export default RotateRightRegularDuotone;
export type { RotateRightRegularDuotoneProps };
