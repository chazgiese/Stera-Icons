import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SearchBoldProps = Omit<IconBaseProps, 'children'>;

const SearchBold = memo(
  forwardRef<SVGSVGElement, SearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.75 1.75a9 9 0 0 1 7.33 14.21l3.73 3.73a1.5 1.5 0 1 1-2.12 2.12l-3.73-3.73a9 9 0 1 1-5.21-16.33m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
    </IconBase>
  ))
);

SearchBold.displayName = 'SearchBold';

// Triple export pattern (lucide-react style)
export { SearchBold, SearchBold as SearchBoldIcon, SearchBold as SiSearchBold };
export type { SearchBoldProps };
