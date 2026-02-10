import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorClickFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorClickFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-click-fill-duotone" {...props}>
      <path d="M4.94 12.62a1 1 0 0 1 1.42 1.41L5 15.4a1 1 0 0 1-1.41-1.41zM2.03 7.5a1 1 0 0 1 1.23-.72l1.85.5a1 1 0 0 1-.52 1.93l-1.85-.5a1 1 0 0 1-.7-1.22M13.97 3.59A1 1 0 0 1 15.4 5l-1.36 1.36a1 1 0 0 1-1.41-1.42zM7.49 2.03a1 1 0 0 1 1.22.71l.5 1.85a1 1 0 0 1-1.93.52l-.5-1.85a1 1 0 0 1 .71-1.23" opacity={0.4} />
        <path fill="currentColor" d="M8.58 10.77a1.73 1.73 0 0 1 2.06-2.23l.13.04 10.05 3.35a1.73 1.73 0 0 1-.06 3.3l-4.27 1.26-1.26 4.27a1.73 1.73 0 0 1-3.3.06z" />
    </IconBase>
  ))
);

CursorClickFillDuotone.displayName = 'CursorClickFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorClickFillDuotone, CursorClickFillDuotone as CursorClickFillDuotoneIcon, CursorClickFillDuotone as SiCursorClickFillDuotone };
export default CursorClickFillDuotone;
export type { CursorClickFillDuotoneProps };
