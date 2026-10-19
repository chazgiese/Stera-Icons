import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityCircleFillProps = Omit<IconBaseProps, 'children'>;

const ActivityCircleFill = memo(
  forwardRef<SVGSVGElement, ActivityCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-1.47 4.88c-.36-.02-.7.2-.84.54l-1.6 3.88q-.04.07-.12.07H6.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.47c.76 0 1.44-.46 1.73-1.16l.71-1.72 2.26 6.78c.12.34.43.58.8.6.36 0 .7-.2.84-.55l1.6-3.88q.04-.07.12-.07h1.47c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.47c-.76 0-1.44.45-1.73 1.15L13.59 14l-2.26-6.78c-.12-.34-.43-.58-.8-.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ActivityCircleFill.displayName = 'ActivityCircleFill';

// Triple export pattern
export { ActivityCircleFill, ActivityCircleFill as ActivityCircleFillIcon, ActivityCircleFill as SiActivityCircleFill };
export default ActivityCircleFill;
export type { ActivityCircleFillProps };
