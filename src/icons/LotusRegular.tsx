import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusRegularProps = Omit<IconBaseProps, 'children'>;

const LotusRegular = memo(
  forwardRef<SVGSVGElement, LotusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lotus" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.53 3.42a.75.75 0 0 1 1 .05l2.34 2.34q.3.3.57.62l2.97-1.6.08-.03a.75.75 0 0 1 1 .54l.83 3.91H22a.75.75 0 0 1 .75.75v2A8.75 8.75 0 0 1 14 20.75h-4A8.75 8.75 0 0 1 1.25 12v-2A.75.75 0 0 1 2 9.25h1.68l.82-3.9.03-.09a.75.75 0 0 1 1.06-.42l2.98 1.59q.26-.32.56-.62l2.34-2.34zm8.18 7.34q-1.21.05-2.31.47a8.7 8.7 0 0 1-2.53 6.96l-1.06 1.06H14c4 0 7.25-3.24 7.25-7.25v-1.25h-1.54M2.75 12c0 4 3.25 7.25 7.25 7.25h.19l-1.06-1.06a8.7 8.7 0 0 1-2.53-6.96 7 7 0 0 0-2.6-.48H2.75zm7.44-5.13a7.3 7.3 0 0 0-2.04 4 7.2 7.2 0 0 0 2.04 6.26l1.81 1.8 1.81-1.8a7.24 7.24 0 0 0 0-10.26L12 5.07zm-5 2.46a9 9 0 0 1 1.67.4q.3-1.07.85-2.06L5.77 6.63zm11.1-1.66q.57.99.85 2.06a9 9 0 0 1 1.66-.4l-.57-2.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusRegular.displayName = 'LotusRegular';

// Triple export pattern (lucide-react style)
export { LotusRegular, LotusRegular as LotusRegularIcon, LotusRegular as SiLotusRegular };
export default LotusRegular;
export type { LotusRegularProps };
