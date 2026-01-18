import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.81 5.81a.75.75 0 0 1 1.06 1.06A7.25 7.25 0 0 0 12 19.25h1.19l.75.75-.75.75H12A8.75 8.75 0 0 1 5.81 5.81M12.32 3.26a8.75 8.75 0 0 1 5.87 14.93.75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 0-4.86-12.38H10.8L10.06 4l.75-.75h1.51" />
        <path fill="currentColor" d="M11.47 16.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 20l-2.47-2.47a.75.75 0 0 1 0-1.06M11.47.47a.75.75 0 1 1 1.06 1.06L10.06 4l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotationLeftRegularDuotone.displayName = 'RotationLeftRegularDuotone';

export { RotationLeftRegularDuotone };
export type { RotationLeftRegularDuotoneProps };
