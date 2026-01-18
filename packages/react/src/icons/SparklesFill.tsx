import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparklesFillProps = Omit<IconBaseProps, 'children'>;

const SparklesFill = memo(
  forwardRef<SVGSVGElement, SparklesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.5 4a1 1 0 0 1 .96.7l.74 2.44a7 7 0 0 0 4.66 4.66l2.43.74a1 1 0 0 1 0 1.92l-2.43.74a7 7 0 0 0-4.66 4.66l-.74 2.43a1 1 0 0 1-1.92 0l-.74-2.43a7 7 0 0 0-4.66-4.66l-2.43-.74a1 1 0 0 1 0-1.92l2.43-.74A7 7 0 0 0 8.8 7.14l.74-2.43A1 1 0 0 1 10.5 4M18.88 1.4c.04-.12.2-.12.24 0l.2.63a4 4 0 0 0 2.65 2.66l.64.2c.12.03.12.2 0 .23l-.64.2a4 4 0 0 0-2.66 2.65l-.2.64a.12.12 0 0 1-.23 0l-.2-.64a4 4 0 0 0-2.65-2.66l-.64-.19c-.12-.04-.12-.2 0-.24l.64-.2a4 4 0 0 0 2.66-2.65z" />
    </IconBase>
  ))
);

SparklesFill.displayName = 'SparklesFill';

export { SparklesFill };
export type { SparklesFillProps };
