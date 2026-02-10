import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashFillProps = Omit<IconBaseProps, 'children'>;

const TrashFill = memo(
  forwardRef<SVGSVGElement, TrashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.26 2c1.31 0 2.44.9 2.74 2.18l.3 1.32H21a1 1 0 1 1 0 2h-.57l-.52 7.6q-.1 1.55-.23 2.55a5 5 0 0 1-.57 1.83 5 5 0 0 1-2.17 2.02 5 5 0 0 1-1.86.45q-1.01.06-2.55.05h-1.06q-1.54.01-2.55-.05a5 5 0 0 1-1.86-.45 5 5 0 0 1-2.17-2.02 5 5 0 0 1-.57-1.83q-.14-1-.23-2.54L3.57 7.5H3a1 1 0 0 1 0-2h4.7L8 4.18A2.8 2.8 0 0 1 10.75 2zm-3.83 8a1 1 0 0 0-.93 1.07l.38 5.5a1 1 0 0 0 2-.14l-.38-5.5A1 1 0 0 0 9.43 10m5.14 0a1 1 0 0 0-1.07.93l-.38 5.5a1 1 0 0 0 2 .14l.38-5.5a1 1 0 0 0-.93-1.07m-3.83-6a.8.8 0 0 0-.78.62l-.2.88h4.49l-.2-.88a.8.8 0 0 0-.79-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashFill.displayName = 'TrashFill';

// Triple export pattern (lucide-react style)
export { TrashFill, TrashFill as TrashFillIcon, TrashFill as SiTrashFill };
export default TrashFill;
export type { TrashFillProps };
