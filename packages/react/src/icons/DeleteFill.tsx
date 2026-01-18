import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeleteFillProps = Omit<IconBaseProps, 'children'>;

const DeleteFill = memo(
  forwardRef<SVGSVGElement, DeleteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9.22a5 5 0 0 1-4.24-2.35L1.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 9.22 3zm-1.3 5.3a1 1 0 0 0-1.4 0L13 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42L11.58 12l-2.3 2.3a1 1 0 1 0 1.42 1.4L13 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L14.42 12l2.3-2.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteFill.displayName = 'DeleteFill';

// Triple export pattern (lucide-react style)
export { DeleteFill, DeleteFill as DeleteFillIcon, DeleteFill as SiDeleteFill };
export type { DeleteFillProps };
