import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderRegularDuotone = memo(
  forwardRef<SVGSVGElement, FinderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-duotone" {...props}>
      <path d="M16 2.75c2.9 0 5.25 2.35 5.25 5.25v8c0 2.9-2.35 5.25-5.25 5.25h-2a.8.8 0 0 1-.58-.28l-.06-.07v-.02l-.02-.03a4 4 0 0 1-.25-.49q-.24-.5-.54-1.48-.2-.62-.36-1.45.75-.02 1.5-.16.15.68.3 1.19.27.86.46 1.28v.01H16A3.75 3.75 0 0 0 19.75 16V8A3.75 3.75 0 0 0 16 4.25h-2.5q-.07.2-.19.47l-.9 2.35a69 69 0 0 0-1.78 5.28l.2.03q.41.03.8.02.4-.03.56-.13a.75.75 0 0 1 1.09.67q.01 1.62.17 2.84-.75.15-1.5.15-.11-.93-.16-2.04h-.05a6 6 0 0 1-1.88-.14l-.25-.05-.07-.02h-.02a.75.75 0 0 1-.55-.92A63 63 0 0 1 11 6.54a119 119 0 0 1 1.2-3.07l.08-.2.02-.04v-.01a.8.8 0 0 1 .7-.47z" opacity={.4} />
        <path d="M16.28 14.53a.75.75 0 0 1 .88 1.22 8.8 8.8 0 0 1-10.32 0 .75.75 0 0 1 .88-1.22 7.3 7.3 0 0 0 8.56 0M7.28 7c.41 0 .75.34.75.75v1.42a.75.75 0 0 1-1.5 0V7.75c0-.41.33-.75.75-.75M15.78 7c.41 0 .75.34.75.75v1.42a.75.75 0 0 1-1.5 0V7.75c0-.41.33-.75.75-.75" />
        <path d="M13 2.75c-.3 0-.58.18-.7.46v.02l-.02.05-.08.19-.28.7-.03.08H10.7c-1.27 0-2.18 0-2.9.06-.7.06-1.14.17-1.5.35-.7.36-1.28.93-1.64 1.64-.18.36-.3.8-.35 1.5-.06.72-.06 1.63-.06 2.9v2.6c0 1.27 0 2.18.06 2.9.06.7.17 1.14.35 1.5.36.7.93 1.28 1.64 1.64.36.18.8.3 1.5.35.72.06 1.63.06 2.9.06h2.14a10 10 0 0 0 .5 1.1l.01.03v.01h.01l.06.08q.22.28.58.28h-3.3c-1.25 0-2.23 0-3.02-.06a5 5 0 0 1-2.06-.51c-1-.5-1.8-1.3-2.3-2.3a5 5 0 0 1-.5-2.06c-.07-.8-.07-1.77-.07-3.02v-2.6c0-1.25 0-2.23.06-3.02.07-.8.2-1.46.51-2.06.5-1 1.3-1.8 2.3-2.3a5 5 0 0 1 2.06-.5c.8-.07 1.77-.07 3.02-.07z" />
    </IconBase>
  ))
);

FinderRegularDuotone.displayName = 'FinderRegularDuotone';

// Triple export pattern (lucide-react style)
export { FinderRegularDuotone, FinderRegularDuotone as FinderRegularDuotoneIcon, FinderRegularDuotone as SiFinderRegularDuotone };
export default FinderRegularDuotone;
export type { FinderRegularDuotoneProps };
