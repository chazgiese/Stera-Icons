import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const YinYangBoldDuotone = memo(
  forwardRef<SVGSVGElement, YinYangBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2h.29A10 10 0 1 1 12 2m5.3 4a5.5 5.5 0 0 1-5.3 7 3.5 3.5 0 1 0 0 7 8 8 0 0 0 5.3-14M12 4a8 8 0 0 0-5.3 14 5.5 5.5 0 0 1 5.3-7 3.5 3.5 0 1 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.83a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34M12 5.83a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34" />
    </IconBase>
  ))
);

YinYangBoldDuotone.displayName = 'YinYangBoldDuotone';

// Triple export pattern (lucide-react style)
export { YinYangBoldDuotone, YinYangBoldDuotone as YinYangBoldDuotoneIcon, YinYangBoldDuotone as SiYinYangBoldDuotone };
export default YinYangBoldDuotone;
export type { YinYangBoldDuotoneProps };
