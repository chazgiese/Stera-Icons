import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-fill-duotone" {...props}>
      <path d="M13.5 17.5A2.5 2.5 0 0 0 16 20h1a1.5 1.5 0 0 1 0 3h-1c-1.58 0-3-.66-4-1.73a5.5 5.5 0 0 0 1.5-3.77M13.5 10.5H15a1.5 1.5 0 0 1 0 3h-1.5zM10.5 13.5H9a1.5 1.5 0 0 1 0-3h1.5zM8 1c1.58 0 3 .66 4 1.73a5.5 5.5 0 0 0-1.5 3.77A2.5 2.5 0 0 0 8 4H7a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M17 1a1.5 1.5 0 0 1 0 3h-1a2.5 2.5 0 0 0-2.5 2.5v11A5.5 5.5 0 0 1 8 23H7a1.5 1.5 0 0 1 0-3h1a2.5 2.5 0 0 0 2.5-2.5v-11A5.5 5.5 0 0 1 16 1z" />
    </IconBase>
  ))
);

CursorTextAltFillDuotone.displayName = 'CursorTextAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextAltFillDuotone, CursorTextAltFillDuotone as CursorTextAltFillDuotoneIcon, CursorTextAltFillDuotone as SiCursorTextAltFillDuotone };
export default CursorTextAltFillDuotone;
export type { CursorTextAltFillDuotoneProps };
