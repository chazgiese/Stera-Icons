import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.75 3.2a1.25 1.25 0 0 1 2.13-.88l8.27 8.27a2 2 0 0 1 0 2.82l-8.27 8.27c-.78.78-2.13.23-2.13-.89v-4.04H6A2.75 2.75 0 0 1 3.25 14v-4A2.75 2.75 0 0 1 6 7.25h3.75zm1.5 4.8c0 .41-.34.75-.75.75H6c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h4.5c.41 0 .75.34.75.75v4.19l7.84-7.84a.5.5 0 0 0 0-.7L11.25 3.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigRightRegular.displayName = 'ArrowBigRightRegular';

export { ArrowBigRightRegular };
export type { ArrowBigRightRegularProps };
