import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlignHorizontalCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="align-horizontal-center-bold-duotone" {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2.25h2zM13 12.75h-2v-1.5h2zM12 2a1 1 0 0 1 1 1v2.25h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15 12.75q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9-.23.87q-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H9q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9t.02-.9a2.25 2.25 0 0 1 1.05-1.77l.16-.08.11-.06q.4-.14.76-.17.4-.03.9-.02zm-6 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87.1.1.13.02.74.01h6l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01zM18 5.25q.5 0 .9.02.36.02.76.17l.11.06q.56.28.9.82l.08.16c.16.3.2.6.23.87q.03.4.02.9t-.02.9q-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02H6q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q3 8.75 3 8.25t.02-.9a2.25 2.25 0 0 1 1.05-1.77l.16-.08.11-.06q.4-.14.76-.17.4-.02.9-.02zm-12 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74.03.87.1.1.13.02.74.01h12l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterBoldDuotone.displayName = 'AlignHorizontalCenterBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterBoldDuotone, AlignHorizontalCenterBoldDuotone as AlignHorizontalCenterBoldDuotoneIcon, AlignHorizontalCenterBoldDuotone as SiAlignHorizontalCenterBoldDuotone };
export default AlignHorizontalCenterBoldDuotone;
export type { AlignHorizontalCenterBoldDuotoneProps };
