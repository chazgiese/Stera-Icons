import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparklesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparklesRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparklesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.88 1.4c.04-.13.2-.13.24 0l.2.63a4 4 0 0 0 2.65 2.66l.64.19c.12.04.12.2 0 .24l-.64.2a4 4 0 0 0-2.66 2.65l-.2.64a.13.13 0 0 1-.23 0l-.2-.64a4 4 0 0 0-2.65-2.66l-.64-.2a.13.13 0 0 1 0-.23l.64-.2a4 4 0 0 0 2.66-2.65z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.5 4.25c.33 0 .62.22.72.53l.74 2.44a7.3 7.3 0 0 0 4.82 4.82l2.44.74a.75.75 0 0 1 0 1.44l-2.44.74a7.3 7.3 0 0 0-4.82 4.82l-.74 2.44a.75.75 0 0 1-1.44 0l-.74-2.44a7.3 7.3 0 0 0-4.82-4.82l-2.44-.74a.75.75 0 0 1 0-1.44l2.44-.74a7.3 7.3 0 0 0 4.82-4.82l.74-2.44.05-.11a.8.8 0 0 1 .67-.42m-.02 3.4a8.8 8.8 0 0 1-5.83 5.83l-.07.02.07.02a8.8 8.8 0 0 1 5.83 5.83l.02.07.02-.07a8.8 8.8 0 0 1 5.83-5.83l.07-.02-.07-.02a8.8 8.8 0 0 1-5.83-5.83l-.02-.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparklesRegularDuotone.displayName = 'SparklesRegularDuotone';

export { SparklesRegularDuotone };
export type { SparklesRegularDuotoneProps };
