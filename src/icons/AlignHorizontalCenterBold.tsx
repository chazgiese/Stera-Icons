import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterBoldProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterBold = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-center-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 12.75h2q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-2V21a1 1 0 0 1-2 0v-2.25H9q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9t.02-.9a2.25 2.25 0 0 1 1.05-1.77l.16-.08.11-.06q.4-.14.76-.17.4-.03.9-.02h2v-1.5H6q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q3 8.75 3 8.25t.02-.9a2.25 2.25 0 0 1 1.05-1.77l.16-.08.11-.06q.4-.14.76-.17.4-.02.9-.02h5V3a1 1 0 1 1 2 0v2.25h5q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-5zm-4 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87.1.1.13.02.74.01h6l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01zm-3-7.5-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87.1.1.13.02.74.01h12l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterBold.displayName = 'AlignHorizontalCenterBold';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterBold, AlignHorizontalCenterBold as AlignHorizontalCenterBoldIcon, AlignHorizontalCenterBold as SiAlignHorizontalCenterBold };
export default AlignHorizontalCenterBold;
export type { AlignHorizontalCenterBoldProps };
