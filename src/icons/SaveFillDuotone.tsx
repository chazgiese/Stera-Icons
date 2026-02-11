import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SaveFillDuotone = memo(
  forwardRef<SVGSVGElement, SaveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="save-fill-duotone" {...props}>
      <path d="M13 5q1.71-.01 2.84.06c.8.07 1.51.21 2.16.54A5.5 5.5 0 0 1 20.4 8c.33.65.47 1.35.54 2.16q.07 1.19.06 3.04v.6q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54q-1.19.07-3.04.06h-1.6q-1.85.02-3.04-.06A6 6 0 0 1 6 21.4 5.5 5.5 0 0 1 3.6 19a6 6 0 0 1-.54-2.16Q2.98 15.65 3 13.8v-.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16A5.5 5.5 0 0 1 6 5.6a6 6 0 0 1 2.16-.54Q9.3 5 11 5v7.59l-2.3-2.3a1 1 0 1 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l4-4a1 1 0 1 0-1.4-1.42L13 12.6z" opacity={.4} />
        <path d="M12 1.5a1 1 0 0 1 1 1v10.09l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V2.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SaveFillDuotone.displayName = 'SaveFillDuotone';

// Triple export pattern (lucide-react style)
export { SaveFillDuotone, SaveFillDuotone as SaveFillDuotoneIcon, SaveFillDuotone as SiSaveFillDuotone };
export default SaveFillDuotone;
export type { SaveFillDuotoneProps };
