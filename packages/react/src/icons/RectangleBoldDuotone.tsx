import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, RectangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-6v-2h6a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-6V3z" opacity={.4} />
        <path fill="currentColor" d="M12 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h6z" />
    </IconBase>
  ))
);

RectangleBoldDuotone.displayName = 'RectangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { RectangleBoldDuotone, RectangleBoldDuotone as RectangleBoldDuotoneIcon, RectangleBoldDuotone as SiRectangleBoldDuotone };
export type { RectangleBoldDuotoneProps };
