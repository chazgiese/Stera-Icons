import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-slash-fill-duotone" {...props}>
      <path d="M18.99 20.23q-.39.29-.82.5c-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3q.21-.45.5-.83zM12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3q-.21.45-.5.83L5 3.77q.39-.29.82-.5c.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08z" opacity={0.4} />
        <path d="M20.22 18.99q-.52.71-1.23 1.24L3.77 5q.53-.71 1.24-1.24z" />
    </IconBase>
  ))
);

SquareSlashFillDuotone.displayName = 'SquareSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { SquareSlashFillDuotone, SquareSlashFillDuotone as SquareSlashFillDuotoneIcon, SquareSlashFillDuotone as SiSquareSlashFillDuotone };
export default SquareSlashFillDuotone;
export type { SquareSlashFillDuotoneProps };
