import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashFillProps = Omit<IconBaseProps, 'children'>;

const TrashFill = memo(
  forwardRef<SVGSVGElement, TrashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.44 1a3 3 0 0 1 2.9 2.27L16.79 5H22a1 1 0 1 1 0 2h-1.06l-.57 9.06q-.07 1.55-.21 2.56c-.1.69-.25 1.29-.57 1.84a5 5 0 0 1-2.16 2.04 5 5 0 0 1-1.88.45Q14.54 23 13 23H11q-1.55.01-2.56-.05c-.7-.06-1.3-.17-1.88-.45a5 5 0 0 1-2.16-2.04 5 5 0 0 1-.57-1.84q-.14-1.01-.21-2.56L3.06 7H2a1 1 0 0 1 0-2h5.22l.43-1.73A3 3 0 0 1 10.56 1zm-4.19 9a1 1 0 0 0-.94 1.06l.38 6a1 1 0 0 0 2-.12l-.38-6A1 1 0 0 0 9.25 10m5.5 0a1 1 0 0 0-1.06.94l-.38 6a1 1 0 0 0 2 .12l.38-6a1 1 0 0 0-.94-1.06m-4.19-7a1 1 0 0 0-.97.76L9.28 5h5.44l-.31-1.24a1 1 0 0 0-.97-.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashFill.displayName = 'TrashFill';

// Triple export pattern (lucide-react style)
export { TrashFill, TrashFill as TrashFillIcon, TrashFill as SiTrashFill };
export default TrashFill;
export type { TrashFillProps };
