import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutMasonryBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryBold = memo(
  forwardRef<SVGSVGElement, LayoutMasonryBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-masonry-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 15C9.99 15 11 16 11 17.25v2.5C11 20.99 10 22 8.75 22h-4.5C3.01 22 2 21 2 19.75v-2.5C2 16.01 3 15 4.25 15zm-4.5 2a.25.25 0 0 0-.25.25v2.5c0 .14.11.25.25.25h4.5q.23-.02.25-.25v-2.5a.25.25 0 0 0-.25-.25zM19.75 11c1.24 0 2.25 1 2.25 2.25v6.5c0 1.24-1 2.25-2.25 2.25h-4.5C14.01 22 13 21 13 19.75v-6.5c0-1.24 1-2.25 2.25-2.25zm-4.5 2a.25.25 0 0 0-.25.25v6.5q.02.23.25.25h4.5q.23-.02.25-.25v-6.5a.25.25 0 0 0-.25-.25zM8.75 2C9.99 2 11 3 11 4.25v6.5C11 11.99 10 13 8.75 13h-4.5C3.01 13 2 12 2 10.75v-6.5C2 3.01 3 2 4.25 2zm-4.5 2a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25h4.5q.23-.02.25-.25v-6.5A.25.25 0 0 0 8.75 4zM19.75 2C20.99 2 22 3 22 4.25v2.5C22 7.99 21 9 19.75 9h-4.5C14.01 9 13 8 13 6.75v-2.5C13 3.01 14 2 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v2.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-2.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutMasonryBold.displayName = 'LayoutMasonryBold';

// Triple export pattern (lucide-react style)
export { LayoutMasonryBold, LayoutMasonryBold as LayoutMasonryBoldIcon, LayoutMasonryBold as SiLayoutMasonryBold };
export default LayoutMasonryBold;
export type { LayoutMasonryBoldProps };
