import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 5a8.5 8.5 0 1 1-8.5 8.5 1 1 0 1 1 2 0A6.5 6.5 0 1 0 12 7H9.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M9.8 1.8a1 1 0 1 1 1.4 1.4L8.42 6l2.8 2.8a1 1 0 0 1-1.42 1.4L6.3 6.7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftBoldDuotone.displayName = 'RotateLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateLeftBoldDuotone, RotateLeftBoldDuotone as RotateLeftBoldDuotoneIcon, RotateLeftBoldDuotone as SiRotateLeftBoldDuotone };
export default RotateLeftBoldDuotone;
export type { RotateLeftBoldDuotoneProps };
