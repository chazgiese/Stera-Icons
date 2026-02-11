import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-duotone" {...props}>
      <path d="M12.75 17.5c0 1.24 1 2.25 2.25 2.25h1a.75.75 0 0 1 0 1.5h-1a3.7 3.7 0 0 1-3-1.5c.47-.63.75-1.4.75-2.25M12.75 11.25h1.75a.75.75 0 0 1 0 1.5h-1.75zM11.25 12.75H9.5a.75.75 0 0 1 0-1.5h1.75zM9 2.75c1.23 0 2.32.59 3 1.5-.47.63-.75 1.4-.75 2.25 0-1.24-1-2.25-2.25-2.25H8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M16 2.75a.75.75 0 0 1 0 1.5h-1c-1.24 0-2.25 1-2.25 2.25v11A3.75 3.75 0 0 1 9 21.25H8a.75.75 0 0 1 0-1.5h1c1.24 0 2.25-1 2.25-2.25v-11A3.75 3.75 0 0 1 15 2.75z" />
    </IconBase>
  ))
);

CursorTextAltRegularDuotone.displayName = 'CursorTextAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextAltRegularDuotone, CursorTextAltRegularDuotone as CursorTextAltRegularDuotoneIcon, CursorTextAltRegularDuotone as SiCursorTextAltRegularDuotone };
export default CursorTextAltRegularDuotone;
export type { CursorTextAltRegularDuotoneProps };
