import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type YinYangBoldProps = Omit<IconBaseProps, 'children'>;

const YinYangBold = memo(
  forwardRef<SVGSVGElement, YinYangBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang-bold" {...props}>
      <path fill="currentColor" d="M12 15.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1h.31A11 11 0 1 1 12 1m5.66 4A6 6 0 0 1 12 13a4 4 0 0 0-.21 8H12a9 9 0 0 0 5.66-16M12 3a9 9 0 0 0-5.66 16A6 6 0 0 1 12 11a4 4 0 0 0 .21-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangBold.displayName = 'YinYangBold';

// Triple export pattern (lucide-react style)
export { YinYangBold, YinYangBold as YinYangBoldIcon, YinYangBold as SiYinYangBold };
export type { YinYangBoldProps };
