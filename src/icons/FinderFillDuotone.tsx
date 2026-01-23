import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderFillDuotone = memo(
  forwardRef<SVGSVGElement, FinderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.36.07c.9.07 1.66.23 2.36.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.08.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-1.18.6-2.63.64-4.72.65a1 1 0 0 1-.86-.49c-.08-.13-.73-1.28-1.19-3.55a9.5 9.5 0 0 0 5.64-1.82 1 1 0 0 0-1.18-1.62 7.5 7.5 0 0 1-4.76 1.43q-.09-.81-.13-1.74a7 7 0 0 1-1.88-.16L9.37 14l-.08-.02h-.03a1 1 0 0 1-.73-1.22 67 67 0 0 1 2.16-6.61 126 126 0 0 1 1.27-3.26l.09-.2.02-.06v-.01A1 1 0 0 1 13 2m3 4.5a1 1 0 0 0-1 1V9a1 1 0 0 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 2a1 1 0 0 0-.92.62l-.01.01-.02.06-.09.2-.3.74-.14.37H11c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1.5c.31.93.59 1.43.64 1.51a1 1 0 0 0 .79.49H11q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2z" />
        <path fill="currentColor" d="M16.41 14.52a1 1 0 0 1 1.18 1.62 9.5 9.5 0 0 1-11.18 0 1 1 0 0 1 1.18-1.62 7.5 7.5 0 0 0 8.82 0M7 6.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1M16 6.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FinderFillDuotone.displayName = 'FinderFillDuotone';

// Triple export pattern (lucide-react style)
export { FinderFillDuotone, FinderFillDuotone as FinderFillDuotoneIcon, FinderFillDuotone as SiFinderFillDuotone };
export default FinderFillDuotone;
export type { FinderFillDuotoneProps };
