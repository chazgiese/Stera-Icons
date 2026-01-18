import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalCenterBoldProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterBold = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.25 3q.5 0 .9.02A2.25 2.25 0 0 1 11 4.22c.16.3.2.6.23.88q.03.4.02.9v5h1.5V9q0-.5.02-.9.02-.37.17-.76l.06-.11q.28-.56.82-.9l.16-.08c.3-.16.6-.2.87-.23q.4-.02.9-.02t.9.02a2.25 2.25 0 0 1 1.85 1.2c.16.3.2.6.23.88q.03.4.02.9v2H21a1 1 0 0 1 0 2h-2.25v2q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.9-.82l-.08-.16-.06-.11a2 2 0 0 1-.17-.76q-.03-.4-.02-.9v-2h-1.5v5q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.9-.82l-.08-.16-.06-.11a2 2 0 0 1-.17-.76q-.02-.4-.02-.9v-5H3a1 1 0 1 1 0-2h2.25V6q0-.5.02-.9.02-.37.17-.76l.06-.11q.28-.56.82-.9l.16-.08c.3-.16.6-.2.87-.23q.4-.03.9-.02m0 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v12l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V6l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02zm7.5 3-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v6l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V9l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterBold.displayName = 'AlignVerticalCenterBold';

export { AlignVerticalCenterBold };
export type { AlignVerticalCenterBoldProps };
