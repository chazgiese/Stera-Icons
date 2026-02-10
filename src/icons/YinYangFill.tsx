import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangFillProps = Omit<IconBaseProps, 'children'>;

const YinYangFill = memo(
  forwardRef<SVGSVGElement, YinYangFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-fill" {...props}>
      <path fill="currentColor" d="M12 5.83a1.67 1.67 0 1 1 0 3.34 1.67 1.67 0 0 1 0-3.34" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25h.29l.21.01a9.75 9.75 0 0 1-.79 19.48h-.21A9.75 9.75 0 0 1 12 2.25m0 1.5a8.25 8.25 0 0 0-4.75 15l-.2-.5-.04-.1-.04-.15-.03-.12-.04-.14-.03-.14-.02-.1-.04-.2v-.05a5.25 5.25 0 0 1 5.19-6 3.75 3.75 0 0 0 0-7.5m0 11.07a1.68 1.68 0 1 0 0 3.35 1.68 1.68 0 0 0 0-3.35" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangFill.displayName = 'YinYangFill';

// Triple export pattern (lucide-react style)
export { YinYangFill, YinYangFill as YinYangFillIcon, YinYangFill as SiYinYangFill };
export default YinYangFill;
export type { YinYangFillProps };
