import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right-duotone" {...props}>
      <path d="M17.13 5.81c.29-.29.76-.29 1.06 0A8.75 8.75 0 0 1 12 20.75h-1.19l-.75-.75.75-.75H12a7.25 7.25 0 0 0 5.13-12.38.75.75 0 0 1 0-1.06M13.94 4l-.75.75H12a7.25 7.25 0 0 0-5.13 12.38.75.75 0 1 1-1.06 1.06A8.75 8.75 0 0 1 12 3.25h1.19z" opacity={0.4} />
        <path fill="currentColor" d="M11.47 16.47a.75.75 0 1 1 1.06 1.06L10.06 20l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zM11.47.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 4l-2.47-2.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotationRightRegularDuotone.displayName = 'RotationRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightRegularDuotone, RotationRightRegularDuotone as RotationRightRegularDuotoneIcon, RotationRightRegularDuotone as SiRotationRightRegularDuotone };
export type { RotationRightRegularDuotoneProps };
