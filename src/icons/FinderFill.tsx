import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillProps = Omit<IconBaseProps, 'children'>;

const FinderFill = memo(
  forwardRef<SVGSVGElement, FinderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill" {...props}>
      <path d="M6.57 14.63a.9.9 0 0 1 1.22-.2 7 7 0 0 0 4.02 1.37q.11.97.28 1.75a9 9 0 0 1-5.33-1.7.9.9 0 0 1-.2-1.22M7.28 6.88c.48 0 .87.39.87.87v1.42a.88.88 0 0 1-1.75 0V7.75c0-.48.4-.87.88-.87" />
        <path fillRule="evenodd" d="M16 2.63q1.32 0 2.42.57l.02.01.03.01.33.2h.01l.27.17.1.08.08.06.12.1.07.05a5 5 0 0 1 .8.83l.08.1.07.1a5 5 0 0 1 .36.6l.03.05.01.02q.56 1.1.57 2.42v8q0 1.32-.57 2.41l-.01.03-.03.05-.06.11-.05.1-.06.1-.18.28-.08.1-.06.08-.1.12q-.01.03-.04.06a5 5 0 0 1-.68.68l-.07.06-.12.09-.07.06-.11.08-.1.06-.51.3-.03.02h-.02q-1.1.57-2.42.59h-5.3c-1.25 0-2.23 0-3.03-.07s-1.49-.2-2.11-.52a5.4 5.4 0 0 1-2.35-2.35 6 6 0 0 1-.52-2.11c-.07-.8-.06-1.78-.06-3.03v-2.6c0-1.25 0-2.23.06-3.03.07-.8.2-1.49.52-2.11a5.4 5.4 0 0 1 2.35-2.35c.62-.32 1.3-.45 2.11-.52s1.78-.06 3.03-.06zm-5.3 1.75c-1.27 0-2.18 0-2.88.05s-1.13.17-1.47.34q-1.04.54-1.58 1.58c-.17.34-.28.77-.34 1.47s-.05 1.6-.05 2.88v2.6c0 1.27 0 2.18.05 2.88s.17 1.13.34 1.47q.54 1.04 1.58 1.58c.34.17.77.28 1.47.34s1.6.05 2.88.05h1.96a13 13 0 0 1-.57-2.07 9 9 0 0 0 5.15-1.7.88.88 0 0 0-1.03-1.42 7 7 0 0 1-4.4 1.37q-.1-.82-.14-1.78a7 7 0 0 1-1.83-.15l-.33-.07H9.5a.9.9 0 0 1-.64-1.07 63 63 0 0 1 2.03-6.23l.82-2.12zm5.08 2.5c-.48 0-.88.39-.88.87v1.42a.88.88 0 0 0 1.75 0V7.75c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

FinderFill.displayName = 'FinderFill';

// Triple export pattern (lucide-react style)
export { FinderFill, FinderFill as FinderFillIcon, FinderFill as SiFinderFill };
export default FinderFill;
export type { FinderFillProps };
