import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BlocksFillProps = Omit<IconBaseProps, 'children'>;

const BlocksFill = memo(
  forwardRef<SVGSVGElement, BlocksFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="blocks-fill" {...props}>
      <path fillRule="evenodd" d="M8.75 6C9.99 6 11 7 11 8.25V13h4.75c1.24 0 2.25 1 2.25 2.25v4.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 22 2 21 2 19.75V8.25C2 7.01 3 6 4.25 6zM4 19.75c0 .14.11.25.25.25H9v-5H4zm7 .25h4.75q.23-.02.25-.25v-4.5a.25.25 0 0 0-.25-.25H11zM4.25 8a.25.25 0 0 0-.25.25V13h5V8.25A.25.25 0 0 0 8.75 8z" clipRule="evenodd" />
        <path d="M19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

BlocksFill.displayName = 'BlocksFill';

// Triple export pattern (lucide-react style)
export { BlocksFill, BlocksFill as BlocksFillIcon, BlocksFill as SiBlocksFill };
export default BlocksFill;
export type { BlocksFillProps };
