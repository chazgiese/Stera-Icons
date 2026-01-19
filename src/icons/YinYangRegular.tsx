import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type YinYangRegularProps = Omit<IconBaseProps, 'children'>;

const YinYangRegular = memo(
  forwardRef<SVGSVGElement, YinYangRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="yin-yang" {...props}>
      <path fill="currentColor" d="M12 15.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m5.05 3q.69 1.24.7 2.75A5.75 5.75 0 0 1 12 12.75a4.25 4.25 0 0 0 0 8.5 9.25 9.25 0 0 0 5.05-17M12 2.75a9.25 9.25 0 0 0-5.05 17 5.75 5.75 0 0 1 5.05-8.5 4.25 4.25 0 0 0 0-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangRegular.displayName = 'YinYangRegular';

// Triple export pattern (lucide-react style)
export { YinYangRegular, YinYangRegular as YinYangRegularIcon, YinYangRegular as SiYinYangRegular };
export default YinYangRegular;
export type { YinYangRegularProps };
