import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistUncheckedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChecklistUncheckedFillDuotone.displayName = 'ChecklistUncheckedFillDuotone';

export { ChecklistUncheckedFillDuotone };
export type { ChecklistUncheckedFillDuotoneProps };
