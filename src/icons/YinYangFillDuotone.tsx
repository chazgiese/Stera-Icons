import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type YinYangFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const YinYangFillDuotone = memo(
  forwardRef<SVGSVGElement, YinYangFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2h.28-.02q1.1.07 2.03.55l.05.03q.38.21.74.48l.04.03A5 5 0 0 1 17 7a5 5 0 0 1-4.74 5h-.52a5 5 0 0 0 0 10A10 10 0 0 1 12 2m0 3.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={0.4} />
        <path d="M12 15.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.51 2.01a10 10 0 0 1-.51 20 5 5 0 0 1-.26-10l.52-.02a5 5 0 0 0 0-9.98zM12 15.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

YinYangFillDuotone.displayName = 'YinYangFillDuotone';

// Triple export pattern (lucide-react style)
export { YinYangFillDuotone, YinYangFillDuotone as YinYangFillDuotoneIcon, YinYangFillDuotone as SiYinYangFillDuotone };
export default YinYangFillDuotone;
export type { YinYangFillDuotoneProps };
