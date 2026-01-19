import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StoreFillProps = Omit<IconBaseProps, 'children'>;

const StoreFill = memo(
  forwardRef<SVGSVGElement, StoreFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.16 2.01a4 4 0 0 1 3.47 2.73L22.73 8c.2.62.25 1.42-.17 2.14A5 5 0 0 1 21 11.8v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.56 4 4 0 0 1-1.74 1.75c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.05a4 4 0 0 1-1.57-.39 4 4 0 0 1-1.74-1.75 4 4 0 0 1-.4-1.56Q3 17.43 3 16.2v-4.4a5 5 0 0 1-1.56-1.65A2.6 2.6 0 0 1 1.28 8l1.09-3.27A4 4 0 0 1 6.17 2h11.67zM11.35 15c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.44c-.1.22-.11.5-.11 1.06v2.6c0 .28 0 .42.06.53q.07.15.21.22c.11.05.25.05.53.05h2.9c.28 0 .42 0 .53-.05a.5.5 0 0 0 .22-.22c.05-.11.05-.25.05-.53v-2.6c0-.56 0-.84-.1-1.06a1 1 0 0 0-.45-.43c-.2-.11-.49-.11-1.05-.11zM6 4a2 2 0 0 0-1.73 1.37l-1.1 3.27c-.08.25-.04.42 0 .5q.5.82 1.24 1.16.33.15.68.18l.24.02h.05c.98-.02 1.92-.71 2.35-1.86l.07-.14a1 1 0 0 1 1.8.14c.44 1.15 1.37 1.84 2.35 1.86h.1c.98-.02 1.91-.71 2.35-1.86l.07-.14a1 1 0 0 1 1.8.14c.43 1.15 1.37 1.84 2.35 1.86h.05q.11 0 .23-.02h.01q.36-.04.68-.18.75-.34 1.24-1.16c.05-.08.08-.25 0-.5l-1.1-3.27A2 2 0 0 0 18 4L17.84 4H6" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreFill.displayName = 'StoreFill';

// Triple export pattern (lucide-react style)
export { StoreFill, StoreFill as StoreFillIcon, StoreFill as SiStoreFill };
export default StoreFill;
export type { StoreFillProps };
