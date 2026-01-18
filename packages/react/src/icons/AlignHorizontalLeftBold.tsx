import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalLeftBoldProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftBold = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="m13.48 12.75.42.02q.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H8.5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9t.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.03.9-.02h4.98m-4.98 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87q.04.06.1.1l.13.02.74.01H13l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02h-.3l-.44-.01zM19.48 5.25l.42.02q.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H8.5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9t.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.02.9-.02h10.98m-10.98 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87q.04.06.1.1l.13.02.74.01H19l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02h-.3L19 7.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalLeftBold.displayName = 'AlignHorizontalLeftBold';

// Triple export pattern (lucide-react style)
export { AlignHorizontalLeftBold, AlignHorizontalLeftBold as AlignHorizontalLeftBoldIcon, AlignHorizontalLeftBold as SiAlignHorizontalLeftBold };
export type { AlignHorizontalLeftBoldProps };
