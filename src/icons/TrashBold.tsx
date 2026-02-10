import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashBoldProps = Omit<IconBaseProps, 'children'>;

const TrashBold = memo(
  forwardRef<SVGSVGElement, TrashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-bold" {...props}>
      <path fill="currentColor" d="M9.43 10a1 1 0 0 1 1.07.93l.38 5.5a1 1 0 0 1-2 .14l-.38-5.5A1 1 0 0 1 9.43 10M14.57 10a1 1 0 0 1 .93 1.07l-.38 5.5a1 1 0 0 1-2-.14l.38-5.5a1 1 0 0 1 1.07-.93" />
        <path fill="currentColor" fillRule="evenodd" d="M13.26 2c1.31 0 2.44.9 2.74 2.18l.3 1.32H21a1 1 0 1 1 0 2h-.57l-.52 7.6q-.1 1.55-.23 2.55a5 5 0 0 1-.57 1.83 5 5 0 0 1-2.17 2.02 5 5 0 0 1-1.86.45q-1.01.06-2.55.05h-1.06q-1.54.01-2.55-.05a5 5 0 0 1-1.86-.45 5 5 0 0 1-2.17-2.02 5 5 0 0 1-.57-1.83q-.14-1-.23-2.54L3.57 7.5H3a1 1 0 0 1 0-2h4.7L8 4.18A2.8 2.8 0 0 1 10.75 2zM6.1 14.97c.07 1.07.12 1.8.2 2.38.1.57.2.9.34 1.14a3 3 0 0 0 1.3 1.21c.25.12.58.2 1.15.25.58.05 1.33.05 2.4.05h1.05c1.06 0 1.8 0 2.39-.05.57-.04.9-.13 1.15-.25a3 3 0 0 0 1.3-1.21c.14-.25.25-.57.33-1.14s.14-1.31.21-2.38l.52-7.47H5.57zM10.74 4a.8.8 0 0 0-.78.62l-.2.88h4.49l-.2-.88a.8.8 0 0 0-.79-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashBold.displayName = 'TrashBold';

// Triple export pattern (lucide-react style)
export { TrashBold, TrashBold as TrashBoldIcon, TrashBold as SiTrashBold };
export default TrashBold;
export type { TrashBoldProps };
