import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BlocksRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BlocksRegularDuotone = memo(
  forwardRef<SVGSVGElement, BlocksRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="blocks-duotone" {...props}>
      <path fillRule="evenodd" d="M8.75 6.25a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V8.25c0-1.1.9-2 2-2zm-5 13.5c0 .28.22.5.5.5h5v-5.5h-5.5zm7 .5h5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5h-5zm-6.5-12.5a.5.5 0 0 0-.5.5v5h5.5v-5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BlocksRegularDuotone.displayName = 'BlocksRegularDuotone';

// Triple export pattern (lucide-react style)
export { BlocksRegularDuotone, BlocksRegularDuotone as BlocksRegularDuotoneIcon, BlocksRegularDuotone as SiBlocksRegularDuotone };
export default BlocksRegularDuotone;
export type { BlocksRegularDuotoneProps };
