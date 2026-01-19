import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-fill-duotone" {...props}>
      <path fill="currentColor" d="M5.19 4.26 20.9 9.5q.07.02.08.05l.02.09q0 .06-.03.08 0 .02-.07.05l-7.5 2.2a1 1 0 0 0-.63.56l-.05.12-2.2 7.5-.05.08-.09.02-.08-.02q-.03 0-.05-.08L5 4.45v-.09l.03-.07.07-.04z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M3.11 5.07a2.14 2.14 0 0 1 2.71-2.7L21.53 7.6c2 .66 1.94 3.5-.07 4.09l-6.97 2.05-2.05 6.97a2.14 2.14 0 0 1-4.1.08zm2-.81-.07.04-.04.06v.08l5.25 15.71q.02.08.05.08l.08.02.1-.02.04-.08 2.2-7.5.05-.12a1 1 0 0 1 .63-.55l7.5-2.2q.07-.03.07-.06l.03-.08-.02-.1q-.01-.01-.08-.04L5.2 4.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorFillDuotone.displayName = 'CursorFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorFillDuotone, CursorFillDuotone as CursorFillDuotoneIcon, CursorFillDuotone as SiCursorFillDuotone };
export type { CursorFillDuotoneProps };
