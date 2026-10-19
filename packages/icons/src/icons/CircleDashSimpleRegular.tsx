import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleRegular = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.38 19.58c.35-.2.81-.09 1.02.27s.08.82-.27 1.03c-1.51.87-3.26 1.37-5.13 1.37s-3.62-.5-5.13-1.37c-.35-.2-.48-.67-.27-1.03s.67-.48 1.03-.27c1.28.74 2.77 1.17 4.37 1.17s3.09-.43 4.38-1.17M3.12 6.87c.21-.35.67-.48 1.03-.27s.48.67.27 1.03C3.68 8.9 3.25 10.4 3.25 12s.43 3.09 1.17 4.38c.2.35.09.81-.27 1.02s-.82.08-1.03-.27c-.87-1.51-1.37-3.26-1.37-5.13s.5-3.62 1.37-5.13M19.85 6.6c.36-.2.82-.08 1.03.27.87 1.51 1.37 3.26 1.37 5.13s-.5 3.62-1.37 5.13c-.2.35-.67.48-1.03.27s-.48-.67-.27-1.02c.74-1.3 1.17-2.78 1.17-4.38s-.43-3.09-1.17-4.37c-.2-.36-.09-.82.27-1.03M12 1.75c1.87 0 3.62.5 5.13 1.37.35.21.48.67.27 1.03s-.67.48-1.02.27c-1.3-.74-2.78-1.17-4.38-1.17s-3.09.43-4.37 1.17c-.36.2-.82.09-1.03-.27-.2-.36-.08-.82.27-1.03 1.51-.87 3.26-1.37 5.13-1.37" />
    </IconBase>
  ))
);

CircleDashSimpleRegular.displayName = 'CircleDashSimpleRegular';

// Triple export pattern
export { CircleDashSimpleRegular, CircleDashSimpleRegular as CircleDashSimpleRegularIcon, CircleDashSimpleRegular as SiCircleDashSimpleRegular };
export default CircleDashSimpleRegular;
export type { CircleDashSimpleRegularProps };
