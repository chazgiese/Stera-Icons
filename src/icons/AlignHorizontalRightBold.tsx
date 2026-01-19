import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalRightBoldProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightBold = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-right-bold" {...props}>
      <path fill="currentColor" d="M21 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 12.75q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H11q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9t.02-.9q.01-.41.23-.87.28-.56.82-.9l.16-.08.11-.06q.4-.14.76-.17.4-.03.9-.02zm-4.5 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87.1.1.13.02.74.01h4.5l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01zM15.5 5.25q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 8.75 2 8.25t.02-.9a2.25 2.25 0 0 1 1.05-1.77l.16-.08.11-.06q.4-.15.76-.17.4-.02.9-.02zM5 7.25l-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87q.03.06.1.1l.13.02.74.01h10.5l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalRightBold.displayName = 'AlignHorizontalRightBold';

// Triple export pattern (lucide-react style)
export { AlignHorizontalRightBold, AlignHorizontalRightBold as AlignHorizontalRightBoldIcon, AlignHorizontalRightBold as SiAlignHorizontalRightBold };
export default AlignHorizontalRightBold;
export type { AlignHorizontalRightBoldProps };
