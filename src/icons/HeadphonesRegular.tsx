import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesRegularProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegular = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones" {...props}>
      <path fillRule="evenodd" d="M12.27 2.35a9.7 9.7 0 0 1 7.08 3.34c1.57 1.8 2.03 4.03 2 6.26-.03 2.21-.56 4.54-1.02 6.61a.75.75 0 0 1-.88.58l-.04.22a2.55 2.55 0 0 1-4.98-1.11l.58-2.64a2.55 2.55 0 0 1 4.57-.92q.24-1.4.27-2.77c.03-2.02-.39-3.82-1.63-5.24a8.2 8.2 0 0 0-5.76-2.82h-.92a8.2 8.2 0 0 0-5.76 2.82C4.54 8.1 4.12 9.9 4.15 11.92q.04 1.36.27 2.77a2.54 2.54 0 0 1 4.57.92l.58 2.64a2.55 2.55 0 1 1-4.98 1.1l-.05-.21a.75.75 0 0 1-.87-.58c-.46-2.07-.98-4.4-1.02-6.61-.03-2.23.43-4.45 2-6.26A9.7 9.7 0 0 1 12 2.35zM7.52 15.94a1.05 1.05 0 1 0-2.05.45l.59 2.64a1.05 1.05 0 0 0 2.05-.45zm10.21-.8a1.05 1.05 0 0 0-1.25.8l-.59 2.64a1.05 1.05 0 1 0 2.05.45l.59-2.64a1.05 1.05 0 0 0-.8-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegular.displayName = 'HeadphonesRegular';

// Triple export pattern (lucide-react style)
export { HeadphonesRegular, HeadphonesRegular as HeadphonesRegularIcon, HeadphonesRegular as SiHeadphonesRegular };
export default HeadphonesRegular;
export type { HeadphonesRegularProps };
