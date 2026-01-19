import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorPointerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-duotone" {...props}>
      <path fill="currentColor" d="M10 1.25A2.75 2.75 0 0 1 12.75 4v2.55a2.74 2.74 0 0 1 3.69 1.19q.68-.48 1.56-.49A2.75 2.75 0 0 1 20.75 10v4a.75.75 0 0 1-1.5 0v-4a1.25 1.25 0 0 0-2.5 0v1.5a.75.75 0 0 1-1.5 0V9a1.25 1.25 0 0 0-2.5 0v2a.75.75 0 0 1-1.5 0V4a1.25 1.25 0 0 0-2.5 0v9a.75.75 0 0 1-1.4.38l-1.64-2.8a1.25 1.25 0 0 0-2.23 1.14l.06.11.05.1 1.22 3.12a.75.75 0 0 1-1.4.55l-1.2-3.1A2.75 2.75 0 0 1 7 9.84l.25.42V4A2.75 2.75 0 0 1 10 1.25" />
        <path fill="currentColor" d="M20.75 14a8.75 8.75 0 0 1-17.37 1.52l.03.08a.75.75 0 1 0 1.44-.4 7.25 7.25 0 0 0 14.4-.83V14a.75.75 0 0 0 1.5.08z" opacity={.4} />
    </IconBase>
  ))
);

CursorPointerRegularDuotone.displayName = 'CursorPointerRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerRegularDuotone, CursorPointerRegularDuotone as CursorPointerRegularDuotoneIcon, CursorPointerRegularDuotone as SiCursorPointerRegularDuotone };
export type { CursorPointerRegularDuotoneProps };
