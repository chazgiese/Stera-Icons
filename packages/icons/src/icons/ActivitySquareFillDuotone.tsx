import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivitySquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivitySquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivitySquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-2.47 4.38c-.36-.02-.7.2-.84.54l-1.6 3.88q-.04.07-.12.07H6.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.47c.76 0 1.44-.46 1.73-1.16l.71-1.72 2.26 6.78c.12.34.43.58.8.6.36 0 .7-.2.84-.55l1.6-3.88q.04-.07.12-.07h1.47c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87h-1.47c-.76 0-1.44.45-1.73 1.15L13.59 14l-2.26-6.78c-.12-.34-.43-.58-.8-.6" clipRule="evenodd" opacity={.4} />
        <path d="M10.53 6.63c.37 0 .68.25.8.6L13.59 14l.7-1.72c.3-.7.98-1.15 1.74-1.15h1.47c.48 0 .88.39.88.87s-.4.88-.88.88h-1.47q-.08 0-.12.07l-1.6 3.88c-.14.34-.48.56-.84.54-.37 0-.68-.25-.8-.6L10.41 10l-.7 1.72c-.3.7-.98 1.16-1.74 1.16H6.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.47q.08-.01.12-.08l1.6-3.88c.14-.34.48-.56.84-.54" />
    </IconBase>
  ))
);

ActivitySquareFillDuotone.displayName = 'ActivitySquareFillDuotone';

// Triple export pattern
export { ActivitySquareFillDuotone, ActivitySquareFillDuotone as ActivitySquareFillDuotoneIcon, ActivitySquareFillDuotone as SiActivitySquareFillDuotone };
export default ActivitySquareFillDuotone;
export type { ActivitySquareFillDuotoneProps };
