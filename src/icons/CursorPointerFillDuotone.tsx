import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-fill-duotone" {...props}>
      <path fill="currentColor" d="M10 3a1 1 0 0 1 1 1v7a1 1 0 0 0 2 0V9a1 1 0 0 1 2 0v2.5a1 1 0 0 0 2 0V10a1 1 0 0 1 2 0v4a7 7 0 0 1-13.93 1.06l-.03-.1-1.22-3.12-.07-.13-.04-.1a1 1 0 0 1 1.77-.9h.01l1.65 2.8A1 1 0 0 0 9 13V4a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10 1a3 3 0 0 1 3 3v2.17a3 3 0 0 1 3.53 1.22Q17.18 7 18 7a3 3 0 0 1 3 3v4a9 9 0 0 1-17.86 1.6l-1.16-2.97A3 3 0 0 1 7 9.38V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v9a1 1 0 0 1-1.86.5l-1.65-2.79a1 1 0 0 0-1.37-.37 1 1 0 0 0-.41 1.28l.04.09.07.13 1.22 3.12.03.1.03.1A7 7 0 0 0 19 14v-4a1 1 0 1 0-2 0v1.5a1 1 0 1 1-2 0V9a1 1 0 1 0-2 0v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerFillDuotone.displayName = 'CursorPointerFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerFillDuotone, CursorPointerFillDuotone as CursorPointerFillDuotoneIcon, CursorPointerFillDuotone as SiCursorPointerFillDuotone };
export default CursorPointerFillDuotone;
export type { CursorPointerFillDuotoneProps };
