import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleRegularProps = Omit<IconBaseProps, 'children'>;

const RectangleRegular = memo(
  forwardRef<SVGSVGElement, RectangleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H6A4.75 4.75 0 0 1 1.25 16V8A4.75 4.75 0 0 1 6 3.25zM6 4.75A3.25 3.25 0 0 0 2.75 8v8c0 1.8 1.46 3.25 3.25 3.25h12c1.8 0 3.25-1.46 3.25-3.25V8c0-1.8-1.46-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

RectangleRegular.displayName = 'RectangleRegular';

// Triple export pattern (lucide-react style)
export { RectangleRegular, RectangleRegular as RectangleRegularIcon, RectangleRegular as SiRectangleRegular };
export type { RectangleRegularProps };
