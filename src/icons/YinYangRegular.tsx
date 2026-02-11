import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangRegularProps = Omit<IconBaseProps, 'children'>;

const YinYangRegular = memo(
  forwardRef<SVGSVGElement, YinYangRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang" {...props}>
      <path d="M12 15.08a1.42 1.42 0 1 1 0 2.84 1.42 1.42 0 0 1 0-2.84M12 6.15a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m4.75 3q.49 1.03.5 2.25c0 2.9-2.35 5.25-5.25 5.25a3.75 3.75 0 0 0-.2 7.5h.2a8.25 8.25 0 0 0 4.75-15M12 3.75a8.25 8.25 0 0 0-4.75 15 5.25 5.25 0 0 1 4.75-7.5 3.75 3.75 0 1 0 0-7.5" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangRegular.displayName = 'YinYangRegular';

// Triple export pattern (lucide-react style)
export { YinYangRegular, YinYangRegular as YinYangRegularIcon, YinYangRegular as SiYinYangRegular };
export default YinYangRegular;
export type { YinYangRegularProps };
