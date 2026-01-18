import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrashBoldProps = Omit<IconBaseProps, 'children'>;

const TrashBold = memo(
  forwardRef<SVGSVGElement, TrashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.25 10a1 1 0 0 1 1.06.94l.38 6a1 1 0 0 1-2 .12l-.38-6A1 1 0 0 1 9.25 10M14.75 10a1 1 0 0 1 .94 1.06l-.38 6a1 1 0 0 1-2-.12l.38-6a1 1 0 0 1 1.06-.94" />
        <path fill="currentColor" fillRule="evenodd" d="M13.44 1a3 3 0 0 1 2.9 2.27L16.79 5H22a1 1 0 1 1 0 2h-1.06l-.57 9.06q-.07 1.55-.21 2.56c-.1.69-.25 1.29-.57 1.84a5 5 0 0 1-2.16 2.04 5 5 0 0 1-1.88.45Q14.54 23 13 23H11q-1.55.01-2.56-.05c-.7-.06-1.3-.17-1.88-.45a5 5 0 0 1-2.16-2.04 5 5 0 0 1-.57-1.84q-.14-1.01-.21-2.56L3.06 7H2a1 1 0 0 1 0-2h5.22l.43-1.73A3 3 0 0 1 10.56 1zM5.62 15.94c.07 1.07.12 1.82.2 2.4.08.56.19.89.33 1.14a3 3 0 0 0 1.3 1.22c.25.12.58.2 1.16.25S9.94 21 11 21H13c1.07 0 1.82 0 2.4-.05.58-.04.9-.13 1.16-.25a3 3 0 0 0 1.3-1.22c.14-.25.25-.58.33-1.14.08-.58.13-1.33.2-2.4L18.94 7H5.06zM10.56 3a1 1 0 0 0-.97.76L9.28 5h5.44l-.31-1.24a1 1 0 0 0-.97-.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashBold.displayName = 'TrashBold';

// Triple export pattern (lucide-react style)
export { TrashBold, TrashBold as TrashBoldIcon, TrashBold as SiTrashBold };
export type { TrashBoldProps };
