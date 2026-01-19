import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StoreFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreFillDuotone = memo(
  forwardRef<SVGSVGElement, StoreFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.33 10.92a4.25 4.25 0 0 0 5.67.88v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 17.43 3 16.2v-4.4a4.25 4.25 0 0 0 5.67-.88c.82.96 1.99 1.58 3.33 1.58a4.4 4.4 0 0 0 3.33-1.58M11.35 15c-.56 0-.84 0-1.05.1a1 1 0 0 0-.44.44c-.11.22-.1.5-.1 1.06v2.6c0 .28-.01.42.04.53q.08.14.22.22c.11.05.25.05.53.05h2.9c.28 0 .42 0 .53-.05a.5.5 0 0 0 .22-.22c.05-.11.05-.25.05-.53v-2.6c0-.56 0-.84-.1-1.06a1 1 0 0 0-.44-.43c-.22-.11-.5-.11-1.06-.11z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.65 15c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.22.11.5.11 1.06v2.6c0 .28 0 .42-.05.53a.5.5 0 0 1-.22.22c-.11.05-.25.05-.53.05h-2.9c-.28 0-.42 0-.53-.05a.5.5 0 0 1-.22-.22c-.05-.11-.05-.25-.05-.53v-2.6c0-.56 0-.84.1-1.06a1 1 0 0 1 .45-.43c.21-.11.49-.11 1.05-.11zM17.84 2a4 4 0 0 1 3.8 2.74L22.71 8c.21.62.26 1.42-.16 2.14a4.5 4.5 0 0 1-3.9 2.35 4.4 4.4 0 0 1-3.33-1.58A4.4 4.4 0 0 1 12 12.5a4.4 4.4 0 0 1-3.33-1.58 4.4 4.4 0 0 1-3.34 1.58 4.5 4.5 0 0 1-3.89-2.35A2.6 2.6 0 0 1 1.28 8l1.09-3.27A4 4 0 0 1 6.17 2z" />
    </IconBase>
  ))
);

StoreFillDuotone.displayName = 'StoreFillDuotone';

// Triple export pattern (lucide-react style)
export { StoreFillDuotone, StoreFillDuotone as StoreFillDuotoneIcon, StoreFillDuotone as SiStoreFillDuotone };
export default StoreFillDuotone;
export type { StoreFillDuotoneProps };
