import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeleteFillDuotone = memo(
  forwardRef<SVGSVGElement, DeleteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9.22a5 5 0 0 1-4.24-2.35L1.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 9.22 3zm-1.3 5.3a1 1 0 0 0-1.4 0L13 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42L11.58 12l-2.3 2.3a1 1 0 1 0 1.42 1.4L13 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L14.42 12l2.3-2.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.3 8.3a1 1 0 1 1 1.4 1.4L14.42 12l2.3 2.3a1 1 0 0 1-1.42 1.4L13 13.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L11.58 12l-2.3-2.3a1 1 0 1 1 1.42-1.4L13 10.58z" />
    </IconBase>
  ))
);

DeleteFillDuotone.displayName = 'DeleteFillDuotone';

// Triple export pattern (lucide-react style)
export { DeleteFillDuotone, DeleteFillDuotone as DeleteFillDuotoneIcon, DeleteFillDuotone as SiDeleteFillDuotone };
export default DeleteFillDuotone;
export type { DeleteFillDuotoneProps };
