import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.59 1.85a2 2 0 0 1 2.82 0l2.74 2.74a2 2 0 0 1 0 2.82l-3.65 3.65-5.56-5.56zm1.76 1.06a.5.5 0 0 0-.7 0L15.06 5.5l3.44 3.44 2.59-2.59a.5.5 0 0 0 0-.7z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.94 5.5 14 6.56l-9.78 9.78-.38 3.82 3.82-.38L17.44 10l1.06 1.06-9.97 9.97a.8.8 0 0 1-.46.22l-5 .5a.75.75 0 0 1-.82-.83l.5-5 .03-.12q.05-.2.19-.33z" />
    </IconBase>
  ))
);

PencilRegularDuotone.displayName = 'PencilRegularDuotone';

// Triple export pattern (lucide-react style)
export { PencilRegularDuotone, PencilRegularDuotone as PencilRegularDuotoneIcon, PencilRegularDuotone as SiPencilRegularDuotone };
export type { PencilRegularDuotoneProps };
