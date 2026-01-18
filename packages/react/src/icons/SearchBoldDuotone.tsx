import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, SearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21.81 19.69a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73a9 9 0 0 0 2.12-2.12z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10.75 1.75a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBoldDuotone.displayName = 'SearchBoldDuotone';

export { SearchBoldDuotone };
export type { SearchBoldDuotoneProps };
