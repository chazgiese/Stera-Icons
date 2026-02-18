import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FinderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FinderFillDuotone = memo(
  forwardRef<SVGSVGElement, FinderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="finder-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16 2.63c2.97 0 5.38 2.4 5.38 5.37v8c0 2.97-2.41 5.37-5.38 5.38h-2l-.09-.01-.12-.02h-.02a1 1 0 0 1-.28-.14l-.02-.02-.06-.04-.02-.02-.13-.16v-.01l-.01-.02q-.01 0-.02-.03a4 4 0 0 1-.26-.5q-.24-.5-.54-1.5-.18-.58-.34-1.36c1.8-.01 3.6-.58 5.15-1.7a.88.88 0 0 0-1.03-1.42 7 7 0 0 1-4.4 1.37q-.1-.82-.14-1.78a7 7 0 0 1-1.83-.15l-.33-.07H9.5a.9.9 0 0 1-.64-1.07 63 63 0 0 1 2.03-6.23 119 119 0 0 1 1.2-3.08l.08-.19.02-.05.01-.01a.9.9 0 0 1 .81-.54zm-.22 4.25c-.49 0-.88.39-.88.87v1.42a.88.88 0 0 0 1.75 0V7.75c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M16.2 14.43a.88.88 0 0 1 1.04 1.42 8.9 8.9 0 0 1-10.48 0 .88.88 0 0 1 1.03-1.42 7.1 7.1 0 0 0 8.42 0M7.28 6.88c.48 0 .87.39.87.87v1.42a.88.88 0 0 1-1.75 0V7.75c0-.48.4-.87.88-.87M15.78 6.88c.48 0 .87.39.87.87v1.42a.88.88 0 0 1-1.75 0V7.75c0-.48.4-.87.88-.87" />
        <path d="M13 2.63a.9.9 0 0 0-.8.53h-.01v.02l-.03.05-.07.19-.29.7-.1.25h-1c-1.27 0-2.18 0-2.88.06s-1.13.17-1.47.34q-1.04.54-1.58 1.58c-.17.34-.28.77-.34 1.47s-.05 1.6-.05 2.88v2.6c0 1.27 0 2.18.05 2.88s.17 1.13.34 1.47q.54 1.04 1.58 1.58c.34.17.77.28 1.47.34s1.6.05 2.88.05h1.96a10 10 0 0 0 .57 1.3l.02.02v.02h.01q.06.1.13.17l.02.02.06.04.02.02q.13.09.28.13h.02l.11.03h.04-3.24c-1.25 0-2.23 0-3.03-.06-.8-.07-1.49-.2-2.11-.52a5.4 5.4 0 0 1-2.35-2.35 6 6 0 0 1-.52-2.11c-.07-.8-.06-1.78-.06-3.03v-2.6c0-1.25 0-2.23.06-3.03.07-.8.2-1.49.52-2.11a5.4 5.4 0 0 1 2.35-2.35c.62-.32 1.3-.45 2.11-.52s1.78-.06 3.03-.06z" />
    </IconBase>
  ))
);

FinderFillDuotone.displayName = 'FinderFillDuotone';

// Triple export pattern (lucide-react style)
export { FinderFillDuotone, FinderFillDuotone as FinderFillDuotoneIcon, FinderFillDuotone as SiFinderFillDuotone };
export default FinderFillDuotone;
export type { FinderFillDuotoneProps };
