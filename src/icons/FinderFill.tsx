import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillProps = Omit<IconBaseProps, 'children'>;

const FinderFill = memo(
  forwardRef<SVGSVGElement, FinderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill" {...props}>
      <path fill="currentColor" d="M6.19 14.74a1 1 0 0 1 1.4-.22 7.5 7.5 0 0 0 4.06 1.43q.13 1.11.3 2a9.5 9.5 0 0 1-5.54-1.81 1 1 0 0 1-.22-1.4M7 6.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-3 2.79l-.1.04-.17.06-.1.03a6 6 0 0 1-.7.17l-.13.02-.16.03-.16.02-.46.05h-.1l-.54.04h-.11Q14.88 22 14 22h-3q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1.5a17 17 0 0 1-.54-2.04 9.5 9.5 0 0 0 5.63-1.82 1 1 0 0 0-1.18-1.62 7.5 7.5 0 0 1-4.76 1.43q-.09-.81-.13-1.74a7 7 0 0 1-1.88-.16L9.37 14l-.08-.02h-.03a1 1 0 0 1-.73-1.22c.51-2.06 1.4-4.6 2.16-6.61q.47-1.25.83-2.15zm5 2.5a1 1 0 0 0-1 1V9a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderFill.displayName = 'FinderFill';

// Triple export pattern (lucide-react style)
export { FinderFill, FinderFill as FinderFillIcon, FinderFill as SiFinderFill };
export default FinderFill;
export type { FinderFillProps };
