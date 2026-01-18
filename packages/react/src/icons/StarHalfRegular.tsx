import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarHalfRegularProps = Omit<IconBaseProps, 'children'>;

const StarHalfRegular = memo(
  forwardRef<SVGSVGElement, StarHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.79 2.04a1.32 1.32 0 0 1 2.37-.1l.05.1 2.37 5.49 5.97.55c1.15.1 1.62 1.53.75 2.3l-4.5 3.94 1.31 5.82c.26 1.14-.97 2-1.95 1.42L12 18.51l-5.16 3.05a1.32 1.32 0 0 1-1.95-1.42l1.31-5.82-4.5-3.94c-.87-.77-.4-2.2.75-2.3l5.97-.55zM12 17q.26 0 .51.1l.16.08 4.89 2.89-1.25-5.52c-.1-.47.05-.96.42-1.28l4.26-3.73-5.65-.52c-.48-.04-.9-.34-1.1-.79L12 3.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarHalfRegular.displayName = 'StarHalfRegular';

// Triple export pattern (lucide-react style)
export { StarHalfRegular, StarHalfRegular as StarHalfRegularIcon, StarHalfRegular as SiStarHalfRegular };
export type { StarHalfRegularProps };
