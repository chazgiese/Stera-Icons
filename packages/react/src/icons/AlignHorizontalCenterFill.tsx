import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v2h5.4q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H13v2h2.4q.4 0 .74.02.36.01.77.2.57.3.87.87.19.41.2.77.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H13v2a1 1 0 1 1-2 0v-2H8.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q6 16.8 6 16.4v-.8q0-.4.02-.74.01-.25.11-.57l.09-.2.07-.14a2 2 0 0 1 .8-.73q.42-.19.77-.2.34-.02.74-.02H11v-2H5.6q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77Q3 8.8 3 8.4v-.8q0-.4.02-.74.01-.25.11-.57l.09-.2.07-.14a2 2 0 0 1 .8-.73c.27-.14.54-.18.77-.2Q5.2 5 5.6 5H11V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlignHorizontalCenterFill.displayName = 'AlignHorizontalCenterFill';

export { AlignHorizontalCenterFill };
export type { AlignHorizontalCenterFillProps };
