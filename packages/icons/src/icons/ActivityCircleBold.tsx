import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ActivityCircleBold = memo(
  forwardRef<SVGSVGElement, ActivityCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.54 6.5c.41.02.78.29.9.68l2.16 6.46.58-1.4c.31-.75 1.04-1.24 1.85-1.24h1.47c.55 0 1 .45 1 1s-.45 1-1 1h-1.47l-1.6 3.88c-.17.39-.55.63-.97.62s-.78-.29-.9-.68l-2.16-6.46-.58 1.4C9.5 12.51 8.78 13 7.97 13H6.5c-.55 0-1-.45-1-1s.45-1 1-1h1.47l1.6-3.88.08-.14c.18-.3.52-.5.89-.48" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ActivityCircleBold.displayName = 'ActivityCircleBold';

// Triple export pattern
export { ActivityCircleBold, ActivityCircleBold as ActivityCircleBoldIcon, ActivityCircleBold as SiActivityCircleBold };
export default ActivityCircleBold;
export type { ActivityCircleBoldProps };
