import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-fill-duotone" {...props}>
      <path d="M13.5 17.5c0 .83.67 1.5 1.5 1.5h1a1.5 1.5 0 0 1 0 3h-1c-1.15 0-2.2-.43-3-1.15a4.5 4.5 0 0 0 1.5-3.35M9 2c1.15 0 2.2.43 3 1.15a4.5 4.5 0 0 0-1.5 3.35C10.5 5.67 9.83 5 9 5H8a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path d="M16 2a1.5 1.5 0 0 1 0 3h-1c-.83 0-1.5.67-1.5 1.5v11A4.5 4.5 0 0 1 9 22H8a1.5 1.5 0 0 1 0-3h1c.83 0 1.5-.67 1.5-1.5v-11A4.5 4.5 0 0 1 15 2z" />
    </IconBase>
  ))
);

CursorTextFillDuotone.displayName = 'CursorTextFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextFillDuotone, CursorTextFillDuotone as CursorTextFillDuotoneIcon, CursorTextFillDuotone as SiCursorTextFillDuotone };
export default CursorTextFillDuotone;
export type { CursorTextFillDuotoneProps };
