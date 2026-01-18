import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleBoldProps = Omit<IconBaseProps, 'children'>;

const RectangleBold = memo(
  forwardRef<SVGSVGElement, RectangleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

RectangleBold.displayName = 'RectangleBold';

// Triple export pattern (lucide-react style)
export { RectangleBold, RectangleBold as RectangleBoldIcon, RectangleBold as SiRectangleBold };
export type { RectangleBoldProps };
