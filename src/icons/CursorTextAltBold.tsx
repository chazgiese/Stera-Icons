import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextAltBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltBold = memo(
  forwardRef<SVGSVGElement, CursorTextAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-bold" {...props}>
      <path fill="currentColor" d="M8 1a5 5 0 0 1 4 2 5 5 0 0 1 4-2h1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v5h2a1 1 0 1 1 0 2h-2v5a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2 5 5 0 0 1-4 2H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3v-5H9a1 1 0 1 1 0-2h2V6a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CursorTextAltBold.displayName = 'CursorTextAltBold';

// Triple export pattern (lucide-react style)
export { CursorTextAltBold, CursorTextAltBold as CursorTextAltBoldIcon, CursorTextAltBold as SiCursorTextAltBold };
export default CursorTextAltBold;
export type { CursorTextAltBoldProps };
