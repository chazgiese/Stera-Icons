import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones-duotone" {...props}>
      <path d="M12.27 2.35a9.7 9.7 0 0 1 7.08 3.34c1.57 1.8 2.03 4.03 2 6.26-.03 2.21-.56 4.54-1.02 6.61a.75.75 0 0 1-.88.58l.54-2.42c.16-.73 0-1.46-.41-2.03q.24-1.4.27-2.77c.03-2.02-.39-3.82-1.63-5.24a8.2 8.2 0 0 0-5.76-2.82h-.92a8.2 8.2 0 0 0-5.76 2.82C4.54 8.1 4.12 9.9 4.15 11.92q.04 1.36.27 2.77c-.4.57-.57 1.3-.41 2.03l.53 2.42a.75.75 0 0 1-.87-.58c-.46-2.07-.98-4.4-1.02-6.61-.03-2.23.43-4.45 2-6.26A9.7 9.7 0 0 1 12 2.35z" opacity={.4} />
        <path fillRule="evenodd" d="M5.94 13.68c1.38-.3 2.74.56 3.05 1.93l.58 2.64a2.55 2.55 0 1 1-4.98 1.1l-.58-2.63a2.55 2.55 0 0 1 1.93-3.04m1.58 2.26a1.05 1.05 0 1 0-2.05.45l.59 2.64a1.05 1.05 0 0 0 2.05-.45zM15.01 15.61A2.55 2.55 0 0 1 20 16.72l-.58 2.64a2.55 2.55 0 0 1-4.98-1.11zm2.72-.47a1.05 1.05 0 0 0-1.25.8l-.59 2.64a1.05 1.05 0 0 0 2.05.45l.59-2.64a1.05 1.05 0 0 0-.8-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegularDuotone.displayName = 'HeadphonesRegularDuotone';

// Triple export pattern (lucide-react style)
export { HeadphonesRegularDuotone, HeadphonesRegularDuotone as HeadphonesRegularDuotoneIcon, HeadphonesRegularDuotone as SiHeadphonesRegularDuotone };
export default HeadphonesRegularDuotone;
export type { HeadphonesRegularDuotoneProps };
