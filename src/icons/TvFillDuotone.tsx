import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvFillDuotone = memo(
  forwardRef<SVGSVGElement, TvFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-fill-duotone" {...props}>
      <path d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 13.43 2 12.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" opacity={.4} />
        <path d="M4.69 17.77q.5.15 1.06.19l.97.04-.77 2.32a1 1 0 0 1-1.9-.64zM19.95 19.68a1 1 0 0 1-1.9.64L17.28 18l.97-.04q.55-.04 1.06-.2z" />
    </IconBase>
  ))
);

TvFillDuotone.displayName = 'TvFillDuotone';

// Triple export pattern (lucide-react style)
export { TvFillDuotone, TvFillDuotone as TvFillDuotoneIcon, TvFillDuotone as SiTvFillDuotone };
export default TvFillDuotone;
export type { TvFillDuotoneProps };
