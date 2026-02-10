import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeleteBoldDuotone = memo(
  forwardRef<SVGSVGElement, DeleteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zM9.06 6a3 3 0 0 0-2.44 1.26l-2.98 4.16a1 1 0 0 0 0 1.16l2.98 4.16A3 3 0 0 0 9.06 18H17a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.8 8.8a1 1 0 1 1 1.4 1.4L14.42 12l1.8 1.8a1 1 0 0 1-1.42 1.4L13 13.42l-1.8 1.8a1 1 0 0 1-1.4-1.42L11.58 12l-1.8-1.8a1 1 0 1 1 1.42-1.4L13 10.58z" />
    </IconBase>
  ))
);

DeleteBoldDuotone.displayName = 'DeleteBoldDuotone';

// Triple export pattern (lucide-react style)
export { DeleteBoldDuotone, DeleteBoldDuotone as DeleteBoldDuotoneIcon, DeleteBoldDuotone as SiDeleteBoldDuotone };
export default DeleteBoldDuotone;
export type { DeleteBoldDuotoneProps };
