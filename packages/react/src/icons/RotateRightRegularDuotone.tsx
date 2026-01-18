import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m15.19 4.25.75.75-.75.75H12A7.25 7.25 0 1 0 19.25 13a.75.75 0 0 1 1.5 0A8.75 8.75 0 1 1 12 4.25z" opacity={.4} />
        <path fill="currentColor" d="M12.47.47c.3-.3.77-.3 1.06 0l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L15.94 5l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RotateRightRegularDuotone.displayName = 'RotateRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotateRightRegularDuotone, RotateRightRegularDuotone as RotateRightRegularDuotoneIcon, RotateRightRegularDuotone as SiRotateRightRegularDuotone };
export type { RotateRightRegularDuotoneProps };
