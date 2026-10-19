import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivityCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-1.47 4.88c-.36-.02-.7.2-.84.54l-1.6 3.88q-.04.07-.12.07H6.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.47c.76 0 1.44-.46 1.73-1.16l.71-1.72 2.26 6.78c.12.34.43.58.8.6.36 0 .7-.2.84-.55l1.6-3.88q.04-.07.12-.07h1.47c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87h-1.47c-.76 0-1.44.45-1.73 1.15L13.59 14l-2.26-6.78c-.12-.34-.43-.58-.8-.6" clipRule="evenodd" opacity={.4} />
        <path d="M10.53 6.63c.37 0 .68.25.8.6L13.59 14l.7-1.72c.3-.7.98-1.15 1.74-1.15h1.47c.48 0 .88.39.88.87s-.4.88-.88.88h-1.47q-.08 0-.12.07l-1.6 3.88c-.14.34-.48.56-.84.54-.37 0-.68-.25-.8-.6L10.41 10l-.7 1.72c-.3.7-.98 1.16-1.74 1.16H6.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.47q.08-.01.12-.08l1.6-3.88c.14-.34.48-.56.84-.54" />
    </IconBase>
  ))
);

ActivityCircleFillDuotone.displayName = 'ActivityCircleFillDuotone';

// Triple export pattern
export { ActivityCircleFillDuotone, ActivityCircleFillDuotone as ActivityCircleFillDuotoneIcon, ActivityCircleFillDuotone as SiActivityCircleFillDuotone };
export default ActivityCircleFillDuotone;
export type { ActivityCircleFillDuotoneProps };
