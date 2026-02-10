import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillProps = Omit<IconBaseProps, 'children'>;

const TvFill = memo(
  forwardRef<SVGSVGElement, TvFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-fill" {...props}>
      <path fill="currentColor" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-2.25 1.95l.64 1.91a1 1 0 1 1-1.9.64L17.28 18H6.72l-.77 2.32a1 1 0 1 1-1.9-.64l.64-1.91a4 4 0 0 1-2.25-1.95 4 4 0 0 1-.4-1.57Q2 13.43 2 12.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
    </IconBase>
  ))
);

TvFill.displayName = 'TvFill';

// Triple export pattern (lucide-react style)
export { TvFill, TvFill as TvFillIcon, TvFill as SiTvFill };
export default TvFill;
export type { TvFillProps };
