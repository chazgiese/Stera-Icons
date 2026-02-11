import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-duotone" {...props}>
      <path d="M19.9 13.8a7.95 7.95 0 0 1-15.78 1.4l.02.06a.75.75 0 0 0 1.4-.54v-.01l.04.16a6.45 6.45 0 0 0 12.8-.74l.01-.33a.75.75 0 1 0 1.5 0" opacity={.4} />
        <path d="M10.14 2.25c1.41 0 2.55 1.14 2.55 2.55v2.18a2.54 2.54 0 0 1 3.28 1.07q.61-.39 1.37-.4c1.41 0 2.55 1.14 2.55 2.55v3.6a.75.75 0 0 1-1.5 0v-3.6a1.05 1.05 0 0 0-2.1 0v1.35a.75.75 0 0 1-1.5 0V9.3a1.05 1.05 0 0 0-2.1-.1v1.9a.75.75 0 0 1-1.5 0V4.8a1.05 1.05 0 0 0-2.1 0v8.1a.75.75 0 0 1-1.4.38l-1.48-2.51a1.05 1.05 0 1 0-1.82 1.04l.05.1 1.1 2.8a.75.75 0 1 1-1.4.55l-1.09-2.78A2.55 2.55 0 0 1 7.5 10l.1.15V4.8c0-1.4 1.13-2.55 2.54-2.55" />
    </IconBase>
  ))
);

CursorPointerRegularDuotone.displayName = 'CursorPointerRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerRegularDuotone, CursorPointerRegularDuotone as CursorPointerRegularDuotoneIcon, CursorPointerRegularDuotone as SiCursorPointerRegularDuotone };
export default CursorPointerRegularDuotone;
export type { CursorPointerRegularDuotoneProps };
