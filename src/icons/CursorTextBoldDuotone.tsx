import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-bold-duotone" {...props}>
      <path d="M13 18a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2c.63-.84 1-1.87 1-3M8 1a5 5 0 0 1 4 2c-.63.84-1 1.87-1 3a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M17 1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a5 5 0 0 1-5 5H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a5 5 0 0 1 5-5z" />
    </IconBase>
  ))
);

CursorTextBoldDuotone.displayName = 'CursorTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextBoldDuotone, CursorTextBoldDuotone as CursorTextBoldDuotoneIcon, CursorTextBoldDuotone as SiCursorTextBoldDuotone };
export default CursorTextBoldDuotone;
export type { CursorTextBoldDuotoneProps };
