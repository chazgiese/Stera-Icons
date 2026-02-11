import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-duotone" {...props}>
      <path d="M12 5.25a8.25 8.25 0 1 1-8.25 8.25.75.75 0 0 1 1.5 0A6.75 6.75 0 1 0 12 6.75H8.81L8.06 6l.75-.75z" opacity={.4} />
        <path d="M9.97 1.97a.75.75 0 1 1 1.06 1.06L8.06 6l2.97 2.97a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotateLeftRegularDuotone.displayName = 'RotateLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateLeftRegularDuotone, RotateLeftRegularDuotone as RotateLeftRegularDuotoneIcon, RotateLeftRegularDuotone as SiRotateLeftRegularDuotone };
export default RotateLeftRegularDuotone;
export type { RotateLeftRegularDuotoneProps };
