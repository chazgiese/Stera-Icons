import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignVerticalBottomBoldProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomBold = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-vertical-bottom-bold" {...props}>
      <path fill="currentColor" d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M8.25 2q.5 0 .9.02A2.25 2.25 0 0 1 11 3.22c.16.3.2.6.23.88q.03.4.02.9v10.5q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23l-.16-.08a2.3 2.3 0 0 1-.82-.9l-.06-.11a2 2 0 0 1-.17-.76q-.02-.4-.02-.9V5q0-.5.02-.9.02-.37.17-.76l.06-.11.08-.16q.34-.54.9-.82c.3-.16.6-.2.87-.23q.4-.03.9-.02m0 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v10.5l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02zM15.75 8q.5 0 .9.02.41.01.87.23.65.33.98.98c.16.3.2.6.23.87q.03.4.02.9v4.5q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02t-.9-.02a2 2 0 0 1-.87-.23l-.16-.08a2.3 2.3 0 0 1-.82-.9l-.06-.11a2 2 0 0 1-.17-.76q-.03-.4-.02-.9V11q0-.5.02-.9.02-.37.17-.76l.06-.11.08-.16q.34-.54.9-.82c.3-.16.6-.2.87-.23q.4-.02.9-.02m0 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v4.5l.03.87q.04.06.1.1l.13.02.74.01.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74V11l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalBottomBold.displayName = 'AlignVerticalBottomBold';

// Triple export pattern (lucide-react style)
export { AlignVerticalBottomBold, AlignVerticalBottomBold as AlignVerticalBottomBoldIcon, AlignVerticalBottomBold as SiAlignVerticalBottomBold };
export type { AlignVerticalBottomBoldProps };
