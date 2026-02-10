import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltBold = memo(
  forwardRef<SVGSVGElement, CursorTextAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-bold" {...props}>
      <path fill="currentColor" d="M9 2.5c1.2 0 2.27.52 3 1.36a4 4 0 0 1 3-1.36h1a1 1 0 1 1 0 2h-1a2 2 0 0 0-2 2V11h1.5a1 1 0 1 1 0 2H13v4.5c0 1.1.9 2 2 2h1a1 1 0 1 1 0 2h-1c-1.2 0-2.27-.53-3-1.36a4 4 0 0 1-3 1.36H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2V13H9.5a1 1 0 1 1 0-2H11V6.5a2 2 0 0 0-2-2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CursorTextAltBold.displayName = 'CursorTextAltBold';

// Triple export pattern (lucide-react style)
export { CursorTextAltBold, CursorTextAltBold as CursorTextAltBoldIcon, CursorTextAltBold as SiCursorTextAltBold };
export default CursorTextAltBold;
export type { CursorTextAltBoldProps };
