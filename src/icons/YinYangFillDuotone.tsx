import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const YinYangFillDuotone = memo(
  forwardRef<SVGSVGElement, YinYangFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-fill-duotone" {...props}>
      <path d="M12 2.25a4.87 4.87 0 0 1 .25 9.74l-.5.02a4.88 4.88 0 0 0-.01 9.73A9.75 9.75 0 0 1 12 2.25" opacity={0.4} />
        <path d="M12.18 15.15a1.73 1.73 0 1 1-1.9 1.9l-.01-.18v-.17c.1-.87.83-1.56 1.73-1.56z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.26 2.26A9.75 9.75 0 0 1 12 21.75a4.87 4.87 0 0 1-.25-9.74l.5-.02a4.88 4.88 0 0 0 .01-9.73M12 15.16a1.7 1.7 0 0 0-1.7 1.54v.35a1.7 1.7 0 1 0 1.87-1.87z" clipRule="evenodd" />
        <path fill="currentColor" d="M12.18 5.4a1.73 1.73 0 1 1-1.9 1.9l-.01-.17v-.18c.1-.87.83-1.56 1.73-1.56z" />
    </IconBase>
  ))
);

YinYangFillDuotone.displayName = 'YinYangFillDuotone';

// Triple export pattern (lucide-react style)
export { YinYangFillDuotone, YinYangFillDuotone as YinYangFillDuotoneIcon, YinYangFillDuotone as SiYinYangFillDuotone };
export default YinYangFillDuotone;
export type { YinYangFillDuotoneProps };
