import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeleteFillDuotone = memo(
  forwardRef<SVGSVGElement, DeleteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zm-.8 4.8a1 1 0 0 0-1.4 0L13 10.58l-1.8-1.8a1 1 0 0 0-1.4 1.42L11.58 12l-1.8 1.8a1 1 0 0 0 1.42 1.4L13 13.42l1.8 1.8a1 1 0 1 0 1.4-1.42L14.42 12l1.8-1.8a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path d="M14.8 8.8a1 1 0 1 1 1.4 1.4L14.42 12l1.8 1.8a1 1 0 0 1-1.42 1.4L13 13.42l-1.8 1.8a1 1 0 0 1-1.4-1.42L11.58 12l-1.8-1.8a1 1 0 1 1 1.42-1.4L13 10.58z" />
    </IconBase>
  ))
);

DeleteFillDuotone.displayName = 'DeleteFillDuotone';

// Triple export pattern (lucide-react style)
export { DeleteFillDuotone, DeleteFillDuotone as DeleteFillDuotoneIcon, DeleteFillDuotone as SiDeleteFillDuotone };
export default DeleteFillDuotone;
export type { DeleteFillDuotoneProps };
