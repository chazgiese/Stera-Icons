import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShuffleBoldProps = Omit<IconBaseProps, 'children'>;

const ShuffleBold = memo(
  forwardRef<SVGSVGElement, ShuffleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 6c1.44 0 2.57.9 3.44 1.9.88 1.02 1.68 2.36 2.42 3.59a24 24 0 0 0 2.2 3.3c.76.86 1.38 1.21 1.94 1.21h2.59l-.8-.8a1 1 0 0 1 1.42-1.4l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.42-1.4l.8-.8H16c-1.44 0-2.57-.9-3.44-1.9-.88-1.02-1.68-2.36-2.42-3.59a25 25 0 0 0-2.2-3.3C7.17 8.36 6.55 8 6 8H3a1 1 0 0 1 0-2z" />
        <path fill="currentColor" d="M8.4 14.2a1 1 0 0 1 1.6 1.2C9.02 16.7 7.73 18 6 18H3a1 1 0 0 1 0-2h3c.69 0 1.45-.53 2.4-1.8M17.8 3.8a1 1 0 0 1 1.4 0l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.4-1.4l.79-.8H16c-.69 0-1.45.53-2.4 1.8A1 1 0 0 1 12 8.6c.97-1.3 2.26-2.6 4-2.6h2.59l-.8-.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShuffleBold.displayName = 'ShuffleBold';

export { ShuffleBold };
export type { ShuffleBoldProps };
