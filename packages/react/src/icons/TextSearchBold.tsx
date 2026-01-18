import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSearchBoldProps = Omit<IconBaseProps, 'children'>;

const TextSearchBold = memo(
  forwardRef<SVGSVGElement, TextSearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 9a4.5 4.5 0 0 1 3.94 6.67l1.94 1.95a1.25 1.25 0 0 1-1.76 1.76l-1.95-1.94q-.97.55-2.17.56a4.5 4.5 0 1 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M8.1 17a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M8.1 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextSearchBold.displayName = 'TextSearchBold';

export { TextSearchBold };
export type { TextSearchBoldProps };
