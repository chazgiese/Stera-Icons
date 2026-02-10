import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-left-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.8 6.3a1 1 0 0 1 1.4 1.4l-.79.8h1.84A4.75 4.75 0 1 1 8.37 16 1 1 0 0 1 10 14.83a2.75 2.75 0 1 0 2.25-4.34h-1.84l.8.8a1 1 0 0 1-1.42 1.4l-2.43-2.42a1.1 1.1 0 0 1 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleLeftBoldDuotone.displayName = 'RotateCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { RotateCircleLeftBoldDuotone, RotateCircleLeftBoldDuotone as RotateCircleLeftBoldDuotoneIcon, RotateCircleLeftBoldDuotone as SiRotateCircleLeftBoldDuotone };
export default RotateCircleLeftBoldDuotone;
export type { RotateCircleLeftBoldDuotoneProps };
