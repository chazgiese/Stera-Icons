import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 18c0 1.8 1.46 3.25 3.25 3.25h1a.75.75 0 0 1 0 1.5h-1a4.7 4.7 0 0 1-4-2.19c.47-.74.75-1.62.75-2.56M8 1.25c1.68 0 3.16.87 4 2.19A4.7 4.7 0 0 0 11.25 6c0-1.8-1.46-3.25-3.25-3.25H7a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M17 1.25a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 0 12.75 6v12A4.75 4.75 0 0 1 8 22.75H7a.75.75 0 0 1 0-1.5h1c1.8 0 3.25-1.46 3.25-3.25V6A4.75 4.75 0 0 1 16 1.25z" />
    </IconBase>
  ))
);

CursorTextRegularDuotone.displayName = 'CursorTextRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextRegularDuotone, CursorTextRegularDuotone as CursorTextRegularDuotoneIcon, CursorTextRegularDuotone as SiCursorTextRegularDuotone };
export type { CursorTextRegularDuotoneProps };
