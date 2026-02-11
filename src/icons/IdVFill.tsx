import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVFillProps = Omit<IconBaseProps, 'children'>;

const IdVFill = memo(
  forwardRef<SVGSVGElement, IdVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v-fill" {...props}>
      <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM12 10.5a3 3 0 0 0-1.63 5.52A3.2 3.2 0 0 0 7.5 19.2c0 .44.36.8.8.8h7.4a.8.8 0 0 0 .8-.8 3.2 3.2 0 0 0-2.87-3.18A3 3 0 0 0 12 10.5M9.5 4.63a.87.87 0 1 0 0 1.75h5a.87.87 0 1 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

IdVFill.displayName = 'IdVFill';

// Triple export pattern (lucide-react style)
export { IdVFill, IdVFill as IdVFillIcon, IdVFill as SiIdVFill };
export default IdVFill;
export type { IdVFillProps };
