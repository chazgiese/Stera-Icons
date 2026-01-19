import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TvFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvFillDuotone = memo(
  forwardRef<SVGSVGElement, TvFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" opacity={.4} />
        <path fill="currentColor" d="M4.75 18.96q.79.05 1.97.04l-.77 2.32a1 1 0 0 1-1.9-.64l.58-1.74zM19.95 20.68a1 1 0 0 1-1.9.64L17.28 19q1.18.01 1.97-.04l.12-.02z" />
    </IconBase>
  ))
);

TvFillDuotone.displayName = 'TvFillDuotone';

// Triple export pattern (lucide-react style)
export { TvFillDuotone, TvFillDuotone as TvFillDuotoneIcon, TvFillDuotone as SiTvFillDuotone };
export default TvFillDuotone;
export type { TvFillDuotoneProps };
