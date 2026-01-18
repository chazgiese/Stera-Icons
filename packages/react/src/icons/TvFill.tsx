import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TvFillProps = Omit<IconBaseProps, 'children'>;

const TvFill = memo(
  forwardRef<SVGSVGElement, TvFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.46.23-.94.33-1.45.38l.58 1.74a1 1 0 1 1-1.9.64L17.28 19H6.72l-.77 2.32a1 1 0 1 1-1.9-.64l.58-1.74c-.52-.05-1-.15-1.45-.38a4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3z" />
    </IconBase>
  ))
);

TvFill.displayName = 'TvFill';

// Triple export pattern (lucide-react style)
export { TvFill, TvFill as TvFillIcon, TvFill as SiTvFill };
export type { TvFillProps };
