import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BlocksRegularProps = Omit<IconBaseProps, 'children'>;

const BlocksRegular = memo(
  forwardRef<SVGSVGElement, BlocksRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 6.25a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V8.25c0-1.1.9-2 2-2zm-5 13.5c0 .28.22.5.5.5h5v-5.5h-5.5zm7 .5h5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5h-5zm-6.5-12.5a.5.5 0 0 0-.5.5v5h5.5v-5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BlocksRegular.displayName = 'BlocksRegular';

export { BlocksRegular };
export type { BlocksRegularProps };
