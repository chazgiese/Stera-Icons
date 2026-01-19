import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-bold-duotone" {...props}>
      <path d="M13 18a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2c.63-.84 1-1.87 1-3M13 11h2a1 1 0 1 1 0 2h-2zM11 13H9a1 1 0 1 1 0-2h2zM8 1a5 5 0 0 1 4 2c-.63.84-1 1.87-1 3a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M17 1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a5 5 0 0 1-5 5H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a5 5 0 0 1 5-5z" />
    </IconBase>
  ))
);

CursorTextAltBoldDuotone.displayName = 'CursorTextAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextAltBoldDuotone, CursorTextAltBoldDuotone as CursorTextAltBoldDuotoneIcon, CursorTextAltBoldDuotone as SiCursorTextAltBoldDuotone };
export type { CursorTextAltBoldDuotoneProps };
