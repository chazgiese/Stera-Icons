import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistUncheckedRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedRegular = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 13.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M22 16.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M22 6.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChecklistUncheckedRegular.displayName = 'ChecklistUncheckedRegular';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedRegular, ChecklistUncheckedRegular as ChecklistUncheckedRegularIcon, ChecklistUncheckedRegular as SiChecklistUncheckedRegular };
export type { ChecklistUncheckedRegularProps };
