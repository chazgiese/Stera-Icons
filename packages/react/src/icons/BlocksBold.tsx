import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BlocksBoldProps = Omit<IconBaseProps, 'children'>;

const BlocksBold = memo(
  forwardRef<SVGSVGElement, BlocksBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 6C9.99 6 11 7 11 8.25V13h4.75c1.24 0 2.25 1 2.25 2.25v4.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 22 2 21 2 19.75V8.25C2 7.01 3 6 4.25 6zM4 19.75c0 .14.11.25.25.25H9v-5H4zm7 .25h4.75q.23-.02.25-.25v-4.5a.25.25 0 0 0-.25-.25H11zM4.25 8a.25.25 0 0 0-.25.25V13h5V8.25A.25.25 0 0 0 8.75 8z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M19.75 2C20.99 2 22 3 22 4.25v4.5C22 9.99 21 11 19.75 11h-4.5C14.01 11 13 10 13 8.75v-4.5C13 3.01 14 2 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v4.5q.02.23.25.25h4.5q.23-.02.25-.25v-4.5a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

BlocksBold.displayName = 'BlocksBold';

// Triple export pattern (lucide-react style)
export { BlocksBold, BlocksBold as BlocksBoldIcon, BlocksBold as SiBlocksBold };
export type { BlocksBoldProps };
