import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type IdVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdVFillDuotone = memo(
  forwardRef<SVGSVGElement, IdVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM12 11a3.5 3.5 0 0 0-2.4 6.05A3.2 3.2 0 0 0 7 20.2c0 .44.36.8.8.8h8.4a.8.8 0 0 0 .8-.8 3.2 3.2 0 0 0-2.61-3.15A3.49 3.49 0 0 0 12 11M9 5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11a3.5 3.5 0 0 1 2.39 6.05A3.2 3.2 0 0 1 17 20.2a.8.8 0 0 1-.8.8H7.8a.8.8 0 0 1-.8-.8 3.2 3.2 0 0 1 2.6-3.15A3.49 3.49 0 0 1 12 11M15 5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

IdVFillDuotone.displayName = 'IdVFillDuotone';

// Triple export pattern (lucide-react style)
export { IdVFillDuotone, IdVFillDuotone as IdVFillDuotoneIcon, IdVFillDuotone as SiIdVFillDuotone };
export type { IdVFillDuotoneProps };
