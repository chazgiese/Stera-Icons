import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteBoldProps = Omit<IconBaseProps, 'children'>;

const DeleteBold = memo(
  forwardRef<SVGSVGElement, DeleteBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-bold" {...props}>
      <path fill="currentColor" d="M15.3 8.3a1 1 0 1 1 1.4 1.4L14.42 12l2.3 2.3a1 1 0 1 1-1.42 1.4L13 13.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L11.58 12l-2.3-2.3a1 1 0 1 1 1.42-1.4L13 10.58z" />
        <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9.22a5 5 0 0 1-4.24-2.35L1.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 9.22 3zM9.22 5a3 3 0 0 0-2.55 1.41l-3.16 5.06a1 1 0 0 0 0 1.06l3.16 5.06A3 3 0 0 0 9.22 19H18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteBold.displayName = 'DeleteBold';

// Triple export pattern (lucide-react style)
export { DeleteBold, DeleteBold as DeleteBoldIcon, DeleteBold as SiDeleteBold };
export default DeleteBold;
export type { DeleteBoldProps };
