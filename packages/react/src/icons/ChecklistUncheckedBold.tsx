import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistUncheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fill="currentColor" d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fill="currentColor" d="M22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistUncheckedBold.displayName = 'ChecklistUncheckedBold';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedBold, ChecklistUncheckedBold as ChecklistUncheckedBoldIcon, ChecklistUncheckedBold as SiChecklistUncheckedBold };
export type { ChecklistUncheckedBoldProps };
