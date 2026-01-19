import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalTopBoldProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopBold = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-top-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.25 5.5q.5 0 .9.02A2.25 2.25 0 0 1 11 6.72c.16.3.2.6.23.88q.03.4.02.9V19q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.9-.82l-.08-.16-.06-.11a2 2 0 0 1-.17-.76q-.02-.4-.02-.9V8.5q0-.5.02-.9.02-.37.17-.76l.06-.11q.28-.56.82-.9l.16-.08c.3-.16.6-.2.87-.23q.4-.02.9-.02m0 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74V19l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V8.5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02zM15.75 5.5q.5 0 .9.02a2.25 2.25 0 0 1 1.85 1.2c.16.3.2.6.23.88q.03.4.02.9V13q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.9-.82l-.08-.16-.06-.11a2 2 0 0 1-.17-.76q-.03-.4-.02-.9V8.5q0-.5.02-.9.02-.37.17-.76l.06-.11q.28-.56.82-.9l.16-.08c.3-.16.6-.2.87-.23q.4-.02.9-.02m0 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74V13l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V8.5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02z" clipRule="evenodd" />
        <path fill="currentColor" d="M21 2a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

AlignVerticalTopBold.displayName = 'AlignVerticalTopBold';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopBold, AlignVerticalTopBold as AlignVerticalTopBoldIcon, AlignVerticalTopBold as SiAlignVerticalTopBold };
export type { AlignVerticalTopBoldProps };
