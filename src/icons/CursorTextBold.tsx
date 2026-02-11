import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextBold = memo(
  forwardRef<SVGSVGElement, CursorTextBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-bold" {...props}>
      <path d="M9 2.5c1.2 0 2.27.52 3 1.36a4 4 0 0 1 3-1.36h1a1 1 0 1 1 0 2h-1a2 2 0 0 0-2 2v11c0 1.1.9 2 2 2h1a1 1 0 1 1 0 2h-1c-1.2 0-2.27-.53-3-1.36a4 4 0 0 1-3 1.36H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CursorTextBold.displayName = 'CursorTextBold';

// Triple export pattern (lucide-react style)
export { CursorTextBold, CursorTextBold as CursorTextBoldIcon, CursorTextBold as SiCursorTextBold };
export default CursorTextBold;
export type { CursorTextBoldProps };
